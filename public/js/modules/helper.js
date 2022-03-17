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

export { handleErrors };
