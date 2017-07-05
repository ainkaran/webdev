class Doggo {
    constructor (name) {
      this.name = name;
      this.hitPoints = 100;
  }
  bark () {
    return "Woof!";
  }

  sleep () {
    return "Zzzzzz! *snore*";
  }
}


class DoggoFighter extends Doggo {
  constructor (name, specialAttack) {
    super(name); // super calls the same named method in the extended class
    this.specialAttack = specialAttack;
  }

  fight (doggoFighter) {
    let winner = "";

    // who will win in a one-hit fight?
    if (Math.random() > 0.5) {
      winner = this.name;
    } else {
      winner = doggoFighter.name;
    }

    return `----\n${ this.name } has ${ this.hitPoints } health \nand is battling ${ doggoFighter.name }. \nAnd his special attack is ${ this.specialAttack }.\n--- And the winner is ${ winner }`;
  }
}

// test
let doggo = new Doggo("Snoop");
console.log(doggo.bark());
console.log(doggo.sleep());
// doggo.fight(); // method is not defined

let twoPac = new DoggoFighter("2Pac", "Go For the Throat"); // expecting 2 args and only 1
console.log(twoPac.bark());
console.log(twoPac.sleep());


let biggie = new DoggoFighter("Biggie", "Shock Damage");
console.log(biggie.bark());
console.log(biggie.sleep());

console.log(twoPac.fight(biggie));
console.log(biggie.fight(twoPac));
console.log(twoPac.fight(biggie));
console.log(biggie.fight(twoPac));
console.log(twoPac.fight(biggie));
console.log(biggie.fight(twoPac));
console.log(twoPac.fight(biggie));
console.log(biggie.fight(twoPac));
console.log(twoPac.fight(biggie));
console.log(biggie.fight(twoPac));
console.log(twoPac.fight(biggie));
console.log(biggie.fight(twoPac));
console.log(twoPac.fight(biggie));
console.log(biggie.fight(twoPac));


//  make it so that the hitpoints are tracking
//  each hit should only take of 10 points.. so it takes 10 hits to kill
//  make them battle until someones dies


//
