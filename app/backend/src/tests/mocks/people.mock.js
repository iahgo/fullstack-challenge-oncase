const people = [
  {
    id: 1,
    firstName: 'Iahgo',
    lastName: 'Barros',
    participation: 10,
  },
  {
    id: 2,
    firstName: 'Raniel',
    lastName: 'Silva',
    participation: 30,
  },
  {
    id: 3,
    firstName: 'Iandé',
    lastName: 'Bailey',
    participation: 60,
  },
];

const returnInsert = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  },
  null,
];

const returnUpdate = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 0  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
  },
  null,
];

const peopleReturn = [
  {
    id: 6,
    firstName: 'oncase',
    lastName: 'company',
    participation: 10,
  },
];

const personDeleted = [
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const oneAffectedRows = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: 'Rows matched: 1  Changed: 1  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 1,
};

module.exports = {
  people,
  returnInsert,
  peopleReturn,
  returnUpdate,
  personDeleted,
  oneAffectedRows,
};