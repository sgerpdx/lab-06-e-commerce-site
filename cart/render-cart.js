import { calcItemTotal } from '../utils.js';

export function renderCart(inventory, merch) {

    const tr = document.createElement('tr');
    tr.classList.add('merch-item');

    const tdName = document.createElement('td');
    tdName.classList.add('inventory-name');
    tdName.textContent = inventory.name;
    tr.append(tdName);

    const tdQuantity = document.createElement('td');
    tdQuantity.classList.add('merch-quantity');
    tdQuantity.textContent = merch.quantity;
    tr.append(tdQuantity);

    const tdPrice = document.createElement('td');
    tdPrice.classList.add('merch-total-price');
    tdPrice.textContent = calcItemTotal(inventory.price, merch.quantity);
    tr.append(tdPrice);

    return tr;

}

