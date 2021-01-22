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

