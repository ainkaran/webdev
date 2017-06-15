# Building a Web App in Node.js and Express.js - Summary Notes
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It enables you to run Javascript outside of the browser which means you can build and run applications with Javascript as server side applications. Node.js also comes with `npm` which is a tool that enables us to install libraries for Node.js.

We will build a simple application that creates a question in the database.

## Express.js
Express is one of most popular frameworks to build web applications with Node.js. It's minimalist and it's inspired by the Sinatra Framework.

Let's start by installing express:
```
npm update -g express
```
Then let's install the express generator:
```
npm update -g express-generator
```

## Generating the first Express application
Let's start by generating the first Express application by running:
```
express AwesomeAnswers
```
As we noted above Express is very minimal so it doesn't come in with many tools. Consequently, the generator generates a boiler plate code that comes with the following libraries:
- path: to help us identify file path easily
- serve-favicon: to help us serve favourite icon
- morgan: for better logging
- cookie-parser: to handle cookies
- body-parser: to handle body parameters
- jade: templating language

You will notice those are defined in the `package.json` file in the root directory:
```json
{
  "name": "AwesomeAnswers",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
}
```
The file above defines all the libraries needed for your application. If you add a new entry into the `dependencies` object then you will need to run:
```
npm install
```
Note that in Node.js you will need to run the above in order to have the libraries included with you application and not just on the operating system. After running the command above you will notice a new folder in the root directory called `node_modules`  that includes the libraries we defined above and all their dependencies.

Express.js doesn't automatically `require` all the libraries (or modules) you defined above. You will need to call `require` every time you need to use one of them. So you will notice the following code at the top of the `app.js` file:
```js
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
```

## Building the first Route
Let's build the first route that will help us create a form to create a question. We start by creating a file inside the `routes` directory called `routes/questions.js`. We start by adding the express code at it above:
```js
var express = require('express');
var router = express.Router();
```
We then create an `action` to handle showing the question creation form:
```js
router.get('/new', function(req, res, next) {
  res.render('questions/new', { errors: [] });
});
```
Then we create our first template `views/questions/new.jade` that looks like:
```jade
extends ../layout

block content
  h1 New Questions
  form(action='/questions' method='post')
    .form-group
      label(for='title') Title
      input(type='text' name='title')
    .form-group
      label(for='title') Body
      textarea(name='body')
    .form-group
      input(type='submit' value='Save' class='btn btn-primary')
```

Note that this file includes the `views/layout` at the very beginning and defined the `content` included in it to be the code we've written above.

## Creating Questions
We will be using MongoDB to store our questions, so make sure that MongoDB is installed and running. Then install `mongoose` which is the module we will use to connect to MongoDB:
```
npm install mongoose --save
```
Note that the `--save` option automatically adds a line in the `package.json` file. Let's create folder `models` and then inside it create a file `/models/question.js` that looks like:
```js
var mongoose = require("mongoose"),
    Schema   = mongoose.Schema;

var QuestionSchema = new Schema({
  title: {type: String, trim: true, required: true},
  body: {type: String, trim: true, required: true}
});

module.exports = mongoose.model("Question", QuestionSchema);
```
You will need to make sure that Mongoose is set up to connect to MongoDB, so you can add the following lines to your `app.js`:
```js
var mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/awesome_answers_test");
```
Then in your `routes/questions.js` you can add the following to handle form submissions:
```js
router.post("/", function(req, res, next){
  var question = new Question({title: req.body.title,
                               body: req.body.body});
  question.save(function(err, question){
    if(err) {
      res.render('questions/new', { errors: err })
    } else {
      res.end("Question Created");
    }
  });
});
```