const reduce = function([first, ...rest], callback) {

  if (rest.length === 0) {
    return first;
  }
  else {
    return callback(first, reduce(rest, callback));

  }

}


const plus = function (a, b) { return a + b };
const mult = function (a, b) { return a * b };
const multAndPlus = function (a, b, c) { return plus(mult(a,b), c) };

let arr = [1,2,3,4,5];

reduce(arr, plus); // returns 15
reduce(arr, mult); // returns 120
reduce(arr, multAndPlus); // returns 239


plus(1, 2)
        👇
    plus(3, 3) // first arg. is the result of last call, 3
            👇
        plus(6, 4) // first arg. is the result of last call, 6
                👇
            plus(10, 5) // first arg., result of last call, 10
                     👇
                     15 //Done! Returns 15


mult(1,2) = 2
  plus(2,1) = 3
    mult(3,3) = 9
      plus(9,2) = 11
        mult(11,4) = 44
          plus(12,5) = 17
            mult(4,5) = 20
              plus(20,)
