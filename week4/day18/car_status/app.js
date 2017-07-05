// Assignment: [Lab] Car Status
/*
Build a web application with Express.js that has a page for users to enter the year of
their car and then upon submitting the form, they will get a page that
displays "future", "new", "old" or "very old" based on the year entered from the user.

Stretch I
Use switch & case statement instead of if & else.

Stretch II
Use a drop down list that is auto-populated with years from 2017 down to 1950.
*/


/*
GitHub commit comment:
Add install yarn, .gitignore, create project: yarn init, add packages, create app.js,
install nodemon & add start script, partials header & footer, install bodyParser,
create status form and functionalities
*/


// Step 1: Create project with `yarn init`
// Step 2: Add Express package with `yarn add express body-parser ejs faker morgan`
// yarn add express body-parser ejs faker morgan
// yarn add -D nodemon
// Stem 3: config .gitignore with node_modules and .DS_Store
// Step 3: Create `app.js` file
// Step 4: Require Express in `app.js`
// Step 5: Create a route to serve `/hello/:name`
// Step 6: Have server, app, listen on PORT
// Step 7: Install nodemon & add start script

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Calling the express function will create
// an instance of a Express web server
const app = express();

// Configure our Express app to use ejs as our templating engine
app.set('view engine', 'ejs');

// unlike app.get, app.use will match for all HTTP verbs
// If we do not give a path as the first argument, it will match for
// every URL
/*
app.use(function (request, response, next) {
  console.log(`ð ${request.method} âÂ ${request.path} â ${new Date().toString()}`);
  // next, a function and third argument of a middleware callback,
  // express to move on to the next middleware
  next();
  // If you do not call next, or terminate a response with response.send,
  // the browser will appear to never stop loading when accessing a URL
  // on your server
});
*/

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

// making a part of the relative url begin with :, will make
// that matched section available as data in request.params under a
// property named after the word that follows :.

// URL: http://localhost:4545/hello/:name HTTP VERB: GET
app.get('/hello/:name', function (request, response) {
  // This function is named Middleware
  // It's passed the arguments in order: request, response & next
  // - request is an object that contains the entire message from
  //   client. This means http headers, any data its sending, etc.
  // - response is an object that contains the message our server will
  //   reply with to the client. It also contains http headers, our own data, etc.
  const name = request.params.name || 'World';
  response.send(`Hello, ${name}!`);
});


// URL: http://localhost:4545/ HTTP VERB: GET
app.get('/', function (request, response) {
  // response.render's first argument is the location and name
  // of a template we want render beginning at views/
  response.render('index');
});


/*
// URL: http://localhost:4545/contact HTTP VERB: GET
app.get('/contact', function (request, response) {
  response.render('contact', {contact: {}});
});

*/

// URL: http://localhost:4545/ HTTP VERB: GET
app.get('/status', function (request, response) {
  response.render('status', {status: {}});
});

/*
// URL: http://localhost:4545/contact HTTP VERB: POST
app.post('/contact', function (request, response) {
  // when a form post is parsed by bodyParser,
  // its data is formatted as a javascript object and it
  // assigned to the body property of request
  response.render('contact', {contact: request.body});
});

*/

// URL: http://localhost:4545/ HTTP VERB: POST
app.post('/status', function (request, response) {
  // when a form post is parsed by bodyParser,
  // its data is formatted as a javascript object and it
  // assigned to the body property of request
  response.render('status', {status: request.body});
});

// PORT is uppercased because we intend to be a constant.
// It shouldn't be changed after it's declared.
const PORT = 4545;
app.listen(PORT, () => {
  console.log(`🔥  Server listening on http://localhost:${PORT}`);
});
