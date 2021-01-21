// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { renderItem } from '../products/render-products.js';
import { findById, getItemTotal } from '../cart/utils.js';
import { medicines } from '../products/equipment.js';
import { cart } from '../cart/cart.js';

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








// Test for calcItemTotal function:

test('This test should take in the unique item id 1002 and the arrays cart and medicines and return a total value of ', (assert) => {

    const expected = '80 Borg Bucks';

    const actual = getItemTotal(1003, cart, medicines);

    assert.deepEqual(actual, expected);
});


// export function getItemTotal(id, arrayOne, arrayTwo) {

//     for (let item of arrayOne) {
//         if (arrayOne.id === id) {
//             const itemQuantity = item.quantity;
//         }
//     }

//     for (let med of arrayTwo) {
//         if (arrayTwo.id === id) {
//             const medPrice = med.price;
//         }
//     }

//     return itemQuantity * medPrice;


// }










// Test for renderCart function:



