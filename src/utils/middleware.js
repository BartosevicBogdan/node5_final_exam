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

async function isLoggedIn(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    req.token = jwt.verify(token, jwtSecret);
    next();
  } catch (error) {
    res.status(401).send({ error: 'invalid token' });
  }
}

module.exports = { validateRegistrationForm, validateLoginForm, isLoggedIn };
