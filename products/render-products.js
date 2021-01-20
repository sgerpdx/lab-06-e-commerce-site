

export function renderItem(item) {

    const li = document.createElement('li');
    li.classList.add('medical-item');

    const pId = document.createElement('p');
    pId.classList.add('item-id');
    pId.textContent = item.id;
    li.append(pId);

    const h4 = document.createElement('h4');
    h4.classList.add('item-name');
    h4.textContent = item.name;
    li.append(h4);

    const img = document.createElement('img');
    img.classList.add('item-image');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Twelfth_Doctor%27s_Sonic_Screwdriver.jpg';
    li.append(img);

    const pWeight = document.createElement('p');
    pWeight.classList.add('item-weight');
    pWeight.textContent = `${item.weight} oz`;
    li.append(pWeight);

    const pSize = document.createElement('p');
    pSize.classList.add('item-size');
    pSize.textContent = item.size;
    li.append(pSize);

    const pValue = document.createElement('p');
    pValue.classList.add('item-value');
    pValue.textContent = `${item.value} Borg Bucks`;
    li.append(pValue);

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    li.append(button);

    return li;

}