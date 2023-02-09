/* eslint-disable sonarjs/prefer-object-literal */
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(sinonChai);

const peopleService = require('../services/people.service');
const peopleController = require('../controllers/people.controller');

const mock = require('./mocks/people.mock');

const PERSON_NOT_FOUND = 'person not found';

describe('Testa o Controller', function () {
  afterEach(sinon.restore);

  describe('Testa o FindAll', function () {
    it('retorna todas as pessoas', async function () {
      const req = {};
      const res = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(mock.people);
      sinon.stub(peopleService, 'findAll').resolves({ type: null, message: mock.people });

      const result = await peopleController.findAll(req, res);
      expect(result).to.be.equal(mock.people);
      expect(res.status).to.be.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mock.people);
    });
  });

  describe('Testa o findById', function () {
    it('retorna apenas uma pessoa com id correto', async function () {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(mock.people[0]);
      sinon.stub(peopleService, 'findById').resolves({ type: null, message: mock.people[0] });

      const result = await peopleController.findById(req, res);
      expect(result).to.be.equal(mock.people[0]);
      expect(res.status).to.have.been.calledWith(200);
    });
    it('retorna erro se uma pessoa com id incorreto', async function () {
      const req = {
        params: {
          id: 10,
        },
      };
      const res = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({ message: PERSON_NOT_FOUND });
      sinon.stub(peopleService, 'findById')
      .resolves({ type: 'PERSON_NOT_FOUND', message: PERSON_NOT_FOUND });

      const result = await peopleController.findById(req, res);
      expect(result.message).to.be.equal(PERSON_NOT_FOUND);
      expect(res.status).to.have.been.calledWith(404);
    });
  });

  describe('Testa o insertPerson', function () {
    it('Inserindo novo produto', async function () {
      const res = {};
      const req = {
        body: {
          firstName: 'oncase',
          lastName: 'company',
          participation: 10,
        },
      };
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(peopleService, 'insertPerson').resolves({
        firstName: 'oncase',
        lastName: 'company',
        participation: 10,
      });
  
      await peopleController.insertPerson(req, res);  
      expect(res.status).to.have.been.calledWith(201);
    });
  });

  describe('Testa o updatePerson', function () {
    it('Atualiza uma pessoa corretamente', async function () {
      const res = {};
      const req = {
        params: {
          id: 1,
        }, 
        body: {
          firstName: 'oncase',
          lastName: 'company',
          participation: 10,
        },
      };
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(mock.returnUpdate);
      sinon.stub(peopleService, 'updatePerson').resolves({
        firstName: 'oncase',
        lastName: 'company',
        participation: 10,
      });
  
      const result = await peopleController.updatePerson(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(result).to.be.equal(mock.returnUpdate);
    });

    it('retorna erro se uma pessoa com id incorreto', async function () {
      const req = {
        params: {
          id: 10,
        }, 
        body: {
          firstName: 'oncase',
          lastName: 'company',
          participation: 10,
        },
      };
      const res = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({ message: PERSON_NOT_FOUND });
      sinon.stub(peopleService, 'updatePerson')
      .resolves({ type: 'PERSON_NOT_FOUND', message: PERSON_NOT_FOUND });

      const result = await peopleController.updatePerson(req, res);
      expect(result.message).to.be.equal(PERSON_NOT_FOUND);
      expect(res.status).to.have.been.calledWith(404);
    });
  });

  describe('Testa o deletePerson', function () {
    it('deleta apenas uma pessoa com id correto', async function () {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(mock.people[0]);
      sinon.stub(peopleService, 'deletePerson').resolves({ type: null, message: mock.people[0] });

      const result = await peopleController.deletePerson(req, res);
      expect(result).to.be.equal(mock.people[0]);
      expect(res.status).to.have.been.calledWith(200);
    });

    it('retorna erro se uma pessoa com id incorreto', async function () {
      const req = {
        params: {
          id: 10,
        }, 
        body: {
          firstName: 'oncase',
          lastName: 'company',
          participation: 10,
        },
      };
      const res = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({ message: PERSON_NOT_FOUND });
      sinon.stub(peopleService, 'deletePerson')
      .resolves({ type: 'PERSON_NOT_FOUND', message: PERSON_NOT_FOUND });

      const result = await peopleController.deletePerson(req, res);
      expect(result.message).to.be.equal(PERSON_NOT_FOUND);
      expect(res.status).to.have.been.calledWith(404);
    });

    it('retorna erro 500', async function () {
      const req = {
        params: {
          id: 10,
        }, 
        body: {
          firstName: 'oncase',
          lastName: 'company',
          participation: 10,
        },
      };
      const res = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({ message: PERSON_NOT_FOUND });
      sinon.stub(peopleService, 'deletePerson')
      .resolves({ type: 'qualquer-erro', message: PERSON_NOT_FOUND });

      await peopleController.deletePerson(req, res);
      expect(res.status).to.have.been.calledWith(500);
    });
  });
  });
