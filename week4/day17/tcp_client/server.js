// net is a built-in Node.js library that helps us use TCP/HTTP to handle
// request networks
const net = require('net');

const server = net.createServer(function(socket){
  // the server will be contineously listening to requests on the socket (port
  // # + ip address). You can think of the server an infinite loop that is
  // always waiting for new requests. When a new piece of data comes in the
  // server is going to execute the function that you give as a callback for
  // `socket.on('data', ...)`
  socket.on("data", function(data) {
    console.log(`data received ${data}`);

    // if you want to send a response back then you can use:
    socket.write('Thanks for sending us the data');
  });
});

console.log("Server is running and listining on port 5000");
// the above defines the server but doesn't run it, to run the server you do:
server.listen(5000, "127.0.0.1");

// the first argument of listen is the port number and the second argument
// is the IP address. We can use any non-used port number.
