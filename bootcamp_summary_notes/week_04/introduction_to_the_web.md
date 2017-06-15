# Introduction to the Web
The web is based on many layers of technologies that use protocols to establish communications between the different machines.
## Models
There are two primary models to look at networking protocols and there are: OSI and TCP/IP.
Layers per OSI model: Physical > Data Link > Network > Transport > Session > Presentation > Application
Layers per TCP/IP model: Network Interface > Network > Transpost > Application

There are many protocol in each layer. We will examine a few of them that are most relevant to web applications. We will be looking at things from the TCP/IP model.

## Network Interface Layer
This layer is mainly concerned of transforming the frames from your computer that are essentially a series of ones and zeros into a signal of some sort that can be transmitted over a medium. For instance it may transfer the frames into an electrical signal that goes over a wire or a radio wave signal that travels through the air.

An example protocol at this layer is the Ethernet protocol.

## Network Layer
This layer is mainly concerned about the mechanism of reaching remote machines. A popular example protocol is the IP protocol which powered the web. IPs are unique identifiers that identify a remote machine so two machines can communicate with each others.
### IPv4
The version 4 of IP has been around for a long time and it's a way to give an address to a machine composed of four sections, each composed of 8 bits. Consequently, we can only assign a maximum of about 4.3 billion IP addresses.

IPs are used by the computer and router in order to direct frames over the Internet to reach from a machine to a machine, mainly from a client to a server.
### IPv6
IPv6 was introduced to solve the problem of running out of available IPs to assign. It uses eight groups of four hexadecimal digits so it can support many more IP addresses than IPv4.
### DNS
Because remembering and typing IPs can be cumbersome, a system exists called DNS which stands for Domain Name System whose main function is to translate a domain name (such as `codecore.ca`) to an IP address such as `23.226.230.108`. There are many domain registrars that help us assign domain names to IP addresses. With DNS you can set `A` records to assign a domain name to IP addresses. You can also assign `MX` records in order to communicate with mail servers.
### ICMP
ICMP stands for Internet Control Message Protocol which is a protocol at the network layer which is used mainly to check the status of a networking device such as routers. It's used by programs like `ping` to test the reachability of a specific machine or website.

## Transport Layer
Transport layer is concerned about the mechanism where chunks of data are sent received and error checked. There are two primary protocols that are used for the transport layer and those are the `TCP` protocol and the `UDP` protocol.
### TCP
TCP protocol is a reliable, ordered and connection based protocol. It uses and handshake mechanism to ensure that data is transmitted and received correctly. It's used in situations where you want to make sure that data is received reliably at the other end. TCP utilizes ports which are 8 bit numbers to know the apps that are making the TCP request. Only one application can be listening on a given port. TCP powers many of the protocols like HTTP and SSH.
### UDP
UDP protocol is similar to the TCP protocol except that it doesn't require a handshake so it's less reliable and packet could be received in a non-ordered fashion. It has less overhead than TCP so it's used in situations where speed matters such as video and audio conversations over the internet.

## Application Layer
This layer is where applications make use of the protocol stack in the other layers to achieve its task. An example protocol here is the `HTTP` protocol that uses `TCP` and `IP` to power the web.

### HTTP
The HTTP protocol is what power most of the web these days. It depends on `TCP` and `IP` to work. HTTP has a lot of specifications and details but here are the main things that we will be using to build web applications:

#### URL
URL is what's used to identify the host and port number. URL looks like this: `http://mydomain.com:8080/hello`. In many circumstances you don't need to specify the ports as the detail port will be `80`.

#### VERB
HTTP verbs are used in some standards to route the application correctly. We will be using it as we implement the `REST` architecture. There are many available verbs. We will be using those ones: `GET`, `POST`, `PATCH`, `PUT` and `DELETE`

#### Response Codes
HTTP returns a number that is the response code whether the request was successful, rejected or the server threw an error. There are also many codes but we will primarily use: 200: success, 500: server error, 404: not found, 403/401: not authorized and 301: redirect

### HTTP Servers
HTTP servers work by listing on a specific TCP port. You can think of them like an infinite loop that keeps listening for new incoming data for that port.

## Node.js
Node.js is a Javascript runtime that enables us to run Javascript code outside the browser such as the terminal program.

### Installing NVM on macOS

