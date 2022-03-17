import { renderAccounts } from './modules/accouts_helper.js';
import { pushAccounts } from './modules/fetch.js';

const groupsContainer = document.querySelector('.groups');
const groupForm = document.querySelector('#groupForm');
renderAccounts(groupsContainer);

groupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { group_name } = groupForm;

  const group = {
    name: group_name.value,
  };

  pushAccounts(group);
});
