const { User } = require('../models');

const userData = [
  {
    name: 'Jason Mitchell',
    email: 'mrjmitchell@blogpost.com',
    password: 'jason1982',
  },
  {
    name: 'Summer Rain',
    emai: 'mrssummerrain@blogpost.com',
    password: 'summer1983',
  },
  {
    name: 'Porter Scottsburger',
    emai: 'burgerman22@blogpost.com',
    password: 'beammeup1884',
  },
  {
    name: 'Winter Thyme',
    emai: 'winterseason@blogpost.com',
    password: 'winter1993',
  },
  {
    name: 'Toby Peters',
    emai: 'tp83@blogpost.com',
    password: 'tobypeters1',
  },
  {
    name: 'Jamie Ashton',
    emai: 'ja2345@blogpost.com',
    password: 'jamieHatesmen4eva',
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
