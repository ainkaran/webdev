// objects - fundamental building blocks of code.
let human = new Object();
let human = {
  eyeColour: "brown",
  hairColour: "black",
  height: 168,
  age: 38,
  weight: 140,
  hobby: "Rock Climbing"
};

// dot operator to add properties
human.skill = "javascript"; // setter
human.skill; // getter

human["weight"]; // get a specific property, search
human["weight"] = 135; // set a specific property, search

human.speed = 38;
// prompt them for a property
let newProperty = "speed";
human[newProperty] = 15;
// human["speed"];

let numbers = [3.14, 42, 24601];
// what is the sum of all those numbers
let total = 0;
for (let number of numbers) {
  console.log(number);
  total += number;
}

//

for (let property in human) {
  console.log(property);
  human[property]; // the value associated with a property
}





//
