const express = require('express');
const {
  createAccoutRecord,
  getAccoutRecords,
} = require('../Controller/accountsController');
const { isLoggedIn } = require('../utils/middleware');

const router = express.Router();

router.post('/accounts', isLoggedIn, createAccoutRecord);
router.get('/accounts', isLoggedIn, getAccoutRecords);

module.exports = router;
