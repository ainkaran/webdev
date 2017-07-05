<!-- good morning 19s!!! -->

# Advanced JavaScript

## OOP

### objects

Objects are a data structure.

```js

const human = new Object();

human.name = "Jacob";
human.age = 38;

const human = {
  weight: 140,
  height: 168
};

const human = {
  hobbies: ["stock trade", "code", "workout"],
  dog: {
    name: "Summer",
    age: 2
  },
  // a function declare within an object or class is a method!
  run: function(speed) {
    console.log(`I am running ${ speed }km/h`);
  }
}

human.hobbies; // returns an array
for (let hobby of human.hobbies) {
  console.log(`One of my hobbies is: ${ hobby }`);
}

human.dog; // returns an object
for (let property in human.dog) {
  console.log(property); // log out the items on the left side
  console.log(human.dog[property]); // log out the items on the right hand side
}

human.run; // this does not execute my function, gets a reference to my function
// human.run(); // this will execute my function
human.run(15); // this will execute my function
```

### classes

blueprint of an instance of an object
cookie cutter, class describes an object.

constructor turns a class into an object

```js

class Cookie {
  constructor(sugar, flour) {
    // this is a question, where am i? who is calling me?
    this.sugar = sugar;
    this.flour = flour;
  }

  bake() {
    console.log(`baking a cookie with ${ this.sugar }!`);
    console.log(`what object is calling this bake method? ${ this }!`);
  }

  eat() {
    console.log("eating!");
  }
}

// this will trigger the constructor method
let cookie = new Cookie(10, 20);
let oreo = new Cookie(10, 20);
let oatmeal = new Cookie(10, 20);
oatmeal.bake();
let shortbread = new Cookie(10, 20);
cookie.sugar = 50;


```


### inheritance

darwin, evolution, family

```js

class Doggo {
  constructor(name, face) {
    this.name = name;
  }
}

class DoggoFighter extends Doggo {
  constructor(name, face, specialAbility) {
    super(name, face); // allows me to call the same method name from where i inherited.
    this.specialAbility = specialAbility;
  }
}

// test
let doggo = new Doggo("Timmy", "angry");
let doggoFighter = new DoggoFighter("Billy", "happy", "fly");
let doggoFighter = new DoggoFighter("Billy", "happy"); // i want it to fail

// `use strict`;
// modules if we want to spread this amoungst different files


```

### Exercise Review

check if keys exists
merge
get all the keys
get all the values
reverse the keys and values

```js

// this is definitely an object
const me = {
  name: "Jacob",
  age: 38
};

// this looks like a hash
const recurring = {
  "j": 1,
  "a": 1,
  "c": 1,
  "o": 1,
  "b": 1
};

// does the letter "o" exist in the recurring hash?
// is there a key with the string "o"???

// you have to go down the list and check each key to see if it matches the one we are looking for

function find(searchKey) {
  // let search = "o";
  // let found = false;

  for (let key in recurring) {
    if (searchKey === key) {
      return true;
      console.log("The key was found!");
    }
  }

  return false;
}
// the key was not found



```











<!--  -->
