const router = require('express').Router();

const homeRoutes = require('../home-routes.js');
const userRoutes = require('./userRoutes.js');
const commentRoutes = require('./commentRoutes.js');
const postRoutes = require('./postRoutes.js');

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;
