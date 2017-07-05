/*
Question 3: Digit Product Sequence
A digit product sequence is a type of sequence where the next number in the sequence is calculated by adding the product of each digit of the number and the number.

For example:
1, 2, 4, 8, 16, 22, 26, 38, 62

The above are the first 9 numbers of the sequence.

Write a function, digitProduct, that takes a number, n, as an argument and calculates the nth number in the sequence.

digitProduct(3) // returns 4
digitProduct(6) // returns 22
digitProduct(9) // returns 62

Implement it iteratively
Implement it recursively
Benchmark the results

*/

const digitProduct = function(n) {

  let result = 0;
  let prev = 0;
  for(let i = 0; i < n; i++) {

    if(i === 0) {

      result = 1;
      prev = result;

    }
    else {

      let newArray = [];
      newArray.push(i);
      if(newArray.length < 4) {

        result = (newArray[i] * 1) + i;
        prev = result;
      }
      else {

        splitedNumber = newArray[i].split();
        prev = splitedNumber[0];
        for(let j = 1; j < splitedNumber.length; j++) {
          result = (prev * splitedNumber[i]) + splitedNumber[i]

        }

      }

    }

  }
}


digitProduct(3) // returns 4
digitProduct(6) // returns 22
digitProduct(9) // returns 62
