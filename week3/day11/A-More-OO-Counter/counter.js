// Assignment: [Lab] A More OO Counter
/*
Implement a version of the counter that we created in class as either a function constructor or a class. Make sure to define its methods on the prototype.

It should support the following methods:

.set
.inc
.dec
.show
.setStep
.reset
Example usage:

const sushiEatenCounter = new Counter(3, 1);
sushiEatenCounter.inc(); // returns 4
sushiEatenCounter.inc(); // returns 5
sushiEatenCounter.inc(); // returns 6
sushiEatenCounter.show(); // returns 6

const bunnyCounter = new Counter();
bunnyCounter.show() // return 0
bunnyCounter.set(10);
bunnyCounter.setStep(10);
bunnyCounter.inc(); // return 20
bunnyCounter.inc(); // return 30

Stretch
If you built it as a class, build it as a constructor with prototype. Vice versa.

*/



class Counter {

  constructor(count, step) {
    this.count = count;
    this.step = step;
  }
    // now() { return this.count };
  inc() { this.count ++ }
  dec() { this.count -- }
  set(n) { this.count = n }
  setStep(n) { this.step = n }
  show() { return this.count }
  reset() { this.count = 0; this.step = 1 }

}

const sushiEatenCounter = new Counter(3,1);
sushiEatenCounter.inc(); // returns 4
sushiEatenCounter.inc(); // returns 5
sushiEatenCounter.inc(); // returns 6
sushiEatenCounter.show(); // returns 6
console.log(sushiEatenCounter.show());


const bunnyCounter = new Counter();
bunnyCounter.show() // return 0
bunnyCounter.set(10);
bunnyCounter.setStep(10);
bunnyCounter.inc(); // return 20
bunnyCounter.inc(); // return 30
console.log(bunnyCounter.show());



///
/*
class Counter {

 constructor(count, step) {
    this.count = count;  //use this to get the input when called on a instance of new counter
    this.step = step; // this will grab the input of the initializer
}
    inc() { this.count ++ }
    incWithStep() { this.count += this.step }
    dec() { this.count-- }
    set(n) { this.count = n }
    setStep(n) { this.step = n }
    show() { return this.count }
  }


const sushiEatenCounter = new Counter(3,1);
sushiEatenCounter.inc();
sushiEatenCounter.inc();
sushiEatenCounter.inc();
console.log(sushiEatenCounter.show());


const bunnyCounter = new Counter();
bunnyCounter.show();
bunnyCounter.set(10);
bunnyCounter.setStep(10)
bunnyCounter.incWithStep();
bunnyCounter.incWithStep();
console.log(bunnyCounter.show());
*/
