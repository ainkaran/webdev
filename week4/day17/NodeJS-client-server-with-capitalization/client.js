// Node.js client / server with capitalization
// Write a server / client TCP application in Node.js that takes a name from the client and
// then sends back a greeting: “Hello Name”.
// Make sure that the name is capitalized.

// net is a built-in Node.js library that helps us use TCP/HTTP to handle
// request networks
const net = require('net');

const socket = new net.Socket();

// this tells the client that every time we receive data back we log the data
// to the console
socket.on('data', (data) => {
  console.log(`Data received from server: ${data}`);
  process.exit();
});

// We actually make the request in here
socket.connect(3000, "127.0.0.1", () => {
  socket.write('ainkaran');
});
