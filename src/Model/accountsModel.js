const {
  sqlExecute_ObjectValues,
  sqlExecute_ArrayValues,
} = require('../utils/dbHelper');

const table = 'accounts';
async function createGroupDB(name) {
  const sql = `
  INSERT INTO groups (id, name) VALUES (NULL, ?) 
  `;
  return sqlExecute_ArrayValues(sql, name);
}
async function accountTableDB(userId) {
  const sql = `
    SELECT accounts.id AS "id", groups.name AS "group", accounts.user_id AS "user_id" 
    FROM ${table}
    INNER JOIN groups ON accounts.group_id = groups.id
    WHERE user_id = ?`;
  return sqlExecute_ArrayValues(sql, userId);
}
async function createAccountRecordDB(validValues) {
  const sql = `
  INSERT INTO accounts (group_id, user_id) VALUES (?, ?)
  `;
  return sqlExecute_ObjectValues(sql, validValues);
}

module.exports = { accountTableDB, createAccountRecordDB, createGroupDB };
