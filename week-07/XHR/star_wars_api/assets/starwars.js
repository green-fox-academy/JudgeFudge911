const submitButton = document.querySelector('.submitButton');
const inputField = document.querySelector('.charNameInput');
submitButton.addEventListener('click', searchFor);

function searchFor() {
    console.log(inputField.value);
}