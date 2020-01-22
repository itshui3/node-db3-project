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
  return db('steps as st')
    .select('st.id', 'st.step_number', 'sc.scheme_name')
    .join('schemes as sc', 'st.scheme_id', 'sc.id')
    .where({ 'st.scheme_id': id })
    .orderBy('id')
  // this needs to be a join
}

function add(scheme) {
  db('schemes').insert(scheme)
    .then( ids => {
      return findById(ids[0].toString())
    })
    .catch( err => {
      console.log(err);
    })
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