


import { renderItem } from './render-products.js';
import { medicines } from './products-data.js';





const list = document.getElementById('list');

for (const med of medicines) {

    const inventoryItem = renderItem(med);
    list.prepend(inventoryItem);

}


// initialize state
// set event listeners to update state and DOM

