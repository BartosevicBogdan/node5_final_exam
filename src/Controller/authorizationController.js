const { registrationRequestDB } = require('../Model/authorizationModel');
const { successResponce, failResponce } = require('../utils/controllerHelper');

async function registrationRequest(req, res) {
  const { full_name, email, password } = req.body;

  const serverResponseJS = await registrationRequestDB(req.body);

  if (serverResponseJS.affectedRows === 1)
    return successResponce(res, 'user created');

  if (
    serverResponseJS.success === false &&
    serverResponseJS.sqlMessage.includes('Duplicate')
  )
    return failResponce(res, 'User already exist');

  if (
    serverResponseJS.success === false &&
    serverResponseJS.sqlMessage.includes('Incorrect arguments')
  )
    return failResponce(res, 'Incorrect arguments');
}

module.exports = {
  registrationRequest,
};
