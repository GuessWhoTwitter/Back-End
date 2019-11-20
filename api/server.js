const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const { twitterRouter, photoArray } = require('../twitter/twitter-router');
console.log(photoArray);

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/twitter', twitterRouter);

server.get('/', (req, res) => {
  res.send("I am Working");
});

module.exports = server;




