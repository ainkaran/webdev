function numberSeq(begin = -10, step = 1) {
  let counter = begin - step;
  return () => counter += step;
}


const numbers = numberSeq();
numbers() // returns 0
numbers() // returns 1
numbers() // returns 2
numbers() // returns 3
numbers() // returns 4
