// `require` in Node.js is used to `import` a module to be used in here. If you
// are using a built-in module, then you can just put the module name. If you
// are importing a file then you will have to put the path of the file.
const greeting = require('./sayHi.js');

console.log(greeting('john'));
