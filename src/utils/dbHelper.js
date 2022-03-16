const mysql = require('mysql2/promise');
const dbConfig = require('../../configuration/dbConfig');

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

async function sqlExecute_ObjectValues(sql, validValues) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [fields] = await conn.execute(sql, Object.values(validValues));
    await conn.close();
    return fields;
  } catch (error) {
    return catchErrorObject(error, validValues);
  }
}

module.exports = {
  sqlExecute_ObjectValues,
};
