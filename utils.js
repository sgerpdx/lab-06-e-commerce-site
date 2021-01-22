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


export function getCart() {

    const CART = 'CART';
    const defaultEmptyCart = [];

    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {
        const parsedCart = JSON.parse(stringyCart);
        return parsedCart;
    } else {
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, stringyDefaultCart);
        return defaultEmptyCart;
    }
}

