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

export function calcOrderTotal(medicines, cart) {

    let orderTotal = 0;

    for (let med of medicines) {

        if (medicines.item.id === cart.item.id) {

            const itemInCart = med.id;

            const inventoryDescription = findById(itemInCart, medicines);
            const cartDescription = findById(itemInCart, cart);

            const inventoryPrice = inventoryDescription.price;
            const cartQuantity = cartDescription.quantity;

            const itemTotal = calcItemTotal(cartQuantity, inventoryPrice);

            orderTotal = orderTotal + itemTotal;

        }

    }

    return orderTotal;


}
