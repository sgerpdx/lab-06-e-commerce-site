// IMPORT MODULES under test here:

import { renderItem } from '../products/render-products.js';
import { findById } from '../utils.js';
import { calcItemTotal } from '../utils.js';
import { medicines } from '../products/products-data.js';
import { cart } from '../cart/cart-data.js';
import { calcOrderTotal } from '../cart/shopping-cart.js';
import { renderCart } from '../cart/render-cart.js';


const test = QUnit.test;

// Test for renderItem function:

// test('This test should take in a medical item object and retun a list item (<li>)', (assert) => {

//     const scanner = {
//         id: 1010,
//         name: 'Scanner',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Twelfth_Doctor%27s_Sonic_Screwdriver.jpg',
//         weight: 4,
//         size: 'Small',
//         value: 44,
//     };

//     const expected = `<li class="medical-item"><p class="item-id">1010</p><h4 class="item-name">Scanner</h4><img class="item-image" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Twelfth_Doctor%27s_Sonic_Screwdriver.jpg"><p class="item-weight">4 oz</p><p class="item-size">Small</p><p class="item-value">44 Borg Bucks</p><button>Add to Cart</button></li>`;

//     const actual = renderItem(scanner);

//     assert.equal(actual.outerHTML, expected);
// });



// Test for findById function:


test('This test should take in the unique item id 1002 and the array medicines and return the object for Large Hypospray', (assert) => {

    const expected = {
        id: 1002,
        name: 'Large Hypospray',
        image: 'hypospray-large.jpg',
        weight: 6,
        size: 'large',
        value: 15,
    };

    const actual = findById(1002, medicines);

    assert.deepEqual(actual, expected);
});


//border ////////////////////////
//Test for calcItemTotal function:

test('This test should take in a quantity of 8 and a price of 10 and return a total price of 80', (assert) => {

    const expected = 80;

    const actual = calcItemTotal(8, 10);

    assert.deepEqual(actual, expected);
});



// Test for renderCart function:

test('This test should take in a medical item object and retun a list item (<li>)', (assert) => {

    const cartScanner = {
        id: 1010,
        quantity: 4
    };

    const inventoryScanner = {
        id: 1010,
        name: 'Scanner',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Twelfth_Doctor%27s_Sonic_Screwdriver.jpg',
        weight: 4,
        size: 'Small',
        value: 30
    };

    const expected = `<tr><td>Scanner</td><td>4</td><td>120</td></tr>`;

    const actual = renderCart(cartScanner, inventoryScanner);

    assert.equal(actual.outerHTML, expected);
});
