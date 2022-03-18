import { renderBills } from './modules/bills_helper.js';
import { pushBills } from './modules/fetch.js';
import { getToken } from './modules/helper.js';

if (!getToken()) window.location.replace(`login.html`);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const bill_Id = urlParams.get('billID');

const table = document.querySelector('table ');
const groupForm = document.querySelector('#groupForm');

renderBills(table, bill_Id);

groupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { amount, description } = groupForm;

  const newBillData = {
    group_id: parseInt(bill_Id),
    amount: parseInt(amount.value),
    description: description.value,
  };
  console.log(newBillData);
  pushBills(newBillData);
});
