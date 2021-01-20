// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderItem } from '../products/render-products.js';

const test = QUnit.test;

// Test for renderItem function:

test('This test should take in a medical item object and retun a list item (<li>)', (assert) => {

    const scanner = {
        id: 1010,
        name: 'Scanner',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Twelfth_Doctor%27s_Sonic_Screwdriver.jpg',
        weight: 4,
        size: 'Small',
        value: 44,
    };

    const expected = `<li class="medical-item"><p class="item-id">1010</p><h4 class="item-name">Scanner</h4><img class="item-image" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Twelfth_Doctor%27s_Sonic_Screwdriver.jpg"><p class="item-weight">4 oz</p><p class="item-size">Small</p><p class="item-value">44 Borg Bucks</p><button>Add to Cart</button></li>`;

    const actual = renderItem(scanner);

    assert.equal(actual.outerHTML, expected);
});

