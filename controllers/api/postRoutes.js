const router = require('express').Router();
const Post = require('../../models/Post');//NEED TO HAVE USER MODEL OR CHANGE THIS 'USER' ENDPOINT

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


module.exports = router;