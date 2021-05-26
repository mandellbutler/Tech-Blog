//CUSTOMIZE!!!!!!!!!REF14.1.17

const sequelize = require('../config/connection');
const seedUser = require('./user-seeds');
const seedComment = require('./comment-seeds');
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedComment();

  process.exit(0);
};

seedAll();