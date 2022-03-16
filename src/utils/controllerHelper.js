const bcrypt = require('bcryptjs');

function successResponce(res, data, status = 200) {
  res.status(status).json({
    success: true,
    data,
  });
}
function failResponce(res, err = 'Something went wrong', status = 500) {
  res.status(status).json({
    success: false,
    error: err,
  });
}

function hashPass(plainPassword) {
  return bcrypt.hashSync(plainPassword, 10);
}
module.exports = {
  successResponce,
  failResponce,
  hashPass,
};
