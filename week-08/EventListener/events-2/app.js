document.addEventListener('DOMContentLoaded', ()=>{
    const button = document.querySelector('button');
    button.addEventListener('click', countItems);
    const result = document.querySelector('.result');
    const list = document.querySelector('ul');
    function countItems (e) {
        result.innerHTML = list.childElementCount;
    }
});