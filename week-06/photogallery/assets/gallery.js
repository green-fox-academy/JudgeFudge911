const activePicture = document.querySelector('#activePicture');
const thumbnails = document.querySelector('.thumbnails');
const thumbnailButton = document.querySelectorAll('.thumbnailButton');
const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');

thumbnails.addEventListener('click', changePicture, false);
leftButton.addEventListener('click', rotateLeft, false);
rightButton.addEventListener('click', rotateRight, false);

function changePicture(e) {
    if(e.classList){
        activePicture.src = e.firstChild.nextSibling.src;
        e.classList.add('active');
        e.focus = true;
    } else {
        if (e.target.src) {
            activePicture.src = e.target.src;
            e.target.parentNode.classList.add('active');
            e.target.parentNode.focus = true;
        } else {
            activePicture.src = e.target.firstChild.nextSibling.src;
            e.target.classList.add('active');
            e.target.focus = true;
        }
    }
}

function rotateLeft() {
    let buttons = Array.from(thumbnailButton);
    let currIndex = 0;
    buttons.forEach(e => {
        if (e.classList.contains('active')) {
            currIndex = buttons.indexOf(e);
        }
    });
    changePicture(thumbnailButton[currIndex-1]);
}

function rotateRight() {
    let buttons = Array.from(thumbnailButton);
    let currIndex = 0;
    buttons.forEach(e => {
        if (e.classList.contains('active')) {
            currIndex = buttons.indexOf(e);
        }
    });
    changePicture(thumbnailButton[currIndex-1]);
}

