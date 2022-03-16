const mysql = require('mysql2/promise');
const dbConfig = require('../../configuration/dbConfig');

const table = 'users';

function catchErrorObject(catchError, sqlRequestArguments) {
  const obj = {
    success: false,
    message: 'database catched error',
    sqlState: catchError.sqlState,
    sqlMessage: catchError.sqlMessage,
    enteredValues: sqlRequestArguments,
  };
  return obj;
}

async function registrationRequestDB(validValues) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO ${table} (full_name, email, password) VALUES (?, ?, ?)`;
    const [fields] = await conn.execute(sql, Object.values(validValues));
    await conn.close();
    return fields;
  } catch (error) {
    return catchErrorObject(error, validValues);
  }
}

module.exports = {
  registrationRequestDB,
};
