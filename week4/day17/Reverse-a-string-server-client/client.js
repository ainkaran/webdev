/*
Reverse a string server / client

Write a TCP client and a server application in Node.js:

The client should take a string input from the user (e.g. "hello", "what is this?") and send it to the server.
The server should respond to the client with the reversed word.
(e.g. "hello" becomes "olleh", "what is this?" becomes "?siht si tahw")
The client should print the server response in the console.
*/


const net = require('net');

const socket = net.Socket();

// this tells the client that every time we receive data back we log the data
// to the console
socket.on('data', (data) => {
  console.log(`Data received from server: ${data}`);
  process.exit();
});

// We actually make the request in here
socket.connect(3000, "127.0.0.1", () => {

  let str = '1,2,3,4,5,6,7,8,9';
  socket.write(str);
});
