const { createBillRecordDB, billsTableDB } = require('../Model/billsModel');
const { successResponce, failResponce } = require('../utils/controllerHelper');

async function createBillRecord(req, res) {
  const { group_id, amount, description } = req.body;
  const newRecordData = {
    group_id,
    amount,
    description,
  };
  const serverResponseJS = await createBillRecordDB(newRecordData);
  return serverResponseJS === false
    ? failResponce(res)
    : successResponce(res, serverResponseJS);
}

async function getGroupRecords(req, res) {
  const group_id = req.params.id;
  const serverResponseJS = await billsTableDB(group_id);
  return serverResponseJS === false
    ? failResponce(res)
    : successResponce(res, serverResponseJS);
}

module.exports = {
  createBillRecord,
  getGroupRecords,
};
