const counter = {
  count: 0,
  step: 1,
  now() { return this.count }
  dec() { this.count -= step },
  set(number) { this.count = number},
  stepStep(number) { this.step = number},
  reset() { this.count = 0; this.step = 1 }

};



counter.now();
counter.set();
counter.dec()