To install `node.js`, its best to use `nvm` (Node Version Manager) which enables you to have multiple `node.js` versions on your machine. Before beginning, remove previous `node.js` installations and then install `nvm`:

```sh
brew uninstall node

brew update

brew install nvm
```

### Installing NVM on Linux

It is recommended that you remove previous installations of `node.js` before continuing.

To install NVM, run the following command:

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

Verify your installation by running:

```sh
command -v nvm
```
Which should output `nvm`.

If you encounter problems during the installation, please visit [the official Github repo](https://github.com/creationix/nvm#installation) for a much more detailed guide.

### Installing Node with NVM

Once `nvm` is installed, install `node.js` by doing the following:

```
nvm install 7
```

Look at the text that appears on the screen. It may give further instructions. Once you're done, restart your terminal and run `node -v` to verify the installation. It should display the version of `node.js` that was just installed.

Run the command `node` to open a Javascript REPL like Ruby's IRB.

This will install the latest version of `node.js` 7.

You can also write a file such as `main.js` and then run the file by typing:
```js
node main.js
```
In the terminal after navigating to the folder that contains `main.js` file.

### Node.js Modules

You can use modules to use and share libraries of code in Node.js. There are many built-in modules you can simple use by using `require`. Examples of such modules include `net`, `http`, `url` and `readline`. Here is an sample code:

```js
const net = require("net");
```

You will see more examples on how to use them in the upcoming sections.

You can also write your own modules and share them using `module.exports`. For instance you can write a file `say_hi.js`that looks like:

```js
function sayHi() {
  console.log("Hi!");
}

module.exports = sayHi;
```

Then write another file `main.js` in the same folder that looks like:

```js
const hi = require('./say_hi.js');

hi();
```

This way you shared code from `say_hi.js` to the `main.js` file.

### Taking input from the user
You can use the `readline` module to take input from the user as in:

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name?', function(name){
  console.log(`Hello ${name}`);
  process.exit();
});
```

In the above code you use `require` to get access to the `readline` module then you use the `createInterface` method to define the input about output which is in this case `stdin` and `stdout` which are the standard input and output through the terminal.

BTW, note that `process` is a global object that gives you access to the currently running process of Node.js. It has many methods which you can find more about here: https://nodejs.org/api/process.html

### Using Node.js with TCP
We can use Node.js to build a simple TCP application as in:

```javascript
const net = require("net");

const server = net.createServer(function (socket){
  socket.on("data", function(data){
    console.log("Data received on server: " + data);
    socket.write("Roger, " + data);
  });
});

server.listen(5000, "127.0.0.1");
```
This enables us to build a server that listens on port `5000` and IP address `127.0.0.1`.

We can build a client application with Node.js as well to connect to that server:

```javascript
const net = require("net");

const client = new net.Socket();

client.on("data", function(data){
  console.log("Data Received from server: " + data);
});

client.connect(5000, "127.0.0.1", function(){
  client.write("Tam");
});
```
Make sure that the server code is running within a tab in your terminal and open another terminal tab and run the client and you will see the connection and display between the client and server.

You can find out more about the `net` module here: https://nodejs.org/api/net.html

### Using Node.js HTTP module

```js
const http = require('http');

const server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`<!DOCTYPE html>
                  <html>
                  <head>
                    <title>My first web server</title>
                  </head>
                  <body>
                    <h1>Hello World!</h1>
                  </body>
                  </html>`);
  response.end();
});

server.listen(4000);
console.log("Server is listening on port 4000");
```

After that visit `http://localhost:4000`

You can also connect to the server by using `curl` in your terminal:

```
curl http://localhost:4000
```

You can find out more about the HTTP module here: https://nodejs.org/api/http.html

### HTTP GET parameters
You can pass GET parameters by adding the after a `?` in the url and using key/value sets separated by `=` sign. Here is an example:
`http://localhost:4000/?name=john&age=10`

In the above, you can manually parse the parameters if you'd like which you can get access to from `request.url` object property.

You can also use the `url` module to parse the url parameters as in:

```js
const url  = require("url");

const server = http.createServer(function(request, response) {
  // params will be a JS object with
  const params = url.parse(request.url, true).query;
  // ...

```

In the above example if the url looks like `http://localhost:4000/?name=john&age=10`. The `params` object will look like `{ name: 'john', age: '10' }`
