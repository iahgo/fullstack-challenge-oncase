const { peopleService } = require('../services');

const errorMap = require('../utils/errorMap');

const findAll = async (_req, res) => {
  const allPeople = await peopleService.findAll();
  return res.status(200).json(allPeople.message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await peopleService.findById(id);
  if (type) return res.status(errorMap(type)).json(message);
  return res.status(200).json(message);
};

const insertPerson = async (req, res) => {
  const newPerson = await peopleService.insertPerson(req.body);
  res.status(201).json(newPerson);
};

const deletePerson = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await peopleService.deletePerson(id);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(200).json(message);
};

const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await peopleService.updatePerson(id, req.body);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(200).json(message);
};
module.exports = {
  findAll,
  findById,
  insertPerson,
  deletePerson,
  updatePerson,
};