// create a class
function Vector() {
  this.x = 0;
  this.y = 0;
  this.sum = function() {
    return this.x + this.y;
  }
}

// this is a way optimize our classes in the old school method, where the method will not be recreated for every instance, rather it will refer to single prototype method to draw from.
Vector.prototype.sum = function() {
  return this.x + this.y;
};

let vector = new Vector();
let vector1 = new Vector();
let vector2 = new Vector();

Vector.prototype.z = 0;

console.log(vector);
console.log(vector1);
console.log(vector2);

let vector3 = new Vector();
console.log(vector3);

// function prototype.

// let numbers = new Array();
// let human = new Object();

let vector = new Vector();
// getter
vector.x;
vector.y;
// setter
vector.x = 10;
vector.y = 20;
console.log( vector.sum());
