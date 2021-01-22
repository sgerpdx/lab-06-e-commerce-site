import { addToCart, getCart } from '../cart/cart-api.js';
import { medicines } from './products-data.js';

export function renderItem(medicine) {

    const li = document.createElement('li');
    li.classList.add('medical-item');

    const pId = document.createElement('p');
    pId.classList.add('medicine-id');
    pId.textContent = medicine.id;
    li.append(pId);

    const h4 = document.createElement('h4');
    h4.classList.add('medicine-name');
    h4.textContent = medicine.name;
    li.append(h4);

    const img = document.createElement('img');
    img.classList.add('medicine-image');
    img.src = `../assets/${medicine.image}`;
    li.append(img);

    const pWeight = document.createElement('p');
    pWeight.classList.add('medicine-weight');
    pWeight.textContent = `${medicine.weight} oz`;
    li.append(pWeight);

    const pSize = document.createElement('p');
    pSize.classList.add('medicine-size');
    pSize.textContent = medicine.size;
    li.append(pSize);

    const pValue = document.createElement('p');
    pValue.classList.add('medicine-value');
    pValue.textContent = `${medicine.price} Locutii`;
    li.append(pValue);

    const imgCurrency = document.createElement('img');
    imgCurrency.classList.add('currency-image');
    imgCurrency.src = `../assets/${medicine.currency}`;
    li.append(imgCurrency);

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    li.append(button);
    button.addEventListener('click', () => {

        addToCart(medicine.id);

    });

    return li;

}

