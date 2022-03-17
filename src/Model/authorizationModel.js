const {
  sqlExecute_ObjectValues,
  sqlExecute_ArrayValues,
} = require('../utils/dbHelper');

const table = 'users';

async function registrationRequestDB(validValues) {
  const sql = `INSERT INTO ${table} (full_name, email, password) VALUES (?, ?, ?)`;
  return sqlExecute_ObjectValues(sql, validValues);
}
async function loginRequestDB(validValues) {
  const sql = ` SELECT * FROM ${table} WHERE email = ? LIMIT 1 `;
  return sqlExecute_ArrayValues(sql, validValues);
}

module.exports = {
  registrationRequestDB,
  loginRequestDB,
};
