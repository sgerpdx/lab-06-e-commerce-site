// IMPORT MODULES under test here:
// import { example } from '../example.js';


const test = QUnit.test;

// Test for renderItem function:

test('This test should take in a medical item object and retun a list item (<li>)', (assert) => {

    const scanner = {
        id: 1010,
        item: 'Scanner',
        image: 'https://static.wikia.nocookie.net/memoryalpha/images/9/95/Starfleet_scanner%2C_2151.jpg/revision/latest?cb=20200521000653&path-prefix=en',
        weight: 4,
        size: 'Small',
        consumable: false,
        price: 0,
        value: 44,
    };

    const expected = `<li class="medical-item"><img class="item-image" src="https://static.wikia.nocookie.net/memoryalpha/images/9/95/Starfleet_scanner%2C_2151.jpg/revision/latest?cb=20200521000653&path-prefix=en"></img><p class="item-id">1010</p><p class="item-name">Scanner</p><p class="item-weight">4 oz</p><p class="item-size">Small</p><p class="consumable-status">Non-consumable</p><p class="federation-price">Free for Federation Citizens</p><p class="non-federation-price">44 Borg Bucks</p><button>Add to Cart</button></li>`;


    const actual = renderItem(scanner);

    assert.equal(actual.outerHTML, expected);
});

