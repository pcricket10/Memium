const express = require('express');
const { check, validationResult } = require('express-validator');
const csrf = require('csurf')
const { csrfProtection, asyncHandler } = require('./utils');
const router = express.Router();
const db = require('../db/models');
const { requireAuth } = require('../auth');

// router.post('/meme/:id(\\d+/like/add)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
//     const { userId } = req.session.auth;
//     const  memeId  = parseInt(req.params.id);

//     const meme = await db.Meme.findByPk(memeId { include: })

//     const like = await db.Like.build({
//         userId,
//         memeId,
//     })
//     const { name,
//       meme_url
//     } = req.body

//     const meme = db.Meme.build({
//       name,
//       meme_url,
//       user_id: userId
//     })
//     const validatorErrors = validationResult(req);

//     if (validatorErrors.isEmpty()) {
//       await meme.save();
//       res.redirect('/');
//     } else {
//       const errors = validatorErrors.array().map((error) => error.msg);
//       res.render('create-meme', {
//         title: 'Create Meme',
//         meme,
//         errors,
//         csrfToken: req.csrfToken(),
//       });
//     }
//   }));

router.patch('/meme/:id(\\d+/upLike)', asyncHandler(async (req, res) => {
    console.log('like-----------------!!!!!!!!!!!!!!!!!!')
    const { userId } = req.session.auth;
    const { memeId } = parseInt(req.params.id);
    const { liked } = req.body

    const meme = db.liked.build({
        user_id: userId,
        memeId: memeId,
        liked: liked
    });

    await meme.save();
    if (meme) {
        res.json({ msg: "Meme liked!!!" });
    } else {
        res.json({ msg: "Meh Meme" });
    }

}));



module.exports = router;
