const { Comment } = require('../models');

const commentData = [
  {
    user_comment: 'Right on man! I was thinking the same thing!',
    user_id: 6,
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
    user_comment: 'Thank you for all of your hard work. The coding community owes you a debt of gratitude. Oh yeah, I found your instagram. Omg youre so cute too! #thirsttrap',
    user_id: 5,
    post_id: 5,
  },
  {
    user_comment: 'Nightmares are for UI guys! Are you a UI guy or a WebDev guy?! Suck it up bro! #toughlove',
    user_id: 5,
    post_id: 6,
  },
  {
    user_comment: 'OMG, I have the SAME dream!',
    user_id: 4,
    post_id: 6,
  },
  {
    user_comment: 'There is a poem that my mother used to read to me before bedtime...it comes to mind when I read this blog. I would recite it, but unfortunately, it is rather graphic in nature.',
    user_id: 2,
    post_id: 3,
  },
  {
    user_comment: 'I agree 100% with your perspective on this. The pandemic has had a tremendous effect on my productivity and capacity to effectively communicate with my peers. Great insight.',
    user_id: 5,
    post_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;