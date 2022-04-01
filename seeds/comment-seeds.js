const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum ad veritatis, ratione numquam quibusdam dolorem a beatae sunt reprehenderit voluptates, inventore ex eius ab atque obcaecati hic qui. Accusantium?',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, odit?',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;