const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const sequelize = require('../config/connection');

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');

  router.get('/homepage', (req, res) => {
    res.render('homepage')
  })
});

router.get("/", (req, res) => {
  res.render('homepage')
});

//Sign up route
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
