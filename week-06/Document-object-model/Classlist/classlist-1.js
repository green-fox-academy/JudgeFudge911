'use strict';
const paragraphs = document.querySelectorAll('p');
const lastP = paragraphs[paragraphs.length - 1];
if (lastP.innerHTML === 'dolphin') {
    paragraphs[0].innerHTML = 'pear';
}
if (paragraphs[0].classList.contains('apple')) {
    paragraphs[2].innerHTML = 'dog';
}

paragraphs[0].classList.add('red');
paragraphs[1].classList.add('pear');
