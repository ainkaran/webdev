"use strict";

const Doggo = require('./doggo.js');

module.exports = class DoggoFighter extends Doggo {
  constructor (name, specialAttack) {
    super(name); // super calls the same named method in the extended class
    this.specialAttack = specialAttack;
  }

  fight (doggoFighter) {
    let attacker = "";

    // who successfully hit?
    if (Math.random() > 0.5) {
      attacker = this.name;
      doggoFighter.hitPoints -= 10;
    } else {
      attacker = doggoFighter.name;
      this.hitPoints -= 10;
    }

    if (doggoFighter.hitPoints <= 0) {
      return `In memory of ${ doggoFighter.name }`;

    } else if (this.hitPoints <= 0) {
      return `In memory of ${ this.name }`;
    } else {
      return `----\n${ this.name } has ${ this.hitPoints } health \nand is battling ${ doggoFighter.name } and his health is ${ doggoFighter.hitPoints }. \nAnd his special attack is ${ this.specialAttack }.\n--- And the attacker was ${ attacker }`;
    }
  }
}
