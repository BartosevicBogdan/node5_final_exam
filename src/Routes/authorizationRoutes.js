const express = require('express');
const {
  registrationRequest,
  loginRequest,
} = require('../Controller/authorizationController');

const router = express.Router();

router.post('/register', registrationRequest);
router.post('/login', loginRequest);

module.exports = router;
