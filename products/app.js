// import functions and grab DOM elements

import { renderItem } from './render-products.js';
import { medicalEquipment } from './equipment.js';

// initialize state

const list = document.getElementById('list');

for (let med in medicalEquipment) {

    const inventoryItem = renderItem(med);

    list.prepend(inventoryItem);

}



// set event listeners to update state and DOM

