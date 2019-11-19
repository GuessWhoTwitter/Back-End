// const photo = require('photoArray');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('twitter_users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('twitter_users').insert([
        {id: 1, tweet: 'Test Tweet'},
        {id: 2, tweet: 'Hello Twitter'},
        {id: 3, tweet: 'Guess Who Twitter?'},
        {id: 4, tweet: 'Hi from Node!'},

      ]);
    });
};
