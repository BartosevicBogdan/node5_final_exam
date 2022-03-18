const { createBillRecordDB, billsTableDB } = require('../Model/billsModel');
const { successResponce, failResponce } = require('../utils/controllerHelper');

async function createBillRecord(req, res) {
  const { group_id, amount, description } = req.body;
  const newRecordData = {
    group_id: parseInt(group_id),
    amount: parseInt(amount),
    description,
  };
  console.log(newRecordData);
  const serverResponseJS = await createBillRecordDB(newRecordData);
  console.log(serverResponseJS);
  return serverResponseJS.success === false
    ? failResponce(res)
    : successResponce(res, serverResponseJS);
}

async function getGroupRecords(req, res) {
  const group_id = req.params.id;
  // console.log(group_id);
  const serverResponseJS = await billsTableDB(group_id);
  console.log(serverResponseJS);
  return serverResponseJS === false
    ? failResponce(res)
    : successResponce(res, serverResponseJS);
}

module.exports = {
  createBillRecord,
  getGroupRecords,
};
