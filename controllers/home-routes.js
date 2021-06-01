const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const sequelize = require('../config/connection');
const { post } = require('./api');

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/', (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn });




});


router.get("/homepage", (req, res) => {
  Post.findAll().then(posts => {
    const allPosts = posts.map(post => post.get({ plain: true }))
    res.render('homepage', { allPosts })
  })

});

//Sign up route
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
