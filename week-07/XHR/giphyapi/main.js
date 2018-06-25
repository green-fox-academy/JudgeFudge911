const ourRequest = new XMLHttpRequest();
const container = document.querySelector('.container');
let data;
ourRequest.open('GET', "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Zc6j1Mm6HCTboLgfb1mFVeD7GMkYhb10&limit=16");
ourRequest.onload = () => {
    let ourData = JSON.parse(ourRequest.responseText);
    data = ourData;
    for (let i = 0; i < 15; i++) {
        let img = document.createElement('img');
        img.src = ourData.data[i].images.original_still.url;
        container.appendChild(img);
        img.addEventListener('click', playGiphy, false)
    }

};

ourRequest.send();

function playGiphy(e) {
    data.data.forEach(element => {
        if (element.images.original_still.url === e.srcElement.currentSrc) {
            e.target.src = element.images.original.url
        }
    })
}