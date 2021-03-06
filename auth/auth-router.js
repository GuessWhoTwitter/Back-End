const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //1:  npm i jsonwebtoken

const Users = require("../users/users-model");
const { validateUser } = require("../users/users-helper");

// for endpoints beginning with /api/auth
router.post("/register", (req, res) => {
  let user = req.body;
  // always validate the data before sending it to the db
  const validateResult = validateUser(user);

  if (validateResult.isSuccessful === true) {
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;

    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(400).json({
      message: "Invalid information about the user, see errors for details",
      errors: validateResult.errors
    });
  }
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // 2: produce a token
        const token = getJwtToken(user.username);

        // 3: send the token to the client
        res.status(200).json({
          message: `Welcome ${user.username}! have a token...`,
          token, 
          id:user.id,
          score:user.score
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// 4
function getJwtToken(username) {
  const payload = {
    username,
  };

  const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

  const options = {
    expiresIn: "7d"
  };

  return jwt.sign(payload, secret, options);
}


router.get('/tweets', (req, res) => {
  Users.findTweets()
  .then(tweets => {
      res.status(200).json(tweets);
  })
  .catch(err => res.status(500).json({ error: err }));
})

router.get('/photos', (req, res) => {
  Users.findPhotos()
  .then(photos => {
      res.status(200).json(photos);
  })
  .catch(err => res.status(500).json({ error: err }));
})

router.get('/tweets/:id', (req, res) => {
  const {id} = req.params;
  Users.findTweetsById(id)
  .then(tweet => {
      res.status(200).json(tweet);
  })
  .catch(err => res.status(500).json({ error: err }));
})

router.get('/photos/:id', (req, res) => {
  const id = req.params.id;
  Users.findPhotosById(id)
  .then(photo => {
      res.status(200).json(photo);
  })
  .catch(err => res.status(500).json({ error: err }));
})

router.get('/users', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
})

router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  Users.findById(id)
  .then(user => {
      res.status(200).json(user);
  })
  .catch(err => res.status(500).json({ error: err }));
})

router.delete('/users/:id', (req, res) => {
  Users.remove(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: 'The user has been deleted' });
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error removing the user',
    });
  });
});


router.put('/users/:id', (req, res) => {
  const username = req.body;
  Users.update(req.params.id, username)
  .then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error updating the user',
    });
  });
});


router.put('/users/scores/:id', (req, res) => {
  const score = req.body;
  Users.updateScore(req.params.id, score)
  .then(score => {
    if (score) {
      res.status(200).json(score);
    } else {
      res.status(404).json({ message: 'The user could not be found to update score' });
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error updating the score',
    });
  });
});






module.exports = router;





