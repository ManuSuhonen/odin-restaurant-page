import { menuBtn, contentPage, removeChildren } from "./common.js";
console.log('--------> menu-page.js loaded <--------');

let text = document.createElement('p');
text.textContent = "Menu Page";

menuBtn.addEventListener('click', (event) => {
    removeChildren();
    contentPage.appendChild(text);
    console.log('Menu Page clicked');
});

// import odinImage from "./assets/images/ag-grid-logo.6a68915181a34a15.png";

// const text = document.createElement("p");
// text.textContent = "asdasdds";

// document.body.appendChild(text);

// const image = document.createElement("img");
// image.src = odinImage;

// document.body.appendChild(image);
