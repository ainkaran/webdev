
const after = function(tries, callback) {

  return function(...args) {
    if(tries >0) {
      tries -= 1;
      return
    }
    return callback(...args);
  }

}

const add = function (a, b) {return a+b};

const addAfter3Tries = after(3, add);
addAfter3Tries(4,5) // returns undefined
addAfter3Tries(4,2) // returns undefined
addAfter3Tries(1,6) // returns undefined
addAfter3Tries(5,5) // returns 10 (add is only allowed to return now)
addAfter3Tries(1,5) // returns 6



const before = function(tries, callback) {

  return function (...args) {
    if(tries > 0) {
      tries -= 1;
      return callback(...args);
    }
  }
}


const add = function (a, b) {return a+b};

const only3Times = before(3, add);
only3Times(4,5) // returns 9
only3Times(4,2) // returns 6
only3Times(1,6) // returns 7
only3Times(5,5) // returns undefined (no more calls to add allowed)
only3Times(9,9) // returns undefined
