const counter = {
  count: 0,
  step: 1,
  inc() { this.count += step },
  dec() { this.count -= step },
  set(n) { this.count = n },
  setStep(n) { this.step = n },
  now() { return this.count },
  reset() { this.count = 0; this.step = 1 }
};

counter.count;
counter["count"];
let property = "count";
counter[property];

counter.count = 1;
counter["count"] = 1;
counter.count += 1;
counter.count++;

counter.now(); // 0 // will give the current value of count
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.now(); // 4
counter.setStep(2);
counter.inc(); //6
counter.dec();
counter.reset();
counter.now();


// to add a dec method, decrease by one
// add a set method, that can set the counter to any specified number

// create a way to dynamically set the step, the amount we inc or dec by....




//
