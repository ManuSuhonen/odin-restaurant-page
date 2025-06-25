import { homeBtn, contentPage, removeChildren } from "./common.js";
console.log('--------> home-page.js loaded <--------');

let title = document.createElement('p');
title.textContent = "Home Page";

let description = document.createElement('p');

description.textContent = `Welcome to The Prancing Pony Inn & Bistro, where the warmth of Elven hospitality meets
        the flavors of Middle - earth.Nestled in the heart of Rivendell, our cozy restaurant and inn offers a unique
        dining experience that will transport you to a world of wonder and enchantment.Join us for a taste of our
        signature Elven cuisine, crafted with fresh ingredients from the surrounding countryside and infused with the
        magic of the Elven realm.Whether you're a weary traveler seeking rest and refreshment, or a local looking for a
        special night out, we invite you to come and experience the warmth and hospitality of The Prancing Pony Inn &
    Bistro.Book your table now and let us treat you to a culinary journey through Middle-earth!`;

description.className = 'home-desc';

homeBtn.addEventListener('click', (event) => {
    loadHome();
});

function loadHome() {
    removeChildren();
    contentPage.appendChild(description);
}

loadHome();
