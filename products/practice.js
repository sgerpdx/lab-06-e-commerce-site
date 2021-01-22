// this file is for typing javascript to follow along to lectures:

const myArrayOfFruit = [
    {
        name: 'apple',
        color: 'red'
    },
    {
        name: 'banana',
        color: 'yellow'
    },
    {
        name: 'pear',
        color: 'green'
    }


];

// first stringify your array:
const stringArray = JSON.stringify(myArrayOfFruit);
// then store this way:
localStorage.setItem(FRUITS, stringyArray);
// ...or should it be 'fruits' there? no, methinks...
const storedArray = localStorage.getItem(FRUITS);
// then-then, to unstringify in order to retrieve from localStorage as a usable array:
const parsedArray = JSON.parse(storedArray);
// ...or should the inupt on that last one be stringyArray?


// somewhere...
const FRUITS = 'FRUIT';



// cart-utils :

const CART = 'CART'; //makes it so that this string doesn't have to be constantly re-typed
const defaultEmptyCart = [];
// the function below is about retrieving the cart from locStor, or substituting an empty array if there is none;
function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {
        // if there is a cart in local storage, parse and return;
        const parsedCart = JSON.parse(stringyCart);

        return parsedCart;

        // the else case represents a new shopper, e.g. no cart yet:
    } else {
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        // below, we want to store stringyDefaultCart, and we want to store it in CART:
        localStorage.setItem(CART, stringyDefaultCart);

        return defaultEmptyCart;
    }

}

// function returns an ARRAY, either populated or empty
// test local storage to see if cart is there (qunit has a fake local storage for us to use in tests);



// default empty cart allows us to parse without parsing UNDEFINED;

export function clearCart() {
    const stringyDefaultCart = JSON.stringify(defaultEmptyCart);

    localStorage.setItem(CART, stringyDefaultCart);
}


export function setCart(cart) {

    const stringyCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringyCart);
}


export function addToCart(id) {
    // if id already in cart, increment; otherwise, initialize new object into cart;

    const cart = getCart();

    const cartItem = findById(id, cart);

    //looping is unecc. b/c the findById f has been used already...
    //this loop may not need to be here, because there only needs to be one:
    for (let item in cart) {

        if (cartItem) {
            cartItem.quantity++;

            //here we define a new object to add to the cart array:
        } else {
            const newItem = {
                id: id,
                quantity: 1
            };

            cart.push(newItem);

        }

        setCart(cart);
    }

}

// for an apple, make an object w/ id and quantity {id:2, qty:1}
// 

const cart = getCart();
//this change/addition is where the cart is redefined from hardcode to being source from localStorage;
//have to figure out where to put this...but that's just one thing...


//abstract work into funcitons...








