//First In First Out
/*
Stack is, first element added into a stack (an array type) will be retrieved first
last element added into a stack will be retrieved last
*/

class Queue {

  constructor(arr) {
    this.arr = arr;
  }

}

Queue.prototype.add = function(e) {

  this.arr.push(e);
  // console.log('test');

}

Queue.prototype.remove = function() {

  this.arr.shift();

}

//let newArray = [];
let newArray = new Array();
let queue = new Queue(newArray);

//console.log(`newArray.push('a'): ${newArray.push('a')}`) // returns true

queue.add('a');
queue.add('b');
queue.add('c');
queue.add('d');

queue.remove();
queue.remove();

console.log(Object.values(queue)[0])
