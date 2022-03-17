import { pullBillsByGroupId } from './fetch.js';

async function renderBills(renderContainer, bill_Id) {
  const bills = await pullBillsByGroupId(bill_Id);
  makeTablRows(bills.data, renderContainer);
}

function makeTablRows(dataArray, renderContainer) {
  dataArray.forEach((element) => {
    const { id, amount, description } = element;
    const trElement = document.createElement('tr');
    trElement.innerHTML = `
        <td>${id}</td>
        <td>${amount}</td>
        <td>${description}</td>
    `;
    renderContainer.append(trElement);
  });
}

export { renderBills };
