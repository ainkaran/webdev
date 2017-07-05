// make a class for Car
// that has year, make, model
// info method that will tell me more information about the characters
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  info() {
    console.log(`The car is a ${this.year} ${this.make} ${this.model}`);
  }
}

// test code
let chevy = new Car("Chevy", "Blazer", 2017);
chevy.info();
