const ourRequest = new XMLHttpRequest();
const container = document.querySelector('.container');
ourRequest.open('GET', "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Zc6j1Mm6HCTboLgfb1mFVeD7GMkYhb10&limit=16");
ourRequest.onload = () => {
    let ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);
    for (let i = 0; i < 15; i++) {
        console.log(ourData.data[i].url);
        let img = document.createElement('img')
        img.src = ourData.data[i].images.original_still.url;
        container.appendChild(img);
    }

};
ourRequest.send();