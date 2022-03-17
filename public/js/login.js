import { loginRequest } from './modules/fetch.js';

const loginForm = document.querySelector('#loginForm');
const errorContainer = document.querySelector('#error-container');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { email, password } = loginForm;

  const userData = {
    email: email.value,
    password: password.value,
  };
  loginRequest(userData, errorContainer);
});
