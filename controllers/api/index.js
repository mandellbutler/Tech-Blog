const router = require('express').Router();

const homeRoutes = require('../home-routes.js');
const userRoutes = require('./userRoutes.js');
const commentRoutes = require('./commentRoutes.js');
const postRoutes = require('./postRoutes.js');
<<<<<<< HEAD
=======

// const postRoutes = require('./postRoutes.js');
>>>>>>> 67718acc9a76d9389116e3ece42bcf8b01f42852


router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);
<<<<<<< HEAD
=======

// router.use('/post', postRoutes);
>>>>>>> 67718acc9a76d9389116e3ece42bcf8b01f42852


module.exports = router;
