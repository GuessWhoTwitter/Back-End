const axios = require('axios');

const twitterRouter = require('express').Router();
const restricted = require('../auth/restricted-middleware');

const photoArray = [
  "https://random.dog/8f969962-5ca9-418c-95e0-7b37817294b1.jpg",
  "https://random.dog/b85abb5b-5b9e-47d2-9938-71129cdfdb50.jpg",
  "https://random.dog/554ebddb-ca7b-4e45-954f-0b7e1f509538.jpg",
  "https://random.dog/9606265b-59eb-422f-b840-5b23ad8272bc.jpg",
  "https://random.dog/2ee86ac3-9bc3-49bb-998d-1bb7a1a913e9.jpg",
  "https://random.dog/f5e0bd76-1103-4c71-bc86-7cd576587042.jpg",
  "https://random.dog/29152151-f563-45c6-984a-e0fdba531729.jpg",
  "https://random.dog/f886b15c-69d6-4840-bfe9-fd8442dcb516.jpg"
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