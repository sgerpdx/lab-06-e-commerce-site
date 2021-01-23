import { renderItem } from '../products/render-products.js';
import { findById } from '../utils.js';
import { calcItemTotal, calcOrderTotal } from '../utils.js';
import { medicines } from '../products/products-data.js';
import { renderCart } from '../cart/render-cart.js';


const test = QUnit.test;

// Test for renderItem function:

test('This test should take in a medical item object and retun a list item (<li>)', (assert) => {

    const scanner = {
        id: 1010,
        name: 'Scanner',
        image: 'alchemy-logo.png',
        weight: 4,
        size: 'Small',
        price: 44,
        currency: 'locutus-coin-40.png'
    };

    const expected = `<li class="medical-item"><p class="medicine-id">1010</p><h4 class="medicine-name">Scanner</h4><img class="medicine-image" src="../assets/alchemy-logo.png"><p class="medicine-weight">4 oz</p><p class="medicine-size">Small</p><p class="medicine-value">44 Locutii</p><img class="currency-image" src="../assets/locutus-coin-40.png"><button>Add to Cart</button></li>`;

    const actual = renderItem(scanner);

    assert.equal(actual.outerHTML, expected);
});


// Test for findById function:

test('This test should take in the unique item id 1002 and the array medicines and return the object for Large Hypospray', (assert) => {

    const expected = {
        id: 1002,
        name: 'Large Hypospray',
        image: 'hypospray-large.jpg',
        weight: 6,
        size: 'large',
        price: 15,
        currency: 'locutus-coin-40.png'
    };

    const actual = findById(1002, medicines);

    assert.deepEqual(actual, expected);
});


//Test for calcItemTotal function:

test('This test should take in a quantity of 8 and a price of 10 and return a total price of 80', (assert) => {

    const expected = 80;

    const actual = calcItemTotal(8, 10);

    assert.deepEqual(actual, expected);
});


// Test for renderCart function:

test('This test should take in separate-array objects cartScanner and inventoryScanner and retun a table row (<tr>)', (assert) => {

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
        price: 30,
        currency: 'locutus-coin-40.png'
    };

    const expected = `<tr class="merch-item"><td class="inventory-name">Scanner</td><td class="merch-quantity">4</td><td class="merch-total-price">120 Locutii</td></tr>`;

    const actual = renderCart(inventoryScanner, cartScanner);

    assert.equal(actual.outerHTML, expected);
});


// Test for calcOrderTotal function:

test('This test should take in arrays fruitCart and fruitCatalog and return a total oder price of 17', (assert) => {

    const fruitCart = [
        {
            id: 22,
            quantity: 3
        },
        {
            id: 27,
            quantity: 2
        }
    ];

    const fruitCatalog = [
        {
            id: 20,
            name: 'Apple',
            image: 'apple.png',
            weight: 6,
            size: 'Small',
            price: 2
        },
        {
            id: 22,
            name: 'Plum',
            image: 'plum.png',
            weight: 4,
            size: 'Small',
            price: 3
        },
        {
            id: 25,
            name: 'Grape',
            image: 'grape.png',
            weight: 1,
            size: 'Small',
            price: 1
        },
        {
            id: 27,
            name: 'Peach',
            image: 'peach.png',
            weight: 8,
            size: 'Small',
            price: 4
        }
    ];

    const expected = 17;

    const actual = calcOrderTotal(fruitCart, fruitCatalog);

    assert.deepEqual(actual, expected);
});

