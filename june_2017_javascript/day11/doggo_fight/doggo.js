"use strict";

module.exports = class Doggo {
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
