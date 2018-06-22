const activePicture = document.querySelector('#activePicture');
const thumbnails = document.querySelector('.thumbnails');

thumbnails.addEventListener('click', changePicture, false);

function changePicture(e) {
    if (e.target.src){
        activePicture.src = e.target.src;
        e.target.parentNode.focus = true;
    } else {
        activePicture.src = e.target.firstChild.nextSibling.src;
        e.target.focus = true;
    }
}