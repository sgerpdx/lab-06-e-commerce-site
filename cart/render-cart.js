import { medicines } from '../products/products-data.js';
import { cart } from './cart-data.js';
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
    tdPrice.textContent = calcItemTotal(inventory.value, merch.quantity);
    tr.append(tdPrice);

    return tr;

}





// inventory render function from render-products.js for reference:

//export function renderItem(medicine) {

// const li = document.createElement('li');
// li.classList.add('medical-item');

// const pId = document.createElement('p');
// pId.classList.add('medicine-id');
// pId.textContent = medicine.id;
// li.append(pId);

// const h4 = document.createElement('h4');
// h4.classList.add('medicine-name');
// h4.textContent = medicine.name;
// li.append(h4);

// const img = document.createElement('img');
// img.classList.add('medicine-image');
// img.src = `../assets/${medicine.image}`;
// li.append(img);

// const pWeight = document.createElement('p');
// pWeight.classList.add('medicine-weight');
// pWeight.textContent = `${medicine.weight} oz`;
// li.append(pWeight);

// const pSize = document.createElement('p');
// pSize.classList.add('medicine-size');
// pSize.textContent = medicine.size;
// li.append(pSize);

// const pValue = document.createElement('p');
// pValue.classList.add('medicine-value');
// pValue.textContent = `${medicine.value} Borg Bucks`;
// li.append(pValue);

// const button = document.createElement('button');
// button.textContent = 'Add to Cart';
// li.append(button);

// return li;

//}
