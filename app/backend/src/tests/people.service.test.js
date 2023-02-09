const { expect } = require('chai');
const sinon = require('sinon');
const peopleService = require('../services/people.service');
const peopleModel = require('../models/people.model');

const mocks = require('./mocks/people.mock');

describe('Testa o Service', function () {
  afterEach(sinon.restore);

  describe('Testa o findAll', function () {
    it('Retorna todas as pessoas', async function () {
      sinon.stub(peopleModel, 'findAll').resolves(mocks.people);
      const result = await peopleService.findAll();
      expect(result.message).to.deep.equal(mocks.people);
    });
  });

  describe('Testa o findById', function () {
    it('Retorna uma pessoa', async function () {
      sinon.stub(peopleModel, 'findById').resolves(mocks.people[1]);
      const result = await peopleService.findById(1);
      expect(result.message).to.deep.equal(mocks.people[1]);
    });
    it('Ao digitar id errado apresenta erro', async function () {
      sinon.stub(peopleModel, 'findById').resolves([]);
      const result = await peopleService.findById(9);
      expect(result.message).to.deep.equal('person not found');
    });
  });

  describe('Testa o insertPerson', function () {
    it('Insere uma pessoa', async function () {
      sinon.stub(peopleModel, 'insertPerson').resolves(mocks.returnPeople);
      const result = await peopleService.insertPerson({
        firstName: 'oncase',
        lastName: 'challenge',
        participation: 10,
      });
      expect(result).to.deep.equal(mocks.returnPeople);
    });
  });

  describe('Testa o deletePerson', function () {
    it('Deleta uma pessoa', async function () {
      sinon.stub(peopleModel, 'findById').resolves(mocks.people[1]);
      sinon.stub(peopleModel, 'deletePerson').resolves(mocks.people[1]);
      const result = await peopleService.deletePerson(1);
  
      expect(result.message).to.deep.equal(mocks.people[1]);
    });
    it('Ao digitar id errado apresenta erro', async function () {
      sinon.stub(peopleModel, 'findById').resolves([]);
      const result = await peopleService.deletePerson(9);
      expect(result.message).to.deep.equal('person not found');
    });
  });

  describe('Testa o updatePerson', function () {
    it('Atualiza uma pessoa', async function () {
      sinon.stub(peopleModel, 'findById').resolves(mocks.people[1]);
      sinon.stub(peopleModel, 'updatePerson').resolves({
        firstName: 'oncase',
        lastName: 'challenge',
        participation: 10,
      });
      const result = await peopleService.updatePerson(1, {
        firstName: 'oncase',
        lastName: 'challenge',
        participation: 10,
      });
      expect(result.message).to.deep.equal({
        firstName: 'oncase',
        lastName: 'challenge',
        participation: 10,
      });
    });
    it('Ao digitar id errado apresenta erro', async function () {
      sinon.stub(peopleModel, 'findById').resolves([]);
      const result = await peopleService.updatePerson(9, {
        firstName: 'oncase',
        lastName: 'challenge',
        participation: 10,
      });
      expect(result.message).to.deep.equal('person not found');
    });
  });
});
