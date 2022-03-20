const express = require('express');
const { check, validationResult } = require('express-validator');
const csrf = require('csurf')
const { csrfProtection, asyncHandler } = require('./utils');
const router = express.Router();
const db = require('../db/models');
const { requireAuth } = require('../auth');

router.post('/meme/:id(\\d+)', asyncHandler(async (req, res) => {
    //finds current user and meme id
    const user_id = req.session.auth.userId;
    const meme_id = parseInt(req.params.id);

    console.log(user_id, meme_id)
    //checks if like from the current user and current meme exists
    const likeExists = await db.Like.findOne({
        where: {
            user_id,
            meme_id
        }
    });
    //if exists, delete entry
    if (likeExists) {
        await likeExists.destroy()
        res.send()
    }
    else {
        //doesn't exist, creates entry
        const like = db.Like.build({
            user_id,
            meme_id,
            liked: true
        })
        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            await like.save()
            res.send()
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render('create-meme', {
                title: 'Create Meme',
                like,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    }
}));





module.exports = router;
