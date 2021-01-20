// import functions and grab DOM elements

import { renderItem } from './render-products.js';
import { medicines } from './equipment.js';

// initialize state

const list = document.getElementById('list');

for (const med of medicines) {

    const inventoryItem = renderItem(med);
    list.prepend(inventoryItem);

}



// set event listeners to update state and DOM

