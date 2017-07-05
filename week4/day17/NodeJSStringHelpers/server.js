// net is a built-in Node.js library that helps us use TCP/HTTP to handle
// request networks

const net = require('net');

// the server will be contineously listening to requests on the socket (port
// # + ip address). You can think of the server an infinite loop that is
// always waiting for new requests. When a new piece of data comes in the
// server is going to execute the function that you give as a callback for
// `socket.on('data', ...)`
const server = net.createServer((socket) => {

  // 'connection' listener
  console.log('client connected');

  socket.on('ainkaran', (data) => {
    socket.write(`Hello ${data}!`)
  });

  socket.on('end', () => {
    console.log('client disconnected');
  });

  c.write('Hello\r\n');
  c.pipe(c);


  socket.on("data", function(data) {
    console.log(`data received ${data}`);

    // if you want to send a response back then you can use:
    socket.write('Thanks for sending us the data');
  });




  socket.on('close', function() {
    console.log('Client is no longer communicating')

  });

});

server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('Server is listening on port 3000');
});




//
//
const net = require('net');
const server = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});
server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('server bound');
});
