'use strict';

const paragraphs = document.querySelectorAll('p');

//First
/*paragraphs.forEach((element) => {
    element.textContent = paragraphs[paragraphs.length - 1].textContent
});*/
//Second
paragraphs.forEach((element) => {
    element.innerHTML = paragraphs[paragraphs.length - 1].innerHTML
});


