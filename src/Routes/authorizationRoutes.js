const express = require('express');
const {
  registrationRequest,
  loginRequest,
} = require('../Controller/authorizationController');
const {
  validateRegistrationForm,
  validateLoginForm,
} = require('../utils/middleware');

const router = express.Router();

router.post('/register', validateRegistrationForm, registrationRequest);
router.post('/login', validateLoginForm, loginRequest);

module.exports = router;
