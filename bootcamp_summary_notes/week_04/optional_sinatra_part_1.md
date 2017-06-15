# Sinatra - Part 1
Sinatra is a simple Ruby web framework. It enables us to build simple web applications with Ruby, HTML and CSS. 

## Installing Sinatra
Sinatra is a gem so to install run the following in console:
```shell
gem install sinatra
```
This will install the Sinatra gem and the gems that Sinatra depends on.

## REST
Sinatra is based on the the REST architectural style in order to determine routing in the application and determining what part of the application to execute based on the requested parameters. You can find more information about REST in here: [https://en.wikipedia.org/wiki/Representational_state_transfer](https://en.wikipedia.org/wiki/Representational_state_transfer). In brief, REST depends on two primary attributes from the HTTP header to determine what parts of the app to execute and consquently route your application. These two attributes are the HTTP verb and HTTP URL. The combination of the two determine the route.

## Creating a Sinatra App
To create a Sinatra application you will need to require the gem first and then define routes based on HTTP verbs and URLs as in:
```ruby
require "sinatra"

get "/" do
  "Hello World"
end
```
The example above defines that when you make an HTTP `GET` request to the `/` path you will receive a text response back that says `Hello World`.

If you put the code above in a file named `app.rb`, then you can run your Sinatra application in the console by running:
```ruby
ruby app.rb
```
This will run the `WEBrick` server on port `4567` by default so you can visit `http://localhost:4567` in your browser and you will see the `Hello World` appear on the page. You can also run the following in the console:
```shell
curl http://localhost:4567/
```
And you will get back `Hello World`

## Using Sinatra Reloader
Sinatra doesn't automatically reload file changes. So if you change `app.rb`, you will have to stop the server by hitting `ctrl + c` and then run the command again `ruby app.rb`. A solution to this is to use Sinatra Reloader. First we need to instal the `sinatra-contrib` gem:
```shell
gem install sinatra-contrib
```
After that we will need to include `sinatra/reloader` in our `app.rb`:
```ruby
require 'sinatra'
require 'sinatra/reloader'

get "/" do
  "Hello World"
end
```
Now if you change this file you won't have to restart the server.

## Using ERB
If you want to server HTML pages then it will be very cumbersome to put all of your HTML in your `app.rb` file. A solution to this is to use `ERB` which stands for Embedded Ruby and is a templating system to generate HTML pages with Ruby. ERB is a way to mix Ruby with HTML to generate HTML pages to the user. To use ERB start by creating a folder called `views` (case sensitive) that should be within the same folder as you `app.rb` file. Create a file there with `.erb` extenstion. For example, `index.erb` can look like:
```erb
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My First Sinatra Application</title>
  </head>
  <body>
    <h1>Welcome to my Awesome Sinatra Application</h1>
  </body>
</html>
```
Then to server this html page from your `app.rb` you can use the `erb` method that is built-in with Sinatra:
```
get "/" do
  erb :index # this will automatically look for views/index.erb file by convention
end
```
Note that file name should match what you call in your `app.rb` so if you put `erb :index` you must have a file `views/index.erb`. 

### ERB Blocks
You can use certain ERB blocks by using `<% %>` in your erb files as in:
```erb
<%# this is a comment %>
<% a = 1 %>
<%= a %>
<%= 1 + 1 %>
```
Note from the examples above that you can include Ruby code within your ERB templates. If you put `=` sign it will display the output on the page. Otherwise, it will just define it in memory but not display it.

### Sharing Variables
You can share variables between `app.rb` and erb files by using instance variables. They are automatically accessible in the ERB templates so if you put the following in your `app.rb`:
```ruby
get "/" do
  @greeting = "Hello World"
  erb :index
end
```
You can do the follwing in your `index.erb` file:
```erb
<h1><%= @greeting %></h1>
```

### Using Layouts
In many cases you're likely to have many ERB templates that share the same code. Likely your ERB templates will use the same header and footer and use a unique main content. We can make use of the layout feature in Sinatra. We start by creating the layout which is an ERB file within the `views` folder. This is what it may look like:
```erb
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Welcome to my Site!</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <%= yield %>
  </body>
</html>
```
Note in the code above that there is a special keyword `yield` that is being used from within an ERB block. This is where the content unique to a page will be placed. If you named the file above `application.rb`, then in your `app.rb` you can do:
```ruby
get "/" do
  erb :index, layout: :application
end
```
The code above will put the rendered content of `index.erb` template in place of the `<%= yield %>` and then generate a single HTML page as a response.

## Using `params`
Sinatra gives you a convenient way to capture both of the `GET` and `POST` parameters into a single convenient variable `params` which is a `Hash` so if you visit: `http://localhost/?name=Tam` then your `params` variable will look like:
```ruby
{"name" => "Tam"}
```

## Submitting Forms
To handle form submissions in Sinatra we must make sure that the form `action` property and `method` match what we define in Sinatra. Most forms use `method="post"` so if we write our form as follows:
```html
<form action="/contact" method="post">

</form>
```
We can capture the form submission in Sinatra by writing:
```ruby
post "/contact" do
  "Form Submitted!"
end
```

## Passing Values from Forms
In the example above we saw that we can pass in `GET` paramters with the URL. In most scenarios we will need to pass in the parameters using a form to do that should ensure that we give a `name` attribute to element in our forms as in:
```html
<form action="/contact" method="post">
  <input type="text" name="first_name">
  <input type="email" name="email">
  <input type="submit" value="Subscribe">
</form>
```
If the user filled in the form above with first name `Tam` and email `tam@codecore.ca`, our `params` object will look like:
```ruby
{"first_name" => "Tam", "email" => "tam@codecore.ca"}
```