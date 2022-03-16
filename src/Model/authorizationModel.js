const mysql = require('mysql2/promise');
const dbConfig = require('../../configuration/dbConfig');

const table = 'users';

async function registrationRequestDB(validValues) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO ${table} (full_name, email, password) VALUES (?, ?, ?)`;
    const [fields] = await conn.execute(sql, Object.values(validValues));
    await conn.close();
    return fields;
  } catch (error) {
    return {
      success: false,
      message: 'database catched error',
      sqlState: error.sqlState,
      sqlMessage: error.sqlMessage,
      enteredValues: validValues,
    };
  }
}

module.exports = {
  registrationRequestDB,
};
