const connection = require('./connection');

const findAll = async () => {
  const [people] = await connection.execute(
    'SELECT * FROM db.people',
  );
  return people;
};

const findById = async (id) => {
  const [person] = await connection.execute(
    'SELECT * FROM db.people WHERE id = ?', [id],
  );
  return person;
};
const insertPerson = async (firstName, lastName, participation) => {
  const insert = await connection.execute(
    'INSERT INTO db.people (firstName, lastName, participation)'
    + 'VALUES (?, ?, ?)', [firstName, lastName, participation],
  );
  return insert;
};

const deletePerson = async (id) => {
  const deleted = await connection.execute(
    'DELETE FROM db.people WHERE id = ?', [id], 
  );
  return deleted;
};

const updatePerson = async (id, firstName, lastName, participation) => {
  const updated = await connection.execute(
    'UPDATE db.people SET firstName = ?, lastName = ?, participation = ? WHERE id = ? ',
    [firstName, lastName, participation, id],
  );
  return updated;
};
module.exports = {
  findAll,
  findById,
  insertPerson,
  deletePerson,
  updatePerson,
};