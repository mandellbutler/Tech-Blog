const { User } = require('../models');

const userData = [
  {
    name: 'Jason Mitchell',
    email: 'mrjmitchell@blogpost.com',
    password: 'jason1982',
  },
  {
    name: 'Summer Rain',
    email: 'mrssummerrain@blogpost.com',
    password: 'summer1983',
  },
  {
    name: 'Porter Scottsburger',
    email: 'burgerman22@blogpost.com',
    password: 'beammeup1884',
  },
  {
    name: 'Winter Thyme',
    email: 'winterseason@blogpost.com',
    password: 'winter1993',
  },
  {
    name: 'Toby Peters',
    email: 'tp83@blogpost.com',
    password: 'tobypeters1',
  },
  {
    name: 'Jamie Ashton',
    email: 'ja2345@blogpost.com',
    password: 'jamieHatesmen4eva',
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
