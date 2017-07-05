// PROMISES

// When creating a promise, use the Promise constructor
// and pass it a callback (named executor) that takes
// two functions as arguments: resolve & reject.
new Promise(function (resolve, reject) {
  if (false) {
    reject(new Error('Oops!'));
  }

  const resolveValue = 'It worked!';
  // To "return" a value from promise, call it
  // the resolve function with that value as its argument.
  // This is the resolved value of a promise.
  resolve(resolveValue);
});

// DEMO: Flipping Coins
// This is a typical pattern to use with asynchronous functions
// We return a promise and inside its executor (the callback)
// we handle the asynchronous such as making a web request or reading file
// then we resolve with value that we get back from the asynchronous
// operation
/*
  function flipCoin () {
    return new Promise((resolve, reject) => {
      resolve(['heads', 'tails'][Math.floor(Math.random() * 2)])
    });
  }
  // 👇 would be version of 👆 written with a traditional callback
  function flipCoinWithCallback (cb) {
    cb(['heads', 'tails'][Math.floor(Math.random() * 2)]);
  }
  // usage:
  flipCoinWithCallback(function (value) { console.log(value) })
*/
// EXERCISE: Roll Die

function rollDie (faces) {
  // The executor callback is declared inside of rollDie
  // meaning that it will have access to all its variables (its scope)
  // for its entire life. This is the closure.
  return new Promise((resolve, reject) => {
    resolve(Math.ceil(Math.random() * faces));
  });
}

function random (begin, end) {
  return Math.floor(Math.random() * (end - begin)) + begin;
}

function flipCoin () {
  return new Promise((resolve, reject) => {
    // A promise can only resolve or reject once
    // whichever is called first will give the promise
    // its final value
    setTimeout(() => {
      resolve('heads');
    }, random(1000, 4000));

    setTimeout(() => {
      resolve('tails');
    }, random(1000, 4000));

    setTimeout(() => {
      reject('Coin thrown too far!');
    }, 3000);
  });
}

// Using a Promise:

// To get the resolved value of a promise, use the .then method on a promise
// object. It takes a callback that is called with the resolved value.
// .then always returns allowing us to chain .then one after the other.
// The resolved value of subsequent thens will be the return value of
// the former then.

flipCoin()
  .then(function (resolvedValue) {
    // resolvedValue is the value passed to the resolve function
    // the promise executor (the coin flip)
    console.log(resolvedValue)
    return 10
  })
  .then(function (resolvedValue) {
    // in this case, the resolvedValue will be 10 or the value
    // returned in the prior then
    return new Promise ((resolve, reject) => {
      resolve("I'm done!");
    })
  }).
  then(function (resolvedValue) {
    // resolvedValue will be "I'm done"
  })

// DEMO: Create a delay function
/*
function delay (time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  })
}
*/

// EXERCISE: Upgrade delay
function delay (time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.info('time:', time, 'value:', value)
      resolve(value);
    }, time)
  })
}

// Promise Methods

// Promise.all
// We can use the .all method of the Promise constructor to
// run multiple promises in parallel. It take an array of
// values & promises. It resolves with an array where all
// the are promises inside have been resolved
/*
arr = [delay(5000, 5), 4, delay(10000, 3), 2, {a: 1}]
Promise.all(arr)
  .then(resolvedArr => console.info(resolvedArr))
  */
  // 👆 the above logs [5, 4, 3, 2, {a: 1}] after 10 000ms
  // which is the Promise that takes the longest time to resolve

// DEMO: Parallel vs. Sequential

function sequetialDemo () {
  delay(random(1000, 3000), 10)
    .then(() => delay(random(1000, 3000), 20))
    .then(() => delay(random(1000, 3000), 30))
    .then(() => delay(random(1000, 3000), 40))
    .then(() => delay(random(1000, 3000), 50))
    .then(() => console.info('Sequence Complete!'))
}

function parallelDemo () {
  const allPromises = [
    delay(random(1000, 3000), 10),
    delay(random(1000, 3000), 20),
    delay(random(1000, 3000), 30),
    delay(random(1000, 3000), 40),
    delay(random(1000, 3000), 50)
  ];

  Promise.all(allPromises)
    .then((resolvedValue) => console.info(resolvedValue));
;}

// DEMO: Race the Horses!

function raceDemo () {
  const allPromises = [
    delay(random(1000, 3000), 'Seabiscuit'),
    delay(random(1000, 3000), 'Star Blitz'),
    delay(random(1000, 3000), 'Rick & Morty'),
    delay(random(1000, 3000), 'Dasher'),
    delay(random(1000, 3000), 'Pied Piper')
  ];

  // Promise.race take an array of promises and resolves
  // the first promises that completes, then ignores the rest
  Promise.race(allPromises)
    .then((winner) => console.info(`${winner} won the race!`));
}

// Using fs.readFile

/*
fs.readFile('./index.html', function (err, data) {
  // this will log the contents of index.html to console When
  // run in node
  console.info(data.toString());
})
*/

// EXERCISE: ...






//
