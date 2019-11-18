const axios = require('axios');

const router = require('express').Router();
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Tweets', error: err });
    });
});

module.exports = router;