const router = require('express').Router();
const Post = require('../../models/Post');//NEED TO HAVE USER MODEL OR CHANGE THIS 'USER' ENDPOINT

//========CREATE=========
//new POST
router.post('/', async (req, res) => {
  try {
    const newPost = req.body;
    console.log("NEW POST REQ: ", newPost)
    // create the newComment
    const postData = await Post.create(newPost);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//=======READ===========
//Get ALL Comments
router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll();
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get post by user ID
router.get('/:id', async (req, res) => {
  try {
    const getById = await Post.findByPk(req.params.id);
    res.status(200).json(getById);
    // console.log(getById)
  } catch (err) {
    res.status(400).json(err);
  }
});

//=========UPDATE============
//post by ID
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: "Post ID not found" });
        return;
      }
      res.json(postData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
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

// const router = require('express').Router();
// const Post = require('../../models/Post');//NEED TO HAVE USER MODEL OR CHANGE THIS 'USER' ENDPOINT

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
    res.status(400).json({ message: "Comment's User ID not found." });
  }
});

module.exports = router;