class Car {

  constructor(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;
  }
  info() {
    console.log(`This car is: ${this.year}, ${this.make}, ${this.model}`);
  }

}

// test code
let audi = new Car("2017", "Audi", "Z3");
audi.info();


audi.year;
audi.make;
audi.model;
