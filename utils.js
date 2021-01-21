// import { medicines } from '../products/equipment.js';
// import { cart } from './cart.js';

export function findById(id, array) {

    for (let item of array) {

        if (item.id === id) {

            return item;

        }

    }
}


export function calcItemTotal(quantity, price) {
    return quantity * price;
}