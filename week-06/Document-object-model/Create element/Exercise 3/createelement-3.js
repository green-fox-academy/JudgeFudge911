const kids = [{"pet_name":"Wattled crane","owner":"Bryant"},
    {"pet_name":"Devil, tasmanian","owner":"Alejandro"},
    {"pet_name":"Mynah, common","owner":"Nelie"},
    {"pet_name":"Dolphin, common","owner":"Mariele"},
    {"pet_name":"Gray duiker","owner":"Maddalena"},
    {"pet_name":"Crab (unidentified)","owner":"Lucine"},
    {"pet_name":"Ant (unidentified)","owner":"Lorianna"},
    {"pet_name":"Bison, american","owner":"Tommie"},
    {"pet_name":"Yellow mongoose","owner":"Vivyan"},
    {"pet_name":"Carpet snake","owner":"Veda"},
    {"pet_name":"Lesser mouse lemur","owner":"Isidor"}];

const pets = document.querySelector('#pets');

kids.forEach(element => {
    let newArt = document.createElement('article');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    h3.innerHTML = element.owner;
    p.innerHTML = element.pet_name;
    newArt.appendChild(h3);
    newArt.appendChild(p);
    pets.appendChild(newArt);
});