const {
  accountTableDB,
  createAccountRecordDB,
} = require('../Model/accountsModel');

const { successResponce, failResponce } = require('../utils/controllerHelper');

async function createAccoutRecord(req, res) {
  const groupInsert = await createGroupDB(req.body.name);
  const { insertId: group_id } = groupInsert;
  const newRecordData = {
    group_id: group_id,
    user_id: req.token.id,
  };
  const serverResponseJS = await createAccountRecordDB(newRecordData);

  return serverResponseJS === false
    ? failResponce(res)
    : successResponce(res, serverResponseJS);
}
async function getAccoutRecords(req, res) {
  const user_id = req.token.id;
  const serverResponseJS = await accountTableDB(user_id);

  return serverResponseJS === false
    ? failResponce(res)
    : successResponce(res, serverResponseJS);
}

module.exports = {
  createAccoutRecord,
  getAccoutRecords,
};
