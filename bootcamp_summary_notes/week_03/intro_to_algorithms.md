# Introduction to Algorithms Summary Notes

## What is an algorithm
An algorithm is a step by step process to achieve a specific task.

## Computing vs. Coding
In many scenarios problems can be solved without necessarily having to write code, you may call that computing or problem solving. When you convert the solution to code, then you're coding. For example, if you're sorting an array, you can conceptually come up with an algorithms to sort it. You can convert that algorithm to coding after.

## Stack vs. Queue
Stack is a data structure in which the first element that you put in will be the last element you take out. Think of it like a stack of dishes.

A queue is a data structure in which the first element you put in will be the first element you take out. It's similar to the line at the supermarket.

## Function calling stack
Programming languages put function calls internally on a stack
```js
function a() {
  b();
  console.log("I'm in function a");
}

function b() {
  c();
  console.log("I'm in function b");
}

function c() {
  console.log("I'm in function c");
}

a();
```
In the example above after you call `a`, you will note that `a` calls `b` and `b` calls `c`. At the end of it the stack will look like this:
```
 ----------
|    c     |
 ----------
|    b     |
 ----------
|    a     |
 ----------
```
Note from the diagram above that `c` is at the top of the stack so this is why you will see the printout `I'm in function c` first. The last element in `c` will be the first one to get out which is a property of stacks. This feature works well but how functions are handled by programming languages.

## Recursion
We say we're doing recursion when when have a function that calls itself. This puts the method call on the stack which calls another method on the stack and so on. The key thing to keep in mind when using recursion is that it must stop at some point so we must have a condition that stops the recursion. Here is an example of a recursive method that returns the sum of element in an array:
```js
function sum(array) {
  if(array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
}
```
Or using ES6 Spread syntax:
```js
[a, ...rest] = [1,2,3,4];
console.log(a); // 1
console.log(rest); // [2,3,4]
[a, ...rest] = [];
console.log(a); // undefined
console.log(rest); // []
```
You can rewrite the `sum` function as:
```js
function sum([first,...rest]) {
  if(first === undefined) {
    return 0;
  } else {
    return first + sum(rest);
  }
}
```
The above syntax is similar to patterns matching syntax that see in many functional programming languages.

So if you're summing an array `[1,2,3,4]`, you can think of it like the method above will do the following steps:
```ruby
sum([1,2,3,4])
1 + sum([2,3,4])
1 + 2 + sum([3,4])
1 + 2 + 3 + sum([4])
1 + 2 + 3 + 4 + sum([])
1 + 2 + 3 + 4 + 0
```
### Watch the stack level
You have a limited amount of stack memory so make sure to watch out for the stack level. Some languages have what's called tail call optimization or TCO which enables you to use a large amount of data or calculate large numbers without blowing up the stack. Ruby doesn't have that feature so the code above may give you a `stack level too deep` exception if you try to sum an array of `10000` elements or so.

## Benchmarking
There are many bench marking tools out there, the simpest way to benchmark is to use the built-in `console.time` function as follows:
```js
let i, output = "";

// Start the timer now
console.time("concatenating strings");

for (i = 1; i <= 1e7; i++) {
  output += i;
}

// Print the total time it took to perform the operation since starting
console.timeEnd("concatenating strings");
```

Please note that the above is depending on so many factors such as the operating system, the available memory, processor speed, browser..etc.

Consequently, benchmarking as in the example above so be used to get a general idea about the execution speed of a piece of code keeping in mind that it will be different on the user's machine.

## Big O Notation
Big O notation enables us to estimate the growth of an algorithm as the number of input grows.

For instance in the code below:
```javascript
function square(n) {
  return n * n;
}
```
The method `square` has exactly one operation when n is 1 or n is a 100. The method doesn't increase the number of operation as the number of input increases. We say that this method is `O(1)`
Looking at this code here:
```js
const awesomeArray = [1,2,3,4,5,6,7];

awesomeArray.forEach(function(number){
  console.log(number);
});
```
The code above prints the numbers in an array. We notice that if we double the number of element in the array the number of operations we're doing doubles as well. So the number of operations grows linearly with the number of input. We say the code above has an `O(n)`
Looking at this code:
```js
const awesomeArray = [1, 2, 3];

for(let number of awesomeArray) {
  for(let numberAgain of awesomeArray) {
    console.log(`${number} / ${numberAgain}`);
  }
}
```
We notice in the code above that the number of operations in crease in an exponential fashion as we increase the number of input. So if the array size is 3 we notice that we will have 9 `puts` calls. If the array size is 6 we notice that we will have 64 `puts` calls. We say that the code above has `O(n^2)`.

You will encounter other forms of Big O notations such as `O(log(n))` for algorithms like the binary search. Some search algorithms have `O(nlog(n))`. The travelling salesman problem have `O(n!)`.

## Linear vs. Binary Search
If you want to search for an element in an array you have two primary ways:
- Linear Search
- Binary Search

### Linear Search
With Linear search, you loop through every element in the array checking whether the element you're searching for exists in the array or not. If it exists you just return true otherwise you return false. This algorithm has `O(n)` whether array is sorted or not.

### Binary Search
With Binary search, you look at the middle element and then compare it with the element you're searching for. If the element is the same you return true, otherwise you search either with subarray of element greater than the mid element (if the element you're searching for is more than the mid element). If the element you're searching for is less than the middle element then you search in the sub array that is from the beginning of the array till the mid element. This way you keep cutting the problem in half until you find a solution. This algorithm has `O(log(n))`
