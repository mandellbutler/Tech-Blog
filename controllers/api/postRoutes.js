const router = require('express').Router();
const Post = require('../../models/Post');//NEED TO HAVE USER MODEL OR CHANGE THIS 'USER' ENDPOINT

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
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get comments by user ID
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