import { aboutBtn, contentPage, removeChildren } from "./common.js";
console.log('--------> about-page.js loaded <--------');
const aboutTemplate = document.querySelector('#about-template').content;

let text = document.createElement('p');
text.textContent = "About Page";

aboutBtn.addEventListener('click', (event) => {
    removeChildren();
    let about = aboutTemplate.cloneNode(true);
    contentPage.append(about);
});
