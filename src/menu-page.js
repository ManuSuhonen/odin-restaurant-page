import { menuBtn, contentPage, removeChildren } from "./common.js";
import menuData from "./menu.json";
const foodImages = require.context('./assets/images', false, /\.(png|jpe?g|svg)$/);
const foodTemplate = document.querySelector('#menu-template').content;

function createMenuItem({ name, price, description, image }) {
    let menu = foodTemplate.cloneNode(true);

    menu.querySelector('.food-item-title').textContent = name;
    menu.querySelector('.food-item-description').textContent = description;
    menu.querySelector('.food-item-price').textContent = price;
    menu.querySelector('.food-item-image').src = foodImages(image);
    return menu;
}


function createH2Item(text) {
    let item = document.createElement('h2');
    item.textContent = text;
    return item;
}

function fillMenu() {
    contentPage.appendChild(createH2Item('Menu'));

    menuData.food.forEach(itemData => {
        contentPage.appendChild(createMenuItem(itemData));
    });

    contentPage.appendChild(createH2Item('Drinks'));

    menuData.drinks.forEach(itemData => {
        contentPage.appendChild(createMenuItem(itemData));
    });
}

menuBtn.addEventListener('click', (event) => {
    removeChildren();
    fillMenu();
});
