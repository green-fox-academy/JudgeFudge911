const activePicture = document.querySelector('#activePicture');
const activeH1 = document.querySelector('#activeH1');
const activeParagraph = document.querySelector('#activeP');
const thumbnails = document.querySelector('.thumbnails');
const thumbnailButton = document.querySelectorAll('.thumbnailButton');
const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');
const picMaxIndex = thumbnailButton.length-1;

let photos = [
    {path: '/assets/imges/1.png', header: "I am sorry little one", description: "lorem ipsum", isActive: 'active'},
    {path: '/assets/imges/2.png', header: "I am sorry little two", description: "lorem ipsum", isActive: ''},
    {path: '/assets/imges/3.png', header: "I am sorry little three", description: "lorem ipsum", isActive: ''}

];

thumbnails.addEventListener('click', changePicture, false);
leftButton.addEventListener('click', rotateLeft, false);
rightButton.addEventListener('click', rotateRight, false);

function changePicture(e, currPic, direction) {
    if (e.classList) {
        activePicture.src = e.firstChild.nextSibling.src;
        changePictureDescription(findActiveThumbnailIndex() + direction);
        currPic.classList.remove('active');
        e.classList.add('active');
        e.focus = true;
    } else {
        if (e.target.src) {
            activePicture.src = e.target.src;
            thumbnailButton[findActiveThumbnailIndex()].classList.remove('active');
            e.target.parentNode.classList.add('active');
            changePictureDescription(findActiveThumbnailIndex());
            e.target.parentNode.focus = true;
        } else {
            activePicture.src = e.target.firstChild.nextSibling.src;
            thumbnailButton[findActiveThumbnailIndex()].classList.remove('active');
            e.target.classList.add('active');
            changePictureDescription(findActiveThumbnailIndex());
            e.target.focus = true;
        }
    }
}

function rotateLeft() {
    let currIndex = findActiveThumbnailIndex();
    if (currIndex - 1 < 0) {
        changePicture(thumbnailButton[picMaxIndex], thumbnailButton[0], picMaxIndex)
    } else {
        changePicture(thumbnailButton[currIndex - 1], thumbnailButton[currIndex],-1);
    }
}

function rotateRight() {
    let currIndex = findActiveThumbnailIndex();
    if (currIndex + 1 > picMaxIndex) {
        changePicture(thumbnailButton[0], thumbnailButton[picMaxIndex], -picMaxIndex)
    } else {
        changePicture(thumbnailButton[currIndex + 1], thumbnailButton[currIndex], 1);
    }
}

function findActiveThumbnailIndex () {
    let buttons = Array.from(thumbnailButton);
    let currIndex = 0;
    buttons.forEach(e => {
        if (e.classList.contains('active')) {
            currIndex = buttons.indexOf(e);
        }
    });
    return currIndex;
}

function changePictureDescription(currIndex) {
    activeH1.innerHTML = photos[currIndex].header;
    activeParagraph.innerHTML = photos[currIndex].description;
}

