const router = require('express').Router();
const Comment = require('../../models/Comment');//NEED TO HAVE USER MODEL OR CHANGE THIS 'USER' ENDPOINT

// CREATE a new comment
router.post('/', async (req, res) => {
  try {
    const newComment = req.body;
    // create the newComment
    const commentData = await User.create(newComment);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get ALL Comments
router.get('/', async (req, res) => {
  try {
    const allComments = await Comment.findAll();
    res.status(200).json(allComments);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get comments by user ID
router.get('/:id', async (req, res) => {
    try {
        const commentByUserId = await Comment.findByPk(req.params.user_id); 
        res.status(200).json(commentByUserId);
    } catch (err) {
        res.status(400).json({message: "Comment's User ID not found."});
    }
});

//Get comments by user ID
router.get('/:id', async (req, res) => {
    try {
        const commentById = await Comment.findByPk(req.params.id); 
        res.status(200).json(commentById);
    } catch (err) {
        res.status(400).json({message: "Comment ID not found."});
    }
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
      const commentsById = await Comment.findByPk(req.params.id); 
      res.status(200).json(commentsById);
    } catch (err) {
      res.status(400).json({message: "Comment ID not found."});
    }
});


module.exports = router;