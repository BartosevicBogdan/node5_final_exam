const { registrationRequestDB } = require('../Model/authorizationModel');

async function registrationRequest(req, res) {
  const { full_name, email, password } = req.body;
  console.log(req.body);

  const serverResponseJS = await registrationRequestDB(req.body);
  console.log(serverResponseJS);
  if (
    serverResponseJS.success === false &&
    serverResponseJS.sqlMessage.includes('Duplicate')
  ) {
    res.send('<h1>user already exist</h1>');
    return;
  }
  if (
    serverResponseJS.success === false &&
    serverResponseJS.sqlMessage.includes('Incorrect arguments')
  ) {
    res.send('<h1>Incorrect arguments</h1>');
    return;
  }
  if (serverResponseJS.affectedRows === 1) {
    res.send('<h1>route works</h1>');
    return;
  }
}

module.exports = {
  registrationRequest,
};
