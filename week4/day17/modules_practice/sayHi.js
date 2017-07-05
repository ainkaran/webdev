function hi(name) {
  return `Hello ${name}`;
}

// If you write a Node.js module and you want to share it with other files you
// will need to tell Node.js what to `share` by exporting that. You can export
// any type of construct in Node.js such as: objects, function, strings..etc
// The key thing is that when you `import` this module from another file you
// have to know what is being exported so you use it correctly.
module.exports = hi;
