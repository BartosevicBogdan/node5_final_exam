import {
  baseURL,
  registerEndpoint,
  loginEndpoint,
  accountsEndpoint,
  billsEndpoint,
} from '../Const.js';
import { getToken, handleErrors, setToken } from './helper.js';

async function pushBills(billData) {
  const serverResponseInJS = await request_helper(billData, billsEndpoint);
  console.log(serverResponseInJS);
  if (serverResponseInJS.success === true) {
    alert('Bill created');
    location.reload();
  }
}
async function pullBillsByGroupId(id) {
  const serverResponseInJS = await pullRequest_helper(`${billsEndpoint + id}`);
  console.log(serverResponseInJS);
  return serverResponseInJS;
}
async function pullAccounts() {
  const serverResponseInJS = await pullRequest_helper(accountsEndpoint);
  console.log(serverResponseInJS);
  return serverResponseInJS;
}
async function pushAccounts(requestData) {
  const serverResponseInJS = await request_helper(
    requestData,
    accountsEndpoint,
  );

  if (serverResponseInJS.success === true) {
    alert('Group created');
    location.reload();
  }
}
async function loginRequest(loginData, errorsContainerEl) {
  const serverResponseInJS = await request_helper(loginData, loginEndpoint);
  if (serverResponseInJS.success === true) {
    alert('Logged in');
    setToken(serverResponseInJS);
    window.location.replace(`index.html`);
  } else {
    handleErrors(serverResponseInJS.error, errorsContainerEl);
  }
}
async function registrationRequest(registrationData, errorsContainerEl) {
  const serverResponseInJS = await request_helper(
    registrationData,
    registerEndpoint,
  );
  if (serverResponseInJS.success === true) {
    alert('User created');
    window.location.replace(`login.html`);
  } else {
    handleErrors(serverResponseInJS.error, errorsContainerEl);
  }
}
async function request_helper(requestData, endpoint) {
  const requestServer = await fetch(
    `${baseURL + endpoint}`,
    postHtmlRequest(requestData),
  );
  const serverResponseInJS = await requestServer.json();
  return serverResponseInJS;
}
async function pullRequest_helper(endpoint) {
  const requestServer = await fetch(`${baseURL + endpoint}`, getHtmlRequest());
  const serverResponseInJS = await requestServer.json();
  return serverResponseInJS;
}

function postHtmlRequest(dataToSend) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(dataToSend),
  };
}
function getHtmlRequest() {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  };
}

export {
  registrationRequest,
  loginRequest,
  pullAccounts,
  pushAccounts,
  pullBillsByGroupId,
  pushBills,
};
