const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/new', (req, res) => {
  res.render('tweets/new')
})

router.post('/', (req, res) => {
  const tweet = req.body;
  console.log(tweet);

  db.query(`
    INSERT INTO tweets (content, author) VALUES ($<content>, $<author>)
  `, tweet
  ).then(() => {
    res.render('/')
  }).catch(error => {
    res.send(error)
  })
})

// posts#index URL: /posts HTTP VERB: GET
router.get('/', (req, res) => {
  db.query(
    `SELECT * FROM tweets ORDER BY id DESC`
  )
    .then(tweets => {
      res.render('tweets/index', {tweets: tweets});
    })
});

// posts#show URL: /posts/:id HTTP VERB: GET
router.get('/:id', (req, res) => {
  const {id} = req.params;
  // const id = req.params.id;
  db.one(
    `SELECT * FROM tweets WHERE id = $<id> LIMIT 1`,
    {id: id}
  )
    .then(tweet => {
      res.render('tweets/show', {tweet: tweet});
    })
    .catch(err => res.send(err));
});

module.exports = router;
