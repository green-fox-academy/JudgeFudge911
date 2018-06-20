//First
const king = document.querySelector('#b325');
console.log(king);
//Second
const businessLamp = document.querySelectorAll('.big');
for(let element of Array.from(businessLamp)){
    console.log(element);
}
//Third
const conceitedKing = document.querySelector('.container').children;
for (let element of Array.from(conceitedKing)){
    alert(element);
}
//Fourth
const noBusiness = document.body.getElementsByTagName('div');
for (let element of Array.from(noBusiness)){
    console.log(element);
}