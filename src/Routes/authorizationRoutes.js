const express = require('express');
const {
  registrationRequest,
} = require('../Controller/authorizationController');

const router = express.Router();

router.post('/register', registrationRequest);

module.exports = router;
