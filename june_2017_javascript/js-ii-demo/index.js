/* eslint-disable */
// FUNCTIONS

function add (a, b) {
  const total = a + b;
  // console.log('The total is:', total);
  return total;
}

// To use the function add, we have to call it with brackets.
add(1, 2);
add(add(5, 6), 9 - 10);
add();
add(9, 10, 8, 56);
// 👆 are valid ways to call the function add that we just wrote above
// when not called, functions can be assigned like any other value
const sum = add;
// in this example, sum can now be used as if it was add
sum(5, 5);

// EXERCISE
// Write a function, increment, that takes a number and adds 1 to it then
// returns it
const increment = function (number) {
  return number + 1;
};

// usage:
increment(2); // returns 3

// Write a function, insult, that takes a name then returns an insult with that
// name (e.g. 'Bob, you doofus!')
// Try returning a random insult whenever insult is called!

// Too avoid writing Math.ceil(Math.random() * n); everytime
// we want an random integer between 1 and n inclusive, we write
// function, random, that we can reuse later.
function random (n) {
  return Math.ceil(Math.random() * n);
}

function insult (name) {
  const pickInsult = random(3);
  if (pickInsult === 1) {
    return `${name}, you doofus!`;
  } else if (pickInsult === 2) {
    return `${name}'s mother was a hamster!'`;
  } else {
    return `${name}'s father smelt of elderberries!'`;
  }
}

// Write a function, repeat, that takes a string and a number then returns the
// string repeated number of times joined together into one string.
// You can't use .repeat of strings.

// PRO TIP: When trying to make sense of code, step through it mentally.
function repeat (str, number) {
  let newStr = '';
  for (let i = 0; i < number; i += 1) {
    newStr += str;
  }
  return newStr;
}

// ARRAYS

const names = [
  'Jon',
  'Daenerys',
  'Cersei'
];

names[0] // returns the first elemnt in the array `Jon`
names[names.length - 1] // returns the last element in the array `Cersei`
names.push('Robert') // adds to the end of the array mutating it

// EXERCISE
// Create an array, first, containing the elements "hello", 5, and 'a'. Then,
// change the 2nd element of first to 6.

const first = ["hello", 5, 'a'];
first[1] = 6;

// Create an array, second, containing the digits from 0 to 100. Then, compute
// the length of second.

const second = [];
for (let i = 0; i <= 100; i += 1) {
  // second[i] = i;
  second.push(i);
}
console.log('second:', second);

// Looping over arrays
// Regular for loop

let abc = ['a', 'b', 'c', 'd', 'e'];

for (let index = 0; index < abc.length; index += 1) {
  console.log(`${index}: ${abc[index]}`);
}

// Using the for .. of Looping
for (let letter of abc) {
  console.log('letter:', letter);
}

// EXERCISE

// Create an array containing the words "apple", "dog", "computer", "cup". Then,
// use a loop to log "[Word] has [length] characters." for each word.

/*
const words = ['apple', 'dog', 'computer', 'cup'];

// for (let i = 0; i < words.length; i += 1) {
//   console.log(`${words[i]} has ${words[i].length} characters`);
// }

for (let word of words) {
  console.log(`${word} has ${word.length} characters`);
}
*/

// Create an array containing 0, 5, 6, -12, and use a loop to compute the sum of
// its elements. Turn this into a function, sum, that takes an array and returns
// the sum.

const arrA = [0, 5, 6, -12];

function sumArr (numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log('total:', sumArr(arrA));

// Create a string "hello" and then use split to make an array of its characters.

// To split between all characters, make sure to call split with an
// empty string as an argument.
"hello".split('');

// Write a script that prompts for a sentence then alerts how many words are in
// that sentence

function askUser () {
  const sentence = prompt('Tell me something I don\'t know');

  // We'll define words as characters seperated by white spaces
  let wordCount = sentence.split(' ').length;
  // 👆 this is not a robust way to split. If I get multiple white spaces,
  // new line characters, tabs or any other white space character, it may
  // not split or it will do additional splits
  wordCount = sentence.split(/\s+/).length;
  // 👆 the above is much more reliable way to split. We use a
  // regular expression to match any type of white space character (the \s part) and
  // and any length of white space (the + part)
  alert(`Your sentence has ${wordCount} words`);
}


// OBJECTS

// unless a property is defined with brackets ([]), it must
// be created with special characters (e.g. spaces, -, ., ;, etc are not allowed)
const person = {
  firstName: 'Daenerys',
  ['last name']: 'Targaryen',
  titles: [
    'Queen of Meereen',
    'Khaleesi of the Great Grass Sea',
    'Queen of the Seven Kingdoms'
  ]
}

// with dot notation
person.firstName;
person.royalHouse = 'House Targaryen';

// with bracket notation
person['last name'];
person['Played by'] = 'Emilia Clarke';

// chaining dots
person.titles.push('Queen of the Andals and... yada-yada...');

// EXERCISES
// 1. Create an object me containing your name, age, and occupation.
// 2. Change your occupation to "javascript expert"
// 3. Add a "skills" property containing the array
// ['ruby', 'rails', 'javascript']

const me = {
  name: 'Steve',
  age: Infinity,
  occupation: 'Instructor & Developer'
}

me.occupation = 'Javascript Expert';
me['skills'] = ['ruby', 'rails', 'javascript'];

// PRO TIP: You can delete properties of objects however I would advise against it, because
// the javascript does a lot of things to greatly improve the performance of your
// code and the delete keyword on object is somethingt it can not optimize.
delete me.name
// It's usually best to assign 'null' to a property that you intend it to be
// deleted

// Write a function, wordLengths, that takes a sentence, and returns an object
// of all the words and their lengths.
// wordLengths("Hello world"); // { "Hello": 5, "world": 5 }

function words (str) {
  // the following splits on any grouping of non-word characters
  // meaning any character that is not from A-Z, a-z, 0-9, - or _.
  return str.split(/\W+/);
}

function wordLengths (str) {
  const dic = {};
  for (let word of words(str)) {
    dic[word.toLowerCase()] = word.length;
  }
  return dic;
}

// Looping over objects

let obj1 = {a: 1, b: 2, c: 3, d: 4};

for (let property in obj1) {
  console.log('property:', property, 'value:', obj1[property]);
}

// EXERCISE
// Write a function, clone, which takes an object and returns a copy of it.

function clone (obj) {
  const newObj = {};
  for (let property in obj) {
    newObj[property] = obj[property]
  }
  return console.log(newObj);
}










/* */
