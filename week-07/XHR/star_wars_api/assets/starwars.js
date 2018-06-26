const httpRequest = new XMLHttpRequest();
const submitButton = document.querySelector('.submitButton');
const inputField = document.querySelector('.charNameInput');
const charList = document.querySelector('.charList');
submitButton.addEventListener('click', searchFor);

function searchFor() {
    if (inputField.value) {
        httpRequest.open('GET', `https://swapi.co/api/people/?search=${inputField.value}`, true);
        httpRequest.onload = () => {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                getCharList(JSON.parse(httpRequest.responseText))
            }
        };
        httpRequest.send();
    }
}


function getCharList(data) {
    let results = data.results;
    for (let result of results) {
        let charLi = document.createElement('li');
        charLi.innerHTML = result.name;
        charList.appendChild(charLi);
    }
}
