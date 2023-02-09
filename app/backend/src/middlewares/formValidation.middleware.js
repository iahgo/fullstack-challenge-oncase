const Joi = require('joi');

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  participation: Joi.number().required(),
});
const formValidation = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
} catch (err) { res.status(400).json(err.message); }
};

module.exports = {
  formValidation,
};
