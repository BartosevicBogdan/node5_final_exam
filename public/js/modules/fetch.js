import { baseURL, registerEndpoint } from '../Const.js';
import { handleErrors } from './helper.js';

async function registrationRequest(registrationData, errorsContainerEl) {
  const serverResponseInJS = await registrationRequest_helper(registrationData);
  if (serverResponseInJS.success === true) {
    alert('logged in');
    window.location.replace(`login.html`);
  } else {
    handleErrors(serverResponseInJS.error, errorsContainerEl);
  }
}
async function registrationRequest_helper(registrationData) {
  const requestServer = await fetch(`${baseURL + registerEndpoint}`, {
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
