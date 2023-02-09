const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');

chai.use(chaiHttp);
chai.use(sinonChai);

const connection = require('../models/connection');
const peopleModel = require('../models/people.model');

const mock = require('./mocks/people.mock');

describe('Testes de unidade do Model ', function () {
  afterEach(sinon.restore);
// mockar a consulta no BD 
  it('Recuperando a lista de pessoas', async function () {
    sinon.stub(connection, 'execute').resolves([mock.people]);
    const result = await peopleModel.findAll();
    expect(result).to.be.deep.equal(mock.people);
  });

  it('Recuperando uma pessoa a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([mock.people[0]]);
    const result = await peopleModel.findById(1);
    expect(result).to.be.deep.equal(mock.people[0]);
  });
  
  it('Adicionando nova pessoa', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const [result] = await peopleModel.insertPerson({ 
          firstName: 'oncase',
          lastName: 'company',
          participation: 10 });
    expect(result.affectedRows).to.be.deep.equal(1);
  });

  it('Atualizando uma pessoa a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves(mock.oneAffectedRows);
    const result = await peopleModel.updatePerson(1, { 
          firstName: 'oncase',
          lastName: 'company',
          participation: 10 });
    // expect(result).to.be.deep.equal(resultUpdateById);
    expect(result.affectedRows).to.be.equal(1);
  });

  it('Deletando uma pessoa a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves(mock.oneAffectedRows);
    const result = await peopleModel.deletePerson(1);
    // expect(result).to.be.deep.equal(resultUpdateById);
    expect(result.affectedRows).to.be.equal(1);
  });
});
