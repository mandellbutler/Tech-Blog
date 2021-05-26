const { Post } = require('../models');

const postData = [
  {
    title: 'WebDev & The Pandemic: A Critical Analysis of My Lonesome Life',
    post_content: 'Man...this pandemic sucks. But how can we, as web developers, design applications that can help people connect while in seclusion? Well....',
    user_id: '1',
  },
  {
    title: 'Stay Out of My Cookie Jar!: The errosion of ethics in data collection.',
    post_content: 'This site uses cookie, which is necessay at times, but beware of the cookie monster.',
    user_id: '1',
  },
  {
    title: 'Haters Gone Hate',
    post_content: 'Let me vent for a minute. Lend me your ear...',
    user_id: '1',
  },
  {
    title: 'The Importance of Unplugging...',
    post_content: 'Sometimes when you cant find a solution to your everyday problems, there comes a time when we all just need to "unplug"',
    user_id: '2',
  },
  {
    title: 'Apples...More Than A Fruit',
    post_content: 'Lets talk about the latest and greatest technology coming from Apple this fall...',
    user_id: '1',
  },
  {
    title: 'The Never-Ending Nightmare That is Github',
    post_content: 'Lately I have been having this reocurring dream about merge conflicts...let me explain....',
    user_id: '3',
  },

];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
