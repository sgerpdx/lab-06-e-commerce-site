import { findById, calcItemTotal } from '../utils.js';

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

// this funciton is possibly supposed to encompass much of the const-driven development in cart.js -- integration will need to be investigated;

