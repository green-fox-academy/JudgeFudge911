const activePicture = document.querySelector('#activePicture');
const thumbnails = document.querySelector('.thumbnails');
const thumbnailButton = document.querySelectorAll('.thumbnailButton');
const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');

thumbnails.addEventListener('click', changePicture, false);
leftButton.addEventListener('click', rotateLeft, false);
rightButton.addEventListener('click', rotateRight, false);

function changePicture(e, currPic) {
    if (e.classList) {
        activePicture.src = e.firstChild.nextSibling.src;
        currPic.classList.remove('active');
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
    if (currIndex - 1 < 0) {
        changePicture(thumbnailButton[buttons.length - 1], thumbnailButton[0])
    } else {
        changePicture(thumbnailButton[currIndex - 1], thumbnailButton[currIndex]);
    }
}

function rotateRight() {
    let buttons = Array.from(thumbnailButton);
    let currIndex = 0;
    buttons.forEach(e => {
        if (e.classList.contains('active')) {
            currIndex = buttons.indexOf(e);
        }
    });
    if (currIndex + 1 > buttons.length - 1) {
        changePicture(thumbnailButton[0], thumbnailButton[buttons.length-1])
    } else {
        changePicture(thumbnailButton[currIndex + 1], thumbnailButton[currIndex]);
    }
}

