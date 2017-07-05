const net = require('net');

const socket = net.Socket();

// this tells the client that every time we receive data back we log the data
// to the console
socket.on("data", function(data){
  console.log(`data received from server ${data}`);
  process.exit();
});

// We actually make the request in here
socket.connect(5000, "127.0.0.1", function(){
  socket.write('Hello from the client!');
});
