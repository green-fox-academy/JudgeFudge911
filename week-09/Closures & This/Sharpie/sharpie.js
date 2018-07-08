class Sharpie {
  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
    this.use = function(){
        this.inkAmount -= this.width;
    }
  }
}

let sharpie = new Sharpie("red", 1);
let counter = 1;

while(sharpie.inkAmount > 0){
    sharpie.use();
    console.log(`This is turn: ${counter}`);
    counter++;
}
