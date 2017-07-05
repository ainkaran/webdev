//First In Last Out
/*
Stack is, first element added into a stack (an array type) will be retrieved last
last element added into a stack will be retrieved first
*/

class Stack {

  constructor(arr) {
    this.arr = arr;
  }
  
}

Stack.prototype.add = function(e) {

  this.arr.push(e);
  // console.log('test');

}

Stack.prototype.remove = function() {

  this.arr.pop();

}

//let newArray = [];
let newArray = new Array();
let stack = new Stack(newArray);

//console.log(`newArray.push('a'): ${newArray.push('a')}`) // returns true

stack.add('a');
stack.add('b');
stack.add('c');

stack.remove();

console.log(Object.values(stack)[0])

// console.log(Array.prototype.slice.apply(stack[arr]))

// console.log(`stack.add('a'): ${stack.add('a')}`) // returns true

// console.log(`stack.remove(): ${stack.remove()}`) // returns true
