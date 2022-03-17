import { registrationRequest } from './modules/fetch.js';

const regForm = document.querySelector('#regForm');
const errorContainer = document.querySelector('#error-container');
regForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { full_name, email, password, checkPassword } = regForm;

  if (password.value !== checkPassword.value) return;

  const newUserData = {
    full_name: full_name.value,
    email: email.value,
    password: password.value,
  };

  registrationRequest(newUserData, errorContainer);
});
