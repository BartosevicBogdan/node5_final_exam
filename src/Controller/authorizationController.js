const {
  registrationRequestDB,
  loginRequestDB,
} = require('../Model/authorizationModel');
const {
  successResponce,
  failResponce,
  hashPass,
  verifyPass,
  createToken,
} = require('../utils/controllerHelper');

async function registrationRequest(req, res) {
  const { full_name, email, password } = req.body;

  const newUserData = {
    full_name,
    email,
    password: hashPass(password),
  };
  const serverResponseJS = await registrationRequestDB(newUserData);

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

  // const { success, sqlMessage } = serverResponseJS;
  // if (success === false) {
  //   sqlMessage.includes('Duplicate') && failResponce(res, 'User already exist');
  //   sqlMessage.includes('Incorrect arguments') &&
  //     failResponce(res, 'Incorrect arguments');
  // }
}
async function loginRequest(req, res) {
  const { email: req_email, password: checkPassword } = req.body;

  const serverResponseJS = await loginRequestDB(req_email);
  const { id, email, password: truePassword } = serverResponseJS[0];

  // const dataToToken = {
  //   id,
  // };

  // if (verifyPass(checkPassword, truePassword)) {
  //   const sendResponse = {
  //     token: createToken(dataToToken, '1d'),
  //   };
  //   successResponce(res, sendResponse);
  // } else {
  //   failResponce(res, 'Credentials not valid');
  // }

  verifyPass(checkPassword, truePassword)
    ? successResponce(res, { token: createToken({ id }, '1d') })
    : failResponce(res, 'Credentials not valid');
}

module.exports = {
  registrationRequest,
  loginRequest,
};
