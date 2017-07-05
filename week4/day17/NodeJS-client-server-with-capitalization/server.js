// Node.js client / server with capitalization
// Write a server / client TCP application in Node.js that takes a name from the client and
// then sends back a greeting: “Hello Name”.
// Make sure that the name is capitalized.

// net is a built-in Node.js library that helps us use TCP/HTTP to handle
// request networks
const net = require('net');

const server = net.createServer((socket) => {
  // the server will be contineously listening to requests on the socket (port
  // # + ip address). You can think of the server an infinite loop that is
  // always waiting for new requests. When a new piece of data comes in the
  // server is going to execute the function that you give as a callback for
  // `socket.on('data', ...)`

  // 'connection' listener
  console.log('Client connected');

  socket.on('data', (data) => {

    console.log(`Data received from client: ${data}`);


    // if you want to send a response back then you can use:
    let name = `${data}`.charAt(0).toUpperCase() + `${data}`.slice(1);
    socket.write(`Hello ${name}`);
    // socket.pipe(socket);
  });

  // c.on('end', () => {
  //   console.log('client disconnected');
  // });

});

// server.on('error', (err) => {
//   throw err;
// });

// console.log("Server is running and listining on port 3000");
// the above defines the server but doesn't run it, to run the server you do:
// server.listen(3000, "127.0.0.1");


server.listen(3000, () => {
  console.log('Server is running and listining on port 3000"');
});

// the first argument of listen is the port number and the second argument
// is the IP address. We can use any non-used port number.
