import { renderAccounts } from './modules/accouts_helper.js';
import { pushAccounts } from './modules/fetch.js';
import { getToken } from './modules/helper.js';

if (!getToken()) window.location.replace(`login.html`);

const groupsContainer = document.querySelector('.groups');
const groupForm = document.querySelector('#groupForm');
renderAccounts(groupsContainer);

groupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { group_name } = groupForm;

  if (!group_name.value) return;

  const group = {
    name: group_name.value,
  };

  pushAccounts(group);
});
