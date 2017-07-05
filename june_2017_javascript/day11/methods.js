// JavaScript Object Notation
// JSON - is protocol for communication over the web

let human = new Object();
let human = {
  eyeColour: "brown",
  hairColour: "black",
  height: 168,
  age: 38,
  weight: 140,
  hobby: ["Rock Climbing", "Coding", "Read"],
  dog: {
    name: "Summer"
  },
  children: [
    { name: "Sienna" },
    { name: "Leah" },
    { name: "Aubrey" }
  ],
  jump: function(height){
    console.log(`I am jumping ${ height } feet!`);
    console.log(`What is this? ${this}`);
  },
  run: running,
  // : function, get rid of it... it will be implied
  duck() {
    console.log("Duck!!!");
  }
};

let dog = {
  run: running // pass by name
};

function running() {
  console.log("I am running...");
  console.log(this);
}

// testing - execute the method by adding ();
human.jump(2);
human.run();
human.duck();
dog.run(); // execute

// instance variables - are variables that belong to a specific instance of a class (ie. an object)




//
