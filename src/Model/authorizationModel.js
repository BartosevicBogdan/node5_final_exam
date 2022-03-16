const { sqlExecute_ObjectValues } = require('../utils/dbHelper');

const table = 'users';

async function registrationRequestDB(validValues) {
  const sql = `INSERT INTO ${table} (full_name, email, password) VALUES (?, ?, ?)`;
  return sqlExecute_ObjectValues(sql, validValues);
}

module.exports = {
  registrationRequestDB,
};
