import { findById, calcOrderTotal } from '../utils.js';
import { medicines } from '../products/products-data.js';
//import { cart } from './cart-data.js';
import { renderCart } from './render-cart.js';


const tbody = document.getElementById('table-body');

const stringyCart = localStorage.getItem('CART');
const cart = JSON.parse(stringyCart);


for (let item of cart) {

    const lineItem = item;
    const med = findById(lineItem.id, medicines);
    const tableRow = renderCart(med, lineItem);
    tbody.append(tableRow);

}


const tfoot = document.getElementById('table-foot');
const totalPrice = calcOrderTotal(cart, medicines);
tfoot.append(totalPrice);

