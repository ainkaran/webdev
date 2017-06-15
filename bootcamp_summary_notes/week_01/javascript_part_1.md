# Introduction to Javascript - Part 1
Javascript is the language of the web. It's the language used on the HTML pages to make them dynamic. It can also be used on the server side using `Node.js` technology.
## Including Javascript on a web page
You can include Javascript on a webpage using the `<script>` tag as in:
```html
<html>
  <head>
    <script>
      // Inline javascript
    </script>

    <script src="external_javascript.js"></script>
  </head>
  <body>
    …
  </body>
</html>
```
You can then use Chrome developer console to practice Javascript and you can use online websites such as [http://repl.it](http://repl.it) as well.

## Comments
To add a comment in javascript put `//` at the beginning of the line:
```javascript
// This is a comment
```
## Numbers in Javascript
Numbers in Javascript are all floating points so `1/2` in Javascript will give you `0.5`. The standard operations are available: `+`, `-`, `*`, `/` and `%`.

## Strings in Javascript
Strings in Javascript can be instantiated with single quotes, double quotes or backticks:
```javascript
"This is a string"
'So is this'
`And don't forget this!`
```
Strings can be formed from text and expressions. This is string interpolation.  Only strings created with backticks can be used with interpolation.

```javascript
`There are ${6 + 6} eggs.`
`G.M. has killed ${1/0} characters.`
`${/* code */} ${/* more code */}`
```
## Variables in Javascript
When you define a variable in Javascript that you don't expect to change then it's best to use `const` for it as in:
```js
const a = 1;
const b = "Hello";
```
And when you expect the variable to change, you can define it using the `let` keyword as in:
```javascript
let a = 1;
a = a + 1;
let b = "Hello";
b += " World!";
```
Note the following:
- No need to specify the type of the variable in Javascript.
- Make sure to use the `let` keyword. It will work without it but may cause you some unexpected behaviour as variables defined without the `let` keyword will be global variables.
- Remember to put a semicolon `;` at the end of the statement. This apply to all Javascript lines.

In versions previous to ES6, it was very common to use `var` in place of `let` and `const`. Although you can still use it in ES6, we encourage you to avoid using `var` all together if you're using ES6.

## Simple Web Page Interaction
There are few ways to interact in a simple fashion with web pages as in:
### Using `console`
You can use `console.log` to print something to the browsers console:
```javascript
console.log("Hello World");
```
### Using `alert`
You can use `alert` function to open up a pop up window with text to the user:
```javascript
alert("Welcome to my website");
```
### Using `prompt`
You can use `prompt` function to capture input from the user:
```javascript
let name = prompt("What is your name?");
```

### Using `confirm`
You can use `confirm` to open up a window with `ok` & `cancel` button that will give you true and false whether they click `ok` or `cancel`:
```javascript
let enter = confirm("Are you sure?");

if (enter) {
  // execute code in here
}
```

## True & False
In Javascript there is the concept of `true` and `false`. You also have access to the standard boolean operators: `>`, `<`,   `==`, `!=`, `<=`, `>=`, `&&`, `||`, and `!`.

## Conditionals
You can make use of the `true` and `false` with the `if` and `else` statements to control the flow of your application. The syntax looks like this:
```javascript
if (a) {
  // ..
} else if (b) {
  // ...
} else {
  // ...
}
```
Note that Javascript treats everything as `truthy` meaning that it will evaluate as true within the `if` and `else if` statements except for certain values that are considered `falsey` which are: `undefined`, `null`, `NaN`, `0`, `""` (empty string), and `false`, of course. For example:
```javascript
if(1) {
  console.log("This will print");
}
if(0) {
  console.log("This will not print");
}
```

## let, const, var

```javascript
let me = 'go';  // globally scoped
var i = 'able'; // globally scoped
```
Global variables defined with let will not be added as properties on the global window object like those defined with var.

```javascript
console.log(window.me); // undefined
console.log(window.i); // 'able'
```
Redeclaration:  var will let you re-declare the same variable in the same scope. On the other hand, let will not:

```javascript
let me = 'foo';
let me = 'bar'; // SyntaxError: Identifier 'me' has already been declared

var me = 'foo';
var me = 'bar'; // No problem, `me` is replaced.
```
## Loops
You can use loops in Javascript as in most programming languages to execute a piece of code a certin number of times.

### While Loop
You can write a while loop in Javascript as follows:
```javascript
while (condition) {
  // body
}
```
Note that brackets, round and curly, are  required.

### For Loops
You can use a `for` loop in Javascript as follows:
```javascript
for (initializer; condition; increment) {
  // ...
}
```
For instance you can write:
```js
for (let i = 1; i < 10; i += 1) {
  console.log(i);
}
```

#### Post vs. Pre Increment or Decrement
In Javascript there are two shorthands for doing increments and decrements. Either by by putting `++` or `--` after or before the variable name as in:
```javascript
let a = 1;
a++; // a is now 2
++a; // a is now 3
```
The difference between the two is the time of return, as in this example:
```javascript
let a = 1;
b = a++;
// b is 1 and a is 2
let a = 1;
b = ++a;
// b is 2 and a is 2
```
As you note if you put the `++` sign before the variable name, it increments it first and then returns its value. If you put the `++` after the variable name, it returns the current value of the variable and increments it afterward.
