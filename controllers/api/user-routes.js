const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users
router.get('/', async (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(error => {
      console.log(err);
      res.status(500).json(error);
    });
});

//find a user by id
router.get('/:id', async (req, res) => {
  try {
  const dbUserData = await User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'text', 'created_at']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'created_at'],
        include: {
          model: Post,
          attributes: ['title']
        }
      }
    ]
  })
  if (!dbUserData) {
    res.status(404).json({ message: 'No user found with this id' });
    return;
  }
  res.json(dbUserData);
} catch (error) {
  res.status(500).json(error);
}
});

//Creates a User
router.post('/', async (req, res) => {
  try {
 const dbUserData = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  req.session.save(() => {
    req.session.user_id = dbUserData.id;
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;
  });
  res.json(dbUserData);
} catch (error) {
  res.status(400).json(error);
}
});

//Logs in with username
router.post('/login', async (req, res) => {
  try {
  const dbUserData = await User.findOne({
    where: {
      username: req.body.username
    }
  }) 
  if (!dbUserData) {
    res.status(400).json({ message: 'No user with that username!' });
    return;
  }
  const validPassword = dbUserData.checkPassword(req.body.password);
  if (!validPassword) {
    res.status(400).json({ message: 'Incorrect password!' });
    return;
  }
  req.session.save(() => {
    req.session.user_id = dbUserData.id;
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;
    res.json({ user: dbUserData, message: 'You are now logged in!' });
  });
  res.json(dbUserData);
} catch (error) {
    res.status(400).json(error);
}
});

//User is able to logout
router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;