import { renderItem } from './render-products.js';
import { medicines } from './products-data.js';


const list = document.getElementById('list');

for (const med of medicines) {

    const inventoryItem = renderItem(med);
    list.append(inventoryItem);

}

