const Joi = require('joi');
const { failResponce } = require('./controllerHelper');

const registration_validationSchema = Joi.object({
  full_name: Joi.string().min(5).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(50).required(),
});

const login_validationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(50).required(),
});

async function validateHandler(schema, dataToValidate, next, res) {
  try {
    await schema.validateAsync(dataToValidate, { abortEarly: false });
    next();
  } catch (error) {
    console.log('validateUser error ===', error);
    const formatedError = error.details.map((detail) => ({
      message: detail.message,
      field: detail.context.key,
    }));
    failResponce(res, formatedError);
  }
}

module.exports = {
  registration_validationSchema,
  login_validationSchema,
  validateHandler,
};
