const db = require('knex')(require('../knexfile').development);

module.exports = {
  find,
  findById,
  findSteps,
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

function findSteps(id) {
  return db('steps as st')
    .select('st.id as StepID', 'sc.scheme_name', 'st.step_number', 'st.instructions')
    .join('schemes as sc', 'st.scheme_id', 'sc.id')
    .where({ scheme_id: id })
    .orderBy('st.id', 'asc')
}

function add(scheme) {
  return db('schemes').insert(scheme)
}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes)
}

function remove(id) {
  return db('schemes')
    .where({ id })
    .del();
  // Why is this good?
}