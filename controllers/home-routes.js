const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const sequelize = require('../config/connection');
// const { post } = require('./api');

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

router.get('/dashboard', (req, res) => {
  User.findOne(
    {
      id: req.session.user_id
    },
    {
      include: [Post]
    }
  )
    .then(user => {
      console.log("user: ", user)
      const dbUser = user.get({ plain: true })
      const posts = dbUser.posts
      res.render('dashboard', { posts })
    })
})


router.get("/homepage", (req, res) => {
  Post.findAll({ include: [{ model: Comment, include: [User] }] }).then(posts => {
    const allPosts = posts.map(post => post.get({ plain: true }))
    console.log("All posts:", allPosts.comments)
    res.render('homepage', { allPosts, loggedIn: req.session.loggedIn })
  })

});

//Sign up route
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
