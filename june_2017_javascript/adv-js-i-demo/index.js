/* Property Shorthand */
let a = 1;
let b = 2;
let c = 3;

/* let a = 1,
       b = 2,
       c = 3; */

// With this syntax sugar
let nonSyntaxSugar = {a: a, b: b, c: c};
// With syntax sugar
let syntaxSugar = {a, b, c};

/* Methods */

const bark = function () { return "Woof!" };

let dog = { bark: bark };
let pup = { bark };

/* Demo: Using Objects as Modules */

const ArrayExtras = {
  /* last: function () { ... } */
  /* 👇 shortcut of 👆 */
  last (arr) {
    return arr[arr.length - 1];
  },
  first (arr) {
    return arr[0];
  },
  take (arr, n) {
    return arr.slice(0, n);
  },
  drop (arr, n) {
    return arr.slice(n);
  },
  /*
  argument `arr` is an array of shape
  [['a', 1], ['b', 1], ['c', 1]]
  */
  toObject(arr) {
    let obj = {};
    for (let val of arr) {
      obj[val[0]] = val[1];
    }
    return obj;
  }
}

/* usage */
/* ArrayExtras.last([1,2,3])
   ArrayExtras.take([1,2,3,4,5], 2)
   */

/* this */

const can = {
  a: 1, b: 2, c: 3,
  touchThis () { return this; }
}

const cant = {
  i: 9, j: 10, k: 11,
  /* the this in touchThis from can,
     will not remember.
     when used inside of cant, it'll return
     cant instead */
  touchThis: can.touchThis
}

/* if the can.touchThis method is seperated
   into a function on its own. Its this will
   now refer to the Window object
   */
let thisAlone = can.touchThis

/* Demo: Counter */
/* Also, following exercise */

const Counter = {
  count: 0, step: 1, // initialize counter and step to zero
  set (n) { this.count = n },
  inc () { return this.count += this.step },
  dec () { return this.count -= this.step },
  now () { return this.count },
  setStep (step) { this.step = step },
  reset () {
    this.count = 0;
    this.step = 1;
  }
}

/*
const MrCounter = {
  set (n) { Counter.count = n },
  inc () { return Counter.count += 1 },
  dec () { return Counter.count -= 1 }
}
*/

/* copy an object */

let h = {a: 1, b: 2};

let g = h;
/* g is not copy of h, it's just a reference
to the object that h refers */

/* Object Assign */

let obj = {a: 1};
let src1 = {b: 2};
let src2 = {c: 3};

let mergedObject = Object.assign(obj, src1, src2, {j: 8});

/* creating a copy,
  make first argument a new object, {}
*/
let copyMergedObject = Object.assign({}, obj);

// What does the following return?
mergedObject === copyMergedObject

// Adding methods and props to ArrayExtras

Object.assign(ArrayExtras,
  {
    map () {},
    reduce () {}
  }
)

/* 👆 shortcut for 👇 */
/*
ArrayExtras.map = function () {};
ArrayExtras.reduce = function () {};
*/

/* Constructor Functions */
const Vector = function (x, y) {
  /* when called as a constructor,
  this is initially a empty {}
  */
  console.log(this);
  Object.assign(this, {x, y});
  /* 👆 alternative way to achieve 👇
  this.x = x;
  this.y = y;
  */
}

let v1 = new Vector(5,6);
let v2 = new Vector(5,6);

// What does this return?
v1 === v2

// When used as a contructor, a function returns
// an object built from the properties of this

let num = 1; let char = 'b'

/* What does this get? */
Object.getPrototypeOf(num)
/* And, this? */
Object.getPrototypeOf(char)

/* wat */
Object.getPrototypeOf(Object.getPrototypeOf(1))
Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(1)))

/* Demo: Implement Doggo Fight */

/* general constructor */
function Doggo (name) {
  this.name = name;
  /*
  this.bark = function () {
    return 'Woof!';
  }
  */
}

/* prototype methods below are shared by
all Doggo created with new Doggo()
*/
Doggo.prototype.bark = function () {
  return 'Woof!';
}

Doggo.prototype.sleep = function () {
  return 'ZZZzzzzz!';
}

function DoggoFighter (name, specialAbility) {
  this.name =  name;
  this.specialAbility = specialAbility;
}

/* class DoggoFigthter < Doggo
  👇 similar to ruby's 👆
  */

/* 👇 this is how DoggoFighter inherits from Doggo to
its prototype's properties & methods
*/
DoggoFighter.prototype = new Doggo();

/* we had a method for all DoggoFighter that only they can use */
DoggoFighter.prototype.fight = function (doggoFighter) {
  return `${[doggoFighter.name, this.name][Math.floor(Math.random() * 2)]} has won!`;
}

const drillBitDarel = new DoggoFighter('Drill Bit Darel', 'Drill!');
const lumberjackLaurence =  new DoggoFighter('Lumberjack Laurence', 'Chainsaw Chop');

/* bob can sleep and bark, but it can't fight */
const bob = new Doggo('Bob The Doggo')

// C in front to not conflict with constructor versions of Doggo Fight
class CDoggo {
  /* although classes look like objects, you do not
  need to seperate methods with commas */
  constructor (name) {
    this.name = name;
  }
  bark () {
    return 'Woof!';
  }
  sleep () {
    return 'ZZZzzzzz! *snore*'
  }
}

class CDoggoFighter extends CDoggo {
  constructor (name, specialAttack) {
    super(name); // super calls same named method in extended class
    // must be defined before using this
    this.specialAttack = specialAttack;
  }

  fight (doggoFighter) {
    return `${[doggoFighter.name, this.name][Math.floor(Math.random() * 2)]} has won!`;
  }
}

const fourFistsPhil = new CDoggoFighter('4 Fists Phil', 'Going Fucking Apeshit');
const paws = new CDoggoFighter('Paws', 'Fin-al Strike')












/* */
