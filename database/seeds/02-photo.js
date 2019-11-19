// const {photoArray} = require('../../twitter/twitter-router');
// console.log(photoArray);

exports.seed = function(knex) {
  
  // Deletes ALL existing entries
  return knex('photo').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('photo').insert([
        {id: 1, twitter_user_id: 1, pic: "https://random.dog/b85abb5b-5b9e-47d2-9938-71129cdfdb50.jpg"},
        {id: 2, twitter_user_id: 2, pic: "https://random.dog/8f969962-5ca9-418c-95e0-7b37817294b1.jpg"},
        {id: 3, twitter_user_id: 3, pic: "https://random.dog/554ebddb-ca7b-4e45-954f-0b7e1f509538.jpg"},
        {id: 4, twitter_user_id: 4, pic: "https://random.dog/9606265b-59eb-422f-b840-5b23ad8272bc.jpg"},
      ]);
    });
}
