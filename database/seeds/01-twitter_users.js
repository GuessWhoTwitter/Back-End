// const photo = require('photoArray');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('twitter_users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('twitter_users').insert([
        {id: 1, tweet: 'I hid a bone in the backyard!'},
        {id: 2, tweet: 'I pooped on the rug.'},
        {id: 3, tweet: 'I like to human food.'},
        {id: 4, tweet: 'I hate the dog park.'},
        {id: 5, tweet: 'I love belly rubs.'},
        {id: 6, tweet: 'I dream of doggy treats!'},
        {id: 7, tweet: 'Barking is my hobby!'},
        {id: 8, tweet: 'I protect, I eat!!'},

      ]);
    });
};
