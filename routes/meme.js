const { csrfProtection, asyncHandler } = require('./utils');

const express = require('express');
const router = express.Router();
const { Meme } = require('../db/models');

/* GET meme page. */
router.get('/create', csrfProtection, function(req, res, next) {
  res.render('create-meme', { title: 'Memeium - Create Meme' });
});

module.exports = router;
