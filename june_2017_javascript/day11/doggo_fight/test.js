"use strict";

const Doggo = require('./doggo.js');
const DoggoFighter = require('./doggoFighter.js');

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
console.log(biggie.fight(twoPac));
console.log(twoPac.fight(biggie));
console.log(biggie.fight(twoPac));
console.log(twoPac.fight(biggie));
console.log(biggie.fight(twoPac));
console.log(twoPac.fight(biggie));
console.log(biggie.fight(twoPac));
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
