const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');//NEED TO HAVE USER MODEL OR CHANGE THIS 'USER' ENDPOINT

// CREATE a new user
router.post('/signup', async (req, res) => {
  try {
    const newUser = req.body;
    console.log(req.body)
    // hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 10);
    // create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser);
    req.session.save(() => {
      req.session.loggedIn = false;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get Users

router.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json(err);
  }
});

//by id
router.get('/:id', async (req, res) => {
  try {
    const userById = await User.findByPk(req.params.id);
    res.status(200).json(userById);
  } catch (err) {
    res.status(400).json({ message: "Comment ID not found." });
  }
});

// Login
router.post('/login', (req, res) => {
  console.log(req.body)
  try {
    const dbUserData = User.findOne({
      where: {
        email: req.body.email,
      },
    }).then(dbUserData => {


      console.log("user data: ", dbUserData)
      if (!dbUserData) {
        console.log("No user found")
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }

      const validPassword = dbUserData.checkPassword(req.body.password);
      console.log("valid pass: " + validPassword)

      // if (!validPassword) {
      //   console.log("wrong password")
      //   res
      //     .status(400)
      //     .json({ message: 'Incorrect email or password. Please try again!' });
      //   return;
      // }

      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.Id

        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;


