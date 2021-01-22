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


export function calcOrderTotal(cartArray, medicinesArray) {

    let orderTotal = 0;

    for (let item of cartArray) {

        const lineItem = item;

        const medItem = findById(lineItem.id, medicinesArray);

        const medPrice = medItem.price;
        const cartQuantity = lineItem.quantity;

        const itemTotal = calcItemTotal(cartQuantity, medPrice);

        orderTotal = orderTotal + itemTotal;

    }

    return orderTotal;

}


