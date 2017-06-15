# User Authentication with Express.js & MongoDB
One of the most popular modules for adding use authentication for an Express.js application is `passport`. We will use the passport module to add database use authentication.
The instructions below assume that you have an Express.js application set up with MongoDB using `mongoose` module.

You can see general documentation about the `passport` module in [here](http://passportjs.org/docs/authenticate)

## Adding the passport module
Let's start by adding the `passport` module by running the following command in the root directory of our application in the command line:
```
npm install --save passport passport-local passport-local-mongoose
```
Note that in the above we installed the base `passport` module. We've also installed two additional modules which are `passport-local` and `passport-local-mongoose`. The `passport` module supports many strategies for authentication including a number of `oauth` strategies such as Facebook and Twitter. In here we will look into the local strategy which uses the database for storing the user's credentials.

## Configuring the `app.js` with `passport`
Let's now start to configure our `app.js` with `passport` by adding the following lines, ideally where you require the rest of your modules:
```js
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
```
We will be using session to keep the user authenticated so we will need another module for this which is `express-session`, so let's install this first from the command line:
```
npm install express-session --save
```
And then let's make sure it's included at the top of the `app.js` file:
```js
var expressSession = require('express-session');
```
Then let's add the following lines to register the middlewares for `passport` and `express-session`:
```js
app.use(expressSession({secret: 'notsupersecert',
                        resave: false,
                        saveUninitialized: false,
                        cookie: { maxAge: 6000000 }}));
app.use(passport.initialize());
app.use(passport.session());
```
You can read up more about the `express-session` options by [clicking here](https://github.com/expressjs/session).
Note that you should register the `express-session` middleware before the `passport` session one.

Before we move on to configuring `passport` let's make sure that we enable flash messages as they can be handy and good for the user experience. We start by installing the module in the command line:
```
npm install --save connect-flash
```
Then we can require the flash and use it as a middleware:
```js
var flash = require('connect-flash');
app.use(flash());
```
We can also optionally add a general middleware in order to have the flash messages available as variables in the view files as in:
```js
app.use(function(req, res, next) {
  res.locals.success   = req.flash('success').join(', ');
  res.locals.error     = req.flash('error').join(', ');
  res.locals.info      = req.flash('info').join(', ');
  next();
});
```
This way in our view files we can simply use those variables as in:
```pug
//- in the layout.pug file
main
  - if (info)
    .alert.alert-info= info
  - else if(error)
    .alert.alert-danger= error
  - else if(success)
    .alert.alert-success= success
  block content
```

## Completing the `passport` configurations
We will need to complete configuring `passport` to help us integrate use authentication with our application. We will need to start by registering our strategy with it as in:
```js
var User = require("./models/user");
passport.use(new LocalStrategy({usernameField: 'email'}, User.passportVerify));
```
In the code above we're telling `passport` that we would like to use the `LocalStrategy` we defined above which uses MongoDB to store the user credentials.
We also configured `passport` above to use `email` as the username field. We finally need to pass in an important option which is the `verify callback` function to the `passport` middleware. This function is used to determine whether a user is logged in successfully or not. In the example above I have chosen to put the method in the `user.js` file which may be the better place for it, you can pass it an anonymous function if you'd like as well. The function call look something like this (in `models/user.js`):
```js
UserSchema.methods.validPassword = function(password) {
  return this.password === password;
}

User.passportVerify = function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}
```
Please note that in the above we're storing and comparing the password in a clear-text fashion which is very insecure and not suitable for production, you must hash the password using BCrypt or something similar or more security. [Click here](http://blog.mongodb.org/post/32866457221/password-authentication-with-mongoose-part-1) for a tutorial on a possible way to implement that.

Note that in the code above we're calling the `done` function differently depending on the outcome of finding the user and verifying the user's password. You can find more information about calling the `done` function by clicking here: [http://passportjs.org/docs/configure](http://passportjs.org/docs/configure).


Let's now configure how we store the user and fetch it from the session, we can do this using the following code (in our `app.js`):
```js
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
```
In the code above we're telling `passport` to store the `user.id` which is the user id in the session. And when want to find the user back we find that user by their id as well using the `findById` method from `mongoose`.

## Building the routers
Let's start by having a registration page for the user by generating a `users.js` routes file that looks like:
```js
var express = require('express');
var router = express.Router();
var User   = require('../models/user');

router.get('/new', function(req, res, next){
  res.render('users/new', {errors: [], user: {}});
});

router.post('/', function(req, res, next){
  var user = new User(req.body);
  user.save(function(err, usr){
    if(err) {
      res.render('users/new', {errors: err, user: user});
    } else {
      req.login(usr, function(err){
        if(err) {
          req.flash('error', 'Something went wrong');
          res.redirect('/sessions/new');
        } else {
          req.flash('info', 'You\'re logged in');
          res.redirect('/');
        }
      });
    }
  });
});

module.exports = router;
```
Note that we used `req.login` function which came from `passport`. As per the code above we will need to provide our `user/new.pug` template:
```pug
extends ../layout

block content
  h1 Sign Up
  = errors
  form(method='POST' action='/users')
    .form-group
      label(for='first-name') First Name
      input(type='text' id='first-name' name='firstName' value=user.firstName)
    .form-group
      label(for='last-name') Last Name
      input(type='text' id='last-name' name='lastName' value=user.lastName)
    .form-group
      label(for='email') Email
      input(type='email' id='email' name='email' value=user.email)
    .form-group
      label(for='password') Password
      input(type='password' id='password' name='password')
    .form-group
      label(for='password-confirmation') Password Confirmation
      input(type='password' id='password-confirmation' name='passwordConfirmation')
    .form-group
      input(type='submit' value='Sign Up')
```

We can now build our `sessions.js` router:
```js
var express = require('express');
var router = express.Router();
var User   = require('../models/user');
var passport = require('passport');

router.get('/new', function(req, res, next){
  res.render('sessions/new', {errors: [], user: {}});
});

router.post('/', passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/sessions/new',
                                   successFlash: 'You\'re logged in',
                                   failureFlash: true })
                                 );

router.get('/logout', function(req, res){
  req.flash('info', 'You\'re logged out');
  req.logout();
  res.redirect('/');
});

module.exports = router;
```
Note that we're making use of the `passport.authenticate` and `req.logout` functions that came from `passport` here.
Here is what `sessions/new.pug` file looks like:
```pug
extends ../layout

block content
  h1 Sign In
  form(method='post' action='/sessions')
    .form-group
      label(for='email') Email
      input(type='email' placeholder='Your email' name='email' id='email')
    .form-group
      label(for='password') Password
      input(type='password' name='password' id='password')
    input(type='submit' value='Sign In' class='btn btn-primary')

```

## Adding convenient helpers
It would be nice to have access to the logged in user in our view files so we can display to the user a `sign in` or `sign out` link or show their name if they are logged in. To accomplish this we will first need to have the `currentUser` object available in the view files by adding the following code in our `app.js` file:
```js
app.use(function(req, res, next) {
  res.locals.currentUser = req.user || null;
  next();
});
```
Then we can add a piece of code that looks like this in our `views/layout.pug` file:
```pug
- if (currentUser)
  li
    | Hello&nbsp;
    = currentUser.firstName
    a(href='/sessions/logout') Log Out
- else
  li
    a(href='/sessions/new') Sign In
    | &nbsp;
