const { Post } = require('../models');

const postdata = [
  {
    title: 'Need help on the new Mario game.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt aliquam illum eum sed facere magni impedit natus doloribus repudiandae.',
    user_id: 1,
  },
  {
    title: 'Dark Souls Speed Run Tips',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquid? Aliquid fugiat impedit minima voluptate debitis vitae consequatur accusamus, possimus odit voluptates inventore architecto ipsa quaerat. Harum neque officia, iusto dolorum facilis velit dicta quis, voluptas doloremque molestiae veritatis perferendis alias at. Animi sint architecto nesciunt eius voluptatem itaque amet.',
    user_id: 5,
  },
  {
    title: 'Help installing Steam?',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ducimus fugit voluptatibus.',
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
