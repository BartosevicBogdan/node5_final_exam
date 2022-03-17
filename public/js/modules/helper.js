function handleErrors(erorrArray, errorsContainerEl) {
  errorsContainerEl.innerHTML = '';

  if (typeof erorrArray === 'string') {
    errorsContainerEl.innerHTML += `<p>${erorrArray}</p>`;
  } else {
    erorrArray.forEach((err) => {
      errorsContainerEl.innerHTML += `<p>${err.message}</p>`;
    });
  }
}

function setToken(serverResponse) {
  localStorage.setItem('login_token', serverResponse.data.token);
}
function getToken() {
  return localStorage.getItem('login_token');
}
export { handleErrors, setToken, getToken };
