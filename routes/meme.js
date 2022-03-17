const express = require('express');
const { check, validationResult } = require('express-validator');
const csrf = require('csurf')
const { csrfProtection, asyncHandler } = require('./utils');
const router = express.Router();
const db = require('../db/models');
const { requireAuth } = require('../auth');

/* GET meme page. */
router.get('/meme/create', requireAuth, csrfProtection, function (req, res) {
  const meme = db.Meme.build()
  res.render('create-meme', {
    title: 'Add Meme',
    meme,
    csrfToken: req.csrfToken(),
  });
});


// routeer.get('/', requireAuth, asyncHandler(async (req, res) => {
// }));

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
  const memeId = parseInt(req.params.id);
  const meme = await db.Meme.findByPk(memeId);
  res.render('meme-detail', { meme });
}));

router.get('/meme/delete/:id(\\d+)', csrfProtection, requireAuth,
asyncHandler(async(req, res) => {
  const meme = parseInt(req.params.id);
  res.render('delete-meme', { meme, csrfToken: req.csrfToken() });

}));

router.post('/meme/delete/:id(\\d+)', csrfProtection, requireAuth,
  asyncHandler(async (req, res) => {
    const memeId = parseInt(req.params.id, 10);
    const meme = await db.Meme.findByPk(memeId);
    await meme.destroy();
    res.redirect("/");
  }));

module.exports = router;
