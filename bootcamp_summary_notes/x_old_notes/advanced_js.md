# Advanced Javascript - Summary Notes

## Using `this`
You can to access attributes in Javascript using the `this` keyword as in:
```js
var cookie = {
  sugar: 10,
  flour: 15,
  info: function(){
    console.log("this cookie has " + this.sugar + "g of sugar and " + this.flour + "g of flour");
  }
}
cookie.info();
```
In the example above the `info` function is able to access the `sugar` and `flour` attributes using `this`.

Note that `this` can get confusing at times such as when you have a nested function as in:
```js
var cookie = {
  sugar: 10,
  flour: 15,
  info: function(){
    console.log("this cookie has " + this.sugar + "g of sugar and " + this.flour + "g of flour");
    var innerFn = function(){
      // `this` in here is probably different than you think. In this case `this.sugar` will likely be `undefined`
      // because `this` references the `window` object if you run this Javascript code in a browser
      console.log(this.sugar);
    }
    innerFn();
  }
}
cookie.info();
```
In the example above `this` inside the `innerFn` references the global object instead of the `this` in the function which is nested with, the `info` function. There are two solutions for the situation above:

### Solution 1: Using variable
You can go around that problem by defining a variable outside the function as in:
```js
var cookie = {
  sugar: 10,
  flour: 15,
  info: function(){
    console.log("this cookie has " + this.sugar + "g of sugar and " + this.flour + "g of flour");
    var that = this;
    var innerFn = function(){
      console.log(that.sugar);
    }
    innerFn();
  }
}
cookie.info();
```

### Solution 2: using `bind`
We can change `this` within a function by binding it to an external object. You're most likely to bind it to `this` from the outside context as in:
```js
var cookie = {
  sugar: 10,
  flour: 15,
  info: function(){
    console.log("this cookie has " + this.sugar + "g of sugar and " + this.flour + "g of flour");
    var innerFn = function(){
      console.log(this.sugar);
    }.bind(this)
    innerFn();
  }
}
cookie.info();
```
In the example above `this` inside the `innerFn` is the same as `this` inside the `info` function because we used `bind` when we defined the `innerFn`.

### Solution 3: Using `call`
You can use `call` and pass `this` to it as in:
```js
var cookie = {
  sugar: 10,
  flour: 15,
  info: function(){
    console.log("this cookie has " + this.sugar + "g of sugar and " + this.flour + "g of flour");
    var innerFn = function(){
      console.log(this.sugar);
    };
    innerFn.call(this);
  }
}
cookie.info();
```
In the example above we invoked the `innerFn` and we passed `this` to it to change the default `this` inside that function.

## Higher Order Functions
Functions in Javascript are considered first-class citizens because you can define them as variables, pass them as variables and return them from functions. In languages like Ruby you will have to use other constructs of the language such as `Proc` to achieve similar outcome.

We give the name `higher order functions` to the functions that take one or more functions as an argument or a function that returns as another function. Here is an example:
```js
var applyOperation = function(number, operation) {
  console.log(operation(number));
}

var square = function(number) {
  return number * number;
}

applyOperation(3, square);
applyOperation(5, square);

var addTwo = function(number) {
  return number + 2;
}

applyOperation(3, addTwo);
applyOperation(5, addTwo);
```
In the examples above we passed functions `square` and `addTwo` as if they are numbers or strings.

## Anonymous Functions
We've been using function so far by defining a variable that references the function. In some scenarios when we're using higher order function we may want to pass a function directly without giving that function a name. We call such functions `anonymous`. Here is an example:
```js
var applyOperation = function(number, operation) {
  console.log(operation(number));
}

applyOperation(3, function(number){
  return number * number;
});
```
The above is a very common usage in Javascript. In a situation where you're less likely to need the function passed to `applyOperation` elsewhere, you can pass it an as anonymous function so it won't be accessible elsewhere.

## Using `forEach`
You can use `forEach` to loop through an array as in:
```js
[1,2,3].forEach(function(x){
  console.log(x);
});
```
Note that `forEach` is a higher-order function and we used it with an anonymous function above. Also, note that `forEach` is supported by modern browsers so if you want to support older browsers you may want to stick with using standard array iterations using a `for` loop as we've been doing.

## setTimeout
You can use `setTimeout` to execute a function after a certain number of milliseconds as in:
```js
setTimeout(function(){
  console.log("Hello World!");
  }, 1000);
```
The code above will log `Hello World!` after at least `1000` milliseconds.

## setInterval
You can use `setInterval` to execute a function over and over every certain number of milliseconds:
```js
setInterval(function(){
  console.log("Hello World!");
}, 1000);
```
The code above will log `Hello World!` to console every at least 1 second forever.

## clearInterval
In order to stop `setInterval` function from running you will need to use `clearInterval` as in:
```js
var intervalId = setInterval(function(){
  console.log("Hello World!");
}, 1000);

setTimeout(function(){
  clearInterval(intervalId);
}, 10000);
```
In the code above we clear the interval after 10 seconds which means you will see `Hello World!` printed once every second, ten times.

Note that `setTimeout` and `setInterval` are non-blocking which means that your javascript will continue to run and other things will execute which is important to keep your web page responsive while waiting for a function to execute. This is different from Ruby's `sleep` method that actually stops the execution of your program for x number seconds.

To understand how this works in Javascript, watch this video: [https://www.youtube.com/watch?v=8aGhZQkoFbQ](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

## Underscore.js
As you may have experienced, Javascript comes with only a few available functions and methods for built-in. In some applications you may need extra functions handy. One library to achieve that is Underscore: [http://underscorejs.com/](http://underscorejs.com/)  Explore the website for more details.

## Tidbits

### Creating Objects with `new`
You can write code in Javascript like:
```js
var Person = function() {  }
var tam    = new Person();
```
You can think of `Person` as a `class` although it's really just a function and `tam` is like an object created from that class.

Note that `this` takes another function in by being for the object to be created as in:
```js
var Person = function(name) {
  this.name = name;
}
var tam    = new Person("Tam");
console.log(tam.name);
```

### Function Declaration
You can define a function in a different way as in:
```js
function greetMe(){
  console.log("Hello!");
}
```
We mostly use the syntax we've been using so far as it re-enforces the fact that functions are first-class citizens in Javascript. Using this syntax has the advantage of the function being moved to top or `hoisted`. Here is an example:
```js
greetMe();
var greetMe = function() {
  console.log("Hello!");
}
```
In this code the first like `greetMe()` will throw an error: `greetMe is not a function(…)`.

If you rewrite the above as:
```js
greetMe();
function greetMe() {
  console.log("Hello!");
}
```
In the code above `greetMe` call on the first line will actually log `Hello!` to the console because the function definition is `hoisted` which means moved to the top.