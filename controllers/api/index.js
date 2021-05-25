const router = require('express').Router();

const homeRoutes = require('../home-routes.js');
const userRoutes = require('./userRoutes.js');

router.use('/', homeRoutes);
router.use('/user', userRoutes);

module.exports = router;
