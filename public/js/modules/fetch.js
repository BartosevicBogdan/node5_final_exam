import { baseURL, registerEndpoint } from '../Const.js';
import { handleErrors } from './helper.js';

async function registrationRequest(registrationData, errorsContainerEl) {
  const serverResponseInJS = await request_helper(
    registrationData,
    registerEndpoint,
  );
  if (serverResponseInJS.success === true) {
    alert('logged in');
    window.location.replace(`login.html`);
  } else {
    handleErrors(serverResponseInJS.error, errorsContainerEl);
  }
}
async function request_helper(registrationData, endpoint) {
  const requestServer = await fetch(`${baseURL + endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registrationData),
  });
  const serverResponseInJS = await requestServer.json();
  return serverResponseInJS;
}

export { registrationRequest };
