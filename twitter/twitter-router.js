const axios = require('axios');

const twitterRouter = require('express').Router();
const restricted = require('../auth/restricted-middleware');

const photoArray = [
  "https://random.dog/ef14cef7-5568-4e10-b477-1e16a73f8692.mp4",
  "https://random.dog/8f969962-5ca9-418c-95e0-7b37817294b1.jpg",
  "https://random.dog/b85abb5b-5b9e-47d2-9938-71129cdfdb50.jpg",
  "https://random.dog/554ebddb-ca7b-4e45-954f-0b7e1f509538.jpg",
  "https://random.dog/9606265b-59eb-422f-b840-5b23ad8272bc.jpg"
];



twitterRouter.get('/', restricted, (req, res) => {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

 
  axios.all([
    axios.get('https://random.dog/woof.json', requestOptions),
    axios.get('https://random.dog/woof.json', requestOptions),
    axios.get('https://random.dog/woof.json', requestOptions),
    axios.get('https://random.dog/woof.json', requestOptions),
    axios.get('https://random.dog/woof.json', requestOptions)
  ])
    .then(axios.spread((one,two,three,four,five) => {
      photoArray.push(one.data.url)
      photoArray.push(two.data.url)
      photoArray.push(three.data.url)
      photoArray.push(four.data.url)
      photoArray.push(five.data.url)
      res.status(200).json(photoArray);
    }))
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Tweets', error: err });
    });
});

module.exports = {twitterRouter, photoArray};