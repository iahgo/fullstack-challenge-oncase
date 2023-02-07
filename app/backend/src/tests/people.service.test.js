const { peopleModel } = require('../models/index');
const {
  findAll,
  findById,
  insertPerson,
  deletePerson,
  updatePerson,
} = require('../services/people.service');
import {jest} from '@jest/globals'


describe('People Service', () => {
  beforeEach(() => {
    peopleModel.findAll = jest.fn().mockResolvedValue([
      { id: 1, firstName: 'Iahgo', lastName: 'Barros', participation: 80 },
      { id: 2, firstName: 'Raniel', lastName: 'Silva', participation: 70 },
    ]);
    peopleModel.findById = jest.fn().mockResolvedValue({
      id: 1, firstName: 'Iahgo', lastName: 'Barros', participation: 80,
    });
    peopleModel.insertPerson = jest.fn().mockResolvedValue({
      id: 3, firstName: 'Iandé', lastName: 'Bailey', participation: 60,
    });
    peopleModel.deletePerson = jest.fn().mockResolvedValue(1);
    peopleModel.updatePerson = jest.fn().mockResolvedValue({
      id: 1, firstName: 'Iahgo', lastName: 'Barros', participation: 90,
    });
  });

  describe('findAll', () => {
    it('should return a list of people', async () => {
      const result = await findAll();
      expect(result).toEqual({
        type: null,
        message: [
          { id: 1, firstName: 'Iahgo', lastName: 'Barros', participation: 80 },
          { id: 2, firstName: 'Raniel', lastName: 'Silva', participation: 70 },
        ],
      });
    });
  });

  describe('findById', () => {
    it('should return a person by id', async () => {
      const result = await findById(1);
      expect(result).toEqual({
        type: null,
        message: { id: 1, firstName: 'Iahgo', lastName: 'Barros', participation: 80 },
      });
    });

    it('should return an error message if the person is not found', async () => {
      peopleModel.findById = jest.fn().mockResolvedValue(null);
      const result = await findById(3);
      expect(result).toEqual({
        type: 'PERSON',
        message: 'person not found',
      });
    });
  });

  describe('insertPerson', () => {
    it('should insert a new person', async () => {
      const result = await insertPerson({
        firstName: 'Jim',
        lastName: 'Smith',
        participation: 60,
      });
      expect(result).toEqual({
        id: 3,
        firstName: 'Jim',
        lastName: 'Smith',
        participation: 60,
      });
    });
  });
  describe('deletePerson', () => {
    it('should delete a person', async () => {
      const result = await deletePerson({
        firstName: 'Jim',
        lastName: 'Smith',
        participation: 60,
      });
      expect(result).toEqual({
        id: 3,
        firstName: 'Jim',
        lastName: 'Smith',
        participation: 60,
      });
    });
  });
});