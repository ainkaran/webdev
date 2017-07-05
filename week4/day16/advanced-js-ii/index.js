// Demo & Exercise: toArrowFunction

/*
function add (a, b) {
  return a + b;
}
*/

const add = (a, b) => a + b;

/*
function notNull (obj) {
  return obj !== null;
}
*/

const notNull = obj => obj !== null;

/*
function flip (fn) {
  return function (a, b) {
    return fn(b, a);
  }
}
*/

/*
const flip = fn => {
  return function (a, b) {
    return fn(b, a);
  }
}
*/

const flip = fn => (a, b) => fn(b, a);

// Arrow function's this

const obj = {
  a: 1,
  example: function () {
    return this;
  },
  arrowExample: () => this, // What is this here compared to above?
  insideExample: function () {
    // a regular function's this is the this of the scope
    // when it is called
    // IIFE (Immediately Invoked Function Expression)
    return (function () {return this })();
    // We put a function that we want to call Immediately
    // inside () to get its value. Otherwise, javascript will
    // throw an error
  },
  insideArrowExample: function () {
    // an arrow function this is the this of the scope
    // where it was declared
    return (() => this)();
  }
};

// Demo: A Loud Function

// Example usage:

// loud(add, 1, 2);
// Calling add
// Called add & return 3

// To get all of the left over arguments into one array, use the
// gather syntax (...) as shown below:
/*
function loud (fn, ...arg) {
  console.log(`Calling ${fn.name}`);
  // To use all the elements of array as arguments to function,
  // use the spread syntax (...) as shown below:
  const returnValue = fn(...arg);
  console.log(`Called ${fn.name} & returned ${returnValue}`);
  return returnValue;
}
*/

// Exercise: Custom Logger

function loud (logFn, fn, ...arg) {
  logFn(`Calling ${fn.name}`);
  const returnValue = fn(...arg);
  logFn(`Called ${fn.name} & returned ${returnValue}`);
  return returnValue;
}

// Demo: Implement each

/*
function each (fn, arr) {
  for (let val of arr) {
    fn(val);
  }
}
*/

function each (fn, arr) {
  for (let i = 0, max = arr.length; i < max; i += 1) {
    // we call the callback, fn, on every of the loop
    // with the arguments of the current value and the current index
    fn(arr[i], i);
  }
}

// Exercise: Implement map

/*
function map (fn, arr) {
  let newArr = [];
  for (let i = 0, max = arr.length; i < max; i += 1) {
    newArr.push(fn(arr[i], i));
  };
  return newArr;
}
*/

function map (fn, arr) {
  let newArr = [];
  each(
    (v, i) => newArr.push(fn(v, i)),
    arr
  );
  return newArr;
}

// Demo: setTimeout

// setTimeout is asynchronous. It doesn't block javascript from executing
// the next line of code. Make sure that if you want to do with value
// that is changed in a setTimeout callback that you also do that
// inside the callback.
/*
let outsideA = 'What'
console.log('Before outsideA:', outsideA);
setTimeout(() => {
  outsideA += ' is that!?';
  console.log('After outsideA in callback:', outsideA);
}, 0);
console.log('After outsideA:', outsideA);
*/
// Exercise: Say Hello Every Two Seconds

/*
setInterval(
  () => { console.log("Hello")},
  2000
);
setInterval(
  () => { console.log(new Date())},
  1000
);
*/

// Demo: Stop Saying Hello after 8s
/*
const intervalId = setInterval(
  () => { console.log("Hello")},
  2000
);
setTimeout(() => clearInterval(intervalId), 8000);
*/

// Closures Demo

function foo (a) {
  let ins = "I'm local";

  return function bar (b) {
    console.log(ins, a, b)
  }
}

// Demo: What? Loud is evolving!

function loudWith (logFn, fn) {
  return (...args) => {
    logFn(`Calling ${fn.name}`);
    const returnValue = fn(...args);
    logFn(`Called ${fn.name} & returned ${returnValue}`);
    return returnValue;
  }
}

// Demo: Timing with setTimeout
// Exercise: Ending on a Callback

function timer (startTime, onDone = () => {}) {
  let count = startTime;
  const decrementer = () => {
    count -= 1;
    console.log(count);

    if (count <=  0) {
      clearInterval(intervalId);
      onDone();
    }
  };
  const intervalId = setInterval(
    () => {
      // console.dir(decrementer);
      decrementer();
    },
    1000);
}

// Demo: Create once Which Only Allows Its Callback to Be Called Once

function once (fn) {
  let firstReturn;
  return (...args) => {
    if (firstReturn === undefined) {
      firstReturn = fn(...args);
    }
    return firstReturn;
  }
}

// usage:
const addOnce = once(add);









/* */
