// const router = require('express').Router();
// const Post = require('../../models/Post');//NEED TO HAVE USER MODEL OR CHANGE THIS 'USER' ENDPOINT

// //Render All posts to render upon login
// router.get('/', async (req, res) => {
//   try {
//     const allPosts = await Post.findAll();
//     res.status(200).json(allPosts);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// router.get('/:id', async (req, res) => {
//   try {
//     const postByUserId = await Post.findByPk(req.params.user_id);
//     res.status(200).json(postByUserId);
//   } catch (err) {
//     res.status(400).json({ message: "Comment's User ID not found." });
//   }
// });
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

module.exports = router;