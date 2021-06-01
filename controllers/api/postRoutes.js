const router = require('express').Router();
const Post = require('../../models/Post');//NEED TO HAVE USER MODEL OR CHANGE THIS 'USER' ENDPOINT
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
// CREATE a new comment
router.post('/', async (req, res) => {
  try {
    const newPost = req.body;
    // create the newComment
    const postData = await User.create(newPost);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get ALL Comments
router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll();
    res.status(200).json(allPosts);
=======
//Render All posts to render upon login
router.get('/', async (req, res) => {
  try {
    let posts = await Post.findAll();
    posts = posts.map(post => post.get({ plain: true }))
    console.log(posts)
    res.render('post', { posts });
>>>>>>> main
  } catch (err) {
    res.status(400).json(err);
  }
});

<<<<<<< HEAD
//Get comments by user ID
<<<<<<< HEAD
=======

>>>>>>> main
=======
>>>>>>> main
router.get('/:id', async (req, res) => {
  try {
    const postByUserId = await Post.findByPk(req.params.user_id);
    res.status(200).json(postByUserId);
  } catch (err) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
    res.status(400).json({ message: "Post's User ID not found." });
  }
});

//Get comments by user ID
router.get('/:id', async (req, res) => {
  try {
    const postById = await Post.findByPk(req.params.id);
    res.status(200).json(postById);
  } catch (err) {
    res.status(400).json({ message: "Post ID not found." });
  }
});

//Delete
router.delete('/:id', async (req, res) => {
  try {
    const postsById = await Post.findByPk(req.params.id);
    res.status(200).json(postsById);
  } catch (err) {
    res.status(400).json({ message: "Post ID not found." });
  }
});

<<<<<<< HEAD
=======
=======
// const router = require('express').Router();
// const Post = require('../../models/Post');//NEED TO HAVE USER MODEL OR CHANGE THIS 'USER' ENDPOINT
>>>>>>> 67718acc9a76d9389116e3ece42bcf8b01f42852

//Render All posts to render upon login
router.get('/', async (req, res) => {
  try {
    let posts = await Post.findAll();
    posts = posts.map(post => post.get({ plain: true }))
    console.log(posts)
    res.render('post', { posts });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const postByUserId = await Post.findByPk(req.params.user_id);
    res.status(200).json(postByUserId);
  } catch (err) {
>>>>>>> main
    res.status(400).json({ message: "Comment's User ID not found." });
  }
});
// router.get('/', (req, res) => {
//   Post.findAll({
//     attributes: [
//       'id',
//       'title',
//       'post_content',
//       'user_id',
//       'created_at'
//     ],
//     include: [{
//       model: Comment,
//       attributes: ['id', 'user_comment', 'user_id', 'post_id', 'created_at'],
//       include: {
//         model: User,
//         attributes: ['name']
//       }
//     },
//     {
//       model: User,
//       attributes: ['name']
//     }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));
//       res.render('post', { posts, loggedIn: req.session.loggedIn });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main

module.exports = router;