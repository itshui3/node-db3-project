const db = require('knex')(require('../knexfile').development);

module.exports = {
  find,
  findById,

  add,

  update,
  remove
}

// helpers

function find() {
  return db('schemes')

}

function findById(id) {
  return db('schemes').where({ id }).first()
}



function add(scheme) {
  return db('schemes').insert(scheme)
}



function update(changes, id) {
  return db('schemes').where({ id }).update(changes)
}

function remove(id) {
  return db('schemes').where({ id }).del();
}