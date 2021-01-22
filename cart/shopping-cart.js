import { findById } from '../utils.js';
import { medicines } from '../products/products-data.js';
import { cart } from './cart-data.js';
import { renderCart } from './render-cart.js';

// const list = document.getElementById('list');

// for (const med of medicines) {

//     const inventoryItem = renderItem(med);
//     list.prepend(inventoryItem);

// }


const tbody = document.getElementById('table-body');

for (let item of cart) {

    const lineItem = item;
    //this is pulling relevent meds (inventory) based on matches to cart ids
    const med = findById(lineItem.id, medicines);

    const tableRow = renderCart(med, lineItem);
    console.log(tableRow);
    tbody.append(tableRow);

}

