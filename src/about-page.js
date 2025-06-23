import { aboutBtn, contentPage, removeChildren } from "./common.js";
console.log('--------> about-page.js loaded <--------');

let text = document.createElement('p');
text.textContent = "About Page";

aboutBtn.addEventListener('click', (event) => {
    removeChildren();
    contentPage.appendChild(text);
    console.log('About Page clicked');
});
