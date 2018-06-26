const httpRequest = new XMLHttpRequest();
const submitButton = document.querySelector('.submitButton');
const inputField = document.querySelector('.charNameInput');
const charList = document.querySelector('.charList');
const movieList = document.querySelector('.movieList');
submitButton.addEventListener('click', searchForCharacters);

function searchForCharacters() {
    if (inputField.value) {
        getCharactersByName(inputField.value);
    }
}

function createMovieList(titles) {
    movieList.innerHTML = "";
    for (let title of titles) {
        let movie = document.createElement('li');
        movie.innerHTML = title;
        movieList.appendChild(movie);
    }
}

function getCharactersByName(input) {
    httpRequest.open('GET', `https://swapi.co/api/people/?search=${input}`, true);
    httpRequest.onload = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            createCharList(JSON.parse(httpRequest.responseText));
        }
    };
    httpRequest.send();
}

function createCharList(data) {
    let results = data.results;
    for (let result of results) {
        let charLi = document.createElement('li');
        charLi.innerHTML = result.name;
        charLi.addEventListener('click', () => {
            getMovieLinks(result.name);
        });
        charList.appendChild(charLi);
    }
}

function getMovieLinks(tag) {
    httpRequest.open('GET', `https://swapi.co/api/people/?search=${tag.replace(' ', '%20')}`, false);
    httpRequest.onload = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            let data = JSON.parse(httpRequest.responseText);
            return getMovieTitles(data.results[0].films);
        }
    };
    httpRequest.send();
}

function getMovieTitles(links) {
    let movieNames = [];
    for (let link of links) {
        httpRequest.open('GET', `${link}`, false);
        httpRequest.onload = () => {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                let data = JSON.parse(httpRequest.responseText);
                movieNames.push(data.title)
            }
        };
        httpRequest.send();
    }
    createMovieList(movieNames);
}