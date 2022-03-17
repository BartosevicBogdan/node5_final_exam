const {
  sqlExecute_ObjectValues,
  sqlExecute_ArrayValues,
} = require('../utils/dbHelper');

const table = 'bills';

async function billsTableDB(group_id) {
  const sql = `
    SELECT * 
    FROM ${table}
    WHERE group_id = ?`;
  return sqlExecute_ArrayValues(sql, group_id);
}
async function createBillRecordDB(validValues) {
  const sql = `
  INSERT INTO ${table} (group_id, amount, description) VALUES (?, ?, ?)
  `;
  return sqlExecute_ObjectValues(sql, validValues);
}

module.exports = { billsTableDB, createBillRecordDB };
