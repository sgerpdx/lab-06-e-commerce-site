# E-Commerce Site Lab -- Day One/Lab 06

## Outcome:

The desired outcome at this point is a product page into which new products can be added from product data, using a JS 'render' function.

## HTML plan:

* Create a main 'storefront' page with a link to a second HTML product page;
* The product page is where items for sale will be listed, but this data will be appended via a button, in JavaScript;
* Create a section and div structure to house an unordered list <ul> into which the appending will occur.

## Javascript Plan:
<!-- * Create a render file for the function, and a separate data file in which to store product information in an object array.
    - Render-function components for each key-value pair in the object:
        - Create an HTML element, e.g. h2 or li, in a const variable;
        - Add to the classList for the element
        // need to review what the above step is doing, descriptively //
        - Edit the text content for the element
        - append this element/variable to the list
    - Create a button -->







# Notes for Lab 08:
# Personal Go-Along

Instead of hard-coding, we want to create a place where all the data can be, though its processing destinations will remain the same: but now we're giving Local Storage/Persistence Layer (a Database). Data can be changed with code, dynamically onClick or whatever (this can't be done in our hard-coded files). 

OnClick -- we will be making changes to our data in Local Storage.

### Local Storage

On a site-by-site level (eg google, reddit, github, localhost -- all protected from each other). We will be moving there:
    - the cart (today)
    - the products (eventually)

Web: Inspect: Application: Local Storage
in JS: localStorage.setItem(key, value) eg ('favorite puppy', 'jeep')
hit Enter ... now the site has access, and will permanently unless/until you manually clear it

(cookies are another thing -- stored on the server side from browser, whereas localStorage JUST lives in the browser, eg literally in Chrome)

to change > localStorage.setItem('favorite puppy', 'clifford')
retrieve > localStorage.getItem('favorite puppy')
    > 

"The localStorage Web API" (a set of methods in the browser) (API here means "list of helpful functions")

* localStorage only stores strings (or more broadly, primitives) (objects must be turned into string first) re: "serializing" into sequential form, as we copied the outerHTML in recent rendering functions;

If: we want to store an array of objects, eg a cart:
    Array cannot be stored in localStorage, so...
        JSON.stringify(someArray)

There can be errors if the input is NOT VALID JSON
    ("JavaScript Object Notation")

Example: a boolean can be stringified and then parsed back into a boolean.

Magic String: a situation in which there is a string holding an app together that you typed out that everyone has to use/remember...so put that string into a const.

const  = localStorage.getItem('CART');
const cart = JSON


## Plan for Thursday 01-21 or Lab 08:

- Main things:
    - Event Listener in Render that adds products to cart onClick
        * Button EL: onClick: 
            - look at id of the item we clicked on
            - use that id to add/increment quantiy of that item in the cart
                * get cart from localStorage
                * check if already in the cart -- if so, increment quantity /// if not, add item to cart with qty 1 (initialize)
                * 
    - Load the cart from local storage
        * grab the cart from localStorage, and store it in a variable
        * replace hard-coded cart with that variable

immutability: destroying and recreating the cart each time...

