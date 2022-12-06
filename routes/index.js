const express = require('express');
const router = express.Router();
const { Meme } = require('../db/models');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const memes = await Meme.findAll()

  // res.render('index', { name: 'a/A Express Skeleton Home', url: 'https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip' });
  res.render('index', { memes })
});

module.exports = router;
