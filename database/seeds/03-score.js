
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('score').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('score').insert([
        {id: 1, user_id: 1, score: 2},
      ]);
    });
};
