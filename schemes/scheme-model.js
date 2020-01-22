const db = require('knex')(require('../knexfile').development);

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
}

// helpers

function find() {
  return db('schemes')
    
}

function findById(id) {
  return db('schemes').where({ id: id })
}

function findSteps(id) {
  return db('steps').where({ scheme_id: id }).orderBy('id')
}

function add(scheme) {
  return db('schemes').insert(scheme)
}

function addStep(stepData, id) {
  stepData.scheme_id = id;
  return db('steps').where({ scheme_id: id }).insert(stepData);
}

function update(changes, id) {
  return db('schemes').where({ id: id }).update(changes);
}

function remove(id) {
  return db('schemes').where({ id: id }).del();
}