import { pullAccounts } from '../modules/fetch.js';

const linkURL = 'bills.html?';

async function renderAccounts(renderContainer) {
  const accounts = await pullAccounts();
  makeCards(accounts.data, renderContainer);
}

function makeCards(dataArray, renderContainer) {
  dataArray.forEach((element) => {
    const { group_name, group_id } = element;
    const link = document.createElement('a');
    link.setAttribute('href', `${linkURL + 'billID=' + group_id}`);
    const elementEl = document.createElement('div');
    elementEl.className = 'group';
    elementEl.setAttribute('id', `group-${group_id}`);
    elementEl.innerHTML = `
                <p>id: ${group_id}</p>
                <h3>${group_name}</h3>
    `;
    link.append(elementEl);
    renderContainer.append(link);
  });
}

export { renderAccounts };
