let counter = 0;

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
    this.cash += amt;
    Shuffler.cash -= amt;
    console.log(`Cyprus got ${amt}`);
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
    this.cash += amt;
    Shuffler.cash -= amt;
    console.log(`Panama got ${amt}`);
  }
};

const Shuffler = {
  cash: 10000,
  pick: function() {
    let amount = 1000;
    counter % 2 === 0 ? Panama.deposit(amount) : Cyprus.deposit(amount);
    counter++;
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000
console.log(Cyprus.cash); // 2000
