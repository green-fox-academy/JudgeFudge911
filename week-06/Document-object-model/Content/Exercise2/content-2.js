'use strict';
const list = ['apple', 'banana', 'cat', 'dog'];
const ul = document.querySelector("ul");
//First
for (let i = 0; i < ul.childElementCount; i++) {
    ul.children[i].textContent = list[i];
}
//Second
ul.classList.add('green');