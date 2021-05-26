const router = require('express').Router();

const homeRoutes = require('../home-routes.js');
const userRoutes = require('./userRoutes.js');
const commentRoutes = require('./commentRoutes.js');

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
