import { menuBtn, contentPage, removeChildren } from "./common.js";
import menuData from "./menu.json";
const foodImages = require.context('./assets/images', false, /\.(png|jpe?g|svg)$/);

console.log('--------> menu-page.js loaded <--------');

let text = document.createElement('p');
text.textContent = "Menu Page";

menuBtn.addEventListener('click', (event) => {
    removeChildren();
    contentPage.appendChild(text);
    console.log('Menu Page clicked');
});

function createMenuItem({ name, price, description, image }) {
    const item = document.createElement('div');
    item.className = 'menu-item';

    const detail = document.createElement('div');
    detail.className = 'detail';

    const title = document.createElement('p');
    title.className = 'menu-item-name';

    const priceEl = document.createElement('p');
    priceEl.className = 'menu-item-price';

    const desc = document.createElement('p');
    desc.className = 'menu-item-desc';
    
    const imgHolder = document.createElement('div');
    imgHolder.className = 'menu-image'
    
    const img = document.createElement('img');
    img.src = foodImages(image);
    imgHolder.appendChild(img)

    title.textContent = name;
    priceEl.textContent = price;
    desc.textContent = description;
    detail.append(title, priceEl, desc);
    item.append(detail, imgHolder)
    return item;
}

menuBtn.addEventListener('click', (event) => {
    removeChildren();
    menuData.food.forEach(itemData => {
        contentPage.appendChild(createMenuItem(itemData));
    });
    console.log('Menu Page clicked');
});
