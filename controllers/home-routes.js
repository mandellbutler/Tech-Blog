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

  router.get('/', (req, res) => {
    res.render('homepage')
  })
});

//Sign up route
router.get('/signup', (req, res) => {
  res.render('signup');
});

//Render All posts to upon login
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'post_content',
      'user_id',
      'created_at'
    ],
    include: [{
      model: Comment,
      attributes: ['id', 'user_comment', 'user_id', 'post_id', 'created_at'],
      include: {
        model: User,
        attributes: ['name']
      }
    },
    {
      model: User,
      attributes: ['name']
    }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
