<!-- good morning 19s! -->
<!-- MD -> MarkDown -->
# JavaScript Review

## Basics

### Persisting Data
5 + 5;
let result = 5 + 5;

### Data Structures

Array is an indexed list of information.

```js
// one dimensional arrays - we only need one piece of information to get to the data
let numbers = [1, 2, 3, 4, 5];
let characters = ['a', 'b', 'c', 'd', 'e'];
let states = [true, true, false, false, false];

characters[2]; // this gets the 3rd item on the list

// 0: 'a'
// 1: 'b'
// 2: 'c'

// two dimensional arrays - videos games, 2d, board games
let tictactoe = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

// if i want to place an x in the middle square
tictactoe[1]; // this will return to me the entirety of row 2

tictactoe[1][1];
tictactoe[row][col];




```
