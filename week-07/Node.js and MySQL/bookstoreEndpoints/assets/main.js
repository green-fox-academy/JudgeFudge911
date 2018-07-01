const body = document.querySelector('body');

let array = ["Timmmy", "Tatiana", "Gábor"];

array.forEach(e => {
    let p = document.createElement('p');
    p.innerText = e;
    body.appendChild(p);
});