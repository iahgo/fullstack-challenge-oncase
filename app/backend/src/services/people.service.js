const { peopleModel } = require('../models/index');

const findAll = async () => {
  const people = await peopleModel.findAll();
  return { type: null, message: people };
};

const findById = async (id) => {
  const person = await peopleModel.findById(id);
  if (person.length === 0) return { type: 'PERSON_NOT_FOUND', message: 'person not found' };
  return { type: null, message: person };
};

const insertPerson = async (body) => {
  const { firstName, lastName, participation } = body;
  const insert = await peopleModel.insertPerson(firstName, lastName, participation);
  return insert;
}

const deletePerson = async (id) => {
  const person = await peopleModel.findById(id);
  if (person.length === 0) return { type: 'PERSON_NOT_FOUND', message: 'person not found' };
  const deleted = await peopleModel.deletePerson(id);
  return { type: null, message: person };
};

const updatePerson = async (id, {firstName, lastName, participation}) => {
  const person = await peopleModel.findById(id);
  if (person.length === 0) return { type: 'PERSON_NOT_FOUND', message: 'person not found' };
  const updated = await peopleModel.updatePerson(id, firstName, lastName, participation);
  return { type: null, message: updated };
};

module.exports = {
  findAll,
  findById,
  insertPerson,
  deletePerson,
  updatePerson,
};