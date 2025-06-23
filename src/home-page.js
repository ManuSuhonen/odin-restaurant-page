import { homeBtn, contentPage, removeChildren } from "./common.js";
console.log('--------> home-page.js loaded <--------');

let text = document.createElement('p');
text.textContent = "Home Page";

homeBtn.addEventListener('click', (event) => {
    loadHome();
    console.log('Home Page clicked');
});

function loadHome() {
    removeChildren();
    contentPage.appendChild(text);
}

loadHome();
