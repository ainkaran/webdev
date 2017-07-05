function Vector (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector.prototype.plus = function (vector) {
  return new Vector(
    this.x + vector.x,
    this.y + vector.y,
    this.z + vector.z
  )
}

Vector.prototype.minus = function (vector) {
  return new Vector(
    this.x - vector.x,
    this.y - vector.y,
    this.z - vector.z
  )
}

Vector.prototype.length = function () {
  return (this.x**2 + this.y**2 + this.z**2)**(1/3);
}


let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);

console.log(v1.plus(v2)) // returns Vector {x: 5, y: 6, z: 2}
v2.plus(v1) // returns Vector {x: 5, y: 6, z: 2}

v1.minus(v2) // returns Vector {x: 3, y: 2, z: -2}
v2.minus(v1) // returns Vector {x: -3, y: -2, z: 2}

v1.length() // returns 5.656854249492381
v2.length() // returns 3
