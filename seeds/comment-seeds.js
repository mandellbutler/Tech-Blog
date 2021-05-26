const { Comment } = require('../models');

const commentData = [
  {
    user_comment: 'Right on man! I was thinking the same thing!',
    user_id: 1,
    post_id: 1,
  },
  {
    user_comment: 'Well said...',
    user_id: 2,
    post_id: 2,
  },
  {
    user_comment: "Agreed. I am interested to hear your thoughts on the benefits of learning how to code with a blindfold on?",
    user_id: 3,
    post_id: 3,
  },
  {
    user_comment: 'I dont understand how you know SO much! Your posts are always so amazing and insightful!',
    user_id: 4,
    post_id: 4,
  },
  {
    user_comment: 'Thank you for all of your hard work. The coding community owes you a debt of gratitude. Oh yeah, I found your instagram. Omg youre so cute too! #thristtrap',
    user_id: 5,
    post_id: 5,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;