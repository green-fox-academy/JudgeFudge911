const img = document.querySelector('img');
console.log(img.getAttribute('src'));
img.setAttribute('src' ,'data:image/jpeg;base64,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');
const a = document.querySelector('a');
a.setAttribute('href', 'https://www.greenfoxacademy.com/');
const secondButton = document.querySelector('.this-one');
secondButton.setAttribute('disabled', 'TRUE');
secondButton.innerHTML = "Don't click me!";