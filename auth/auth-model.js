const db = require('../database/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByLevel,
};

function find() {
  return db('users').select('id', 'username');
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}

function findByLevel(level) {
    return db('users')
      .select('level', 'username')
      .where({ level })
      .first();
  }
