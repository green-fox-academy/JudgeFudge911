const GphApiClient = require('giphy-js-sdk-core');
client = GphApiClient("Zc6j1Mm6HCTboLgfb1mFVeD7GMkYhb10");

window.onload = () => {

    const http = new XMLHttpRequest();

    const container = document.querySelector('.container');

    http.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Zc6j1Mm6HCTboLgfb1mFVeD7GMkYhb10&limit=16');

    http.send();

    console.log(http);

    http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {

        }
    };
};