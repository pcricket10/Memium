const express = require('express');
const { check, validationResult } = require('express-validator');
const csrf = require('csurf')
const { csrfProtection, asyncHandler } = require('./utils');
const router = express.Router();
const db = require('../db/models');
const { requireAuth } = require('../auth');

/* GET meme page. */

const checkPermissions = (meme, currentUser) => {
  if (meme.user_id !== currentUser.id) {
    const err = new Error('Cannot delete a Meme that does not belong to you.');
    err.status = 403; // Forbidden
    throw err;
  }
};

router.get('/meme/create', requireAuth, csrfProtection, function (req, res) {
  const meme = db.Meme.build()
  res.render('create-meme', {
    title: 'Add Meme',
    meme,
    csrfToken: req.csrfToken(),
  });
});

router.post('/meme/create', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const { userId } = req.session.auth;

  const { name,
    meme_url
  } = req.body

  const meme = db.Meme.build({
    name,
    meme_url,
    user_id: userId
  })
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    await meme.save();
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('create-meme', {
      title: 'Create Meme',
      meme,
      errors,
      csrfToken: req.csrfToken(),
    });
  }

}));

router.get('/meme/:id(\\d+)', asyncHandler(async (req, res) => {
  const meme_id = parseInt(req.params.id);
  const user = req.session.auth;
  const meme = await db.Meme.findByPk(meme_id);
  let authenticated = false;
  let authorized = false
  let like = false;
  //checks if authenticated
  if (req.session.auth) {

    authenticated = true


    //checks if authorized
    if (meme.user_id === user.userId) {
      authorized = true

    }
    let isLiked;



    isLiked = await db.Like.findOne({
      where: {
        user_id: user.userId,
        meme_id
      }
    });

    if (isLiked) like = true;
  };

  //count likes
  let counter = 0;
  const count = await db.Like.count({
    where: { meme_id }
  }).then(count => counter = count)



  res.render('meme-detail', { meme, like, counter, authenticated, authorized });

}));

router.get('/meme/delete/:id(\\d+)', csrfProtection, requireAuth,
  asyncHandler(async (req, res) => {
    const meme_id = parseInt(req.params.id);
    const meme = await db.Meme.findByPk(meme_id);
    checkPermissions(meme, res.locals.user);
    res.render('delete-meme', {
      meme,
      csrfToken: req.csrfToken(),
    });
  }));

router.post('/meme/delete/:id(\\d+)', csrfProtection, requireAuth,
  asyncHandler(async (req, res) => {
    const meme_id = parseInt(req.params.id);
    const meme = await db.Meme.findByPk(meme_id);

    checkPermissions(meme, res.locals.user);

    await meme.destroy();
    res.redirect(`/`);
  }));

module.exports = router;
