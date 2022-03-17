const express = require('express');
const {
  createBillRecord,
  getGroupRecords,
} = require('../Controller/billsController ');
const { isLoggedIn } = require('../utils/middleware');

const router = express.Router();

router.post('/bills', isLoggedIn, createBillRecord);
router.get('/bills/:id', isLoggedIn, getGroupRecords);

module.exports = router;
