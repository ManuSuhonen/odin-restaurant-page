console.log('--------> common.js loaded <--------');

let contentPage = document.querySelector('#content');
let menuBtn = document.querySelector('#menu-button');
let aboutBtn = document.querySelector('#about-button');
let homeBtn = document.querySelector('#home-button');

function removeChildren() {
    let children = contentPage.children;
    Array.from(children).forEach(child => child.remove());
}

export {
    contentPage,
    homeBtn,
    menuBtn,
    aboutBtn,
    removeChildren
};
