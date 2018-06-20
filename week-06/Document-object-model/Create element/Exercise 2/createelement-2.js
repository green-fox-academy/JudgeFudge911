const ul = document.querySelector('.asteroids');
const king = document.querySelector("li");
ul.removeChild(king);
const planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true
    }
];
planetData.forEach(element => {
   if(element.asteroid){
       let newItem = document.createElement('li');
       newItem.classList.add(element.category);
       newItem.innerHTML = element.content;
       ul.appendChild(newItem);
   }
});
