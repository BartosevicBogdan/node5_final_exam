const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../configuration/jwtConfig');
const {
  registration_validationSchema,
  login_validationSchema,
  validateHandler,
} = require('./middlewareHelper');

async function validateRegistrationForm(req, res, next) {
  validateHandler(registration_validationSchema, req.body, next, res);
}

async function validateLoginForm(req, res, next) {
  validateHandler(login_validationSchema, req.body, next, res);
}

module.exports = { validateRegistrationForm, validateLoginForm };
