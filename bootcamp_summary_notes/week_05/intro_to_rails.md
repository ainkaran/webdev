# Introduction to Rails
Rails is an open source framework that helps us build web application rapidly. It's built as a Ruby gem. Rails is all Ruby implemented with specific design patterns and ideas to help speed up developing web applications. Rails is a well-known framework with a large supportive community that makes it appealing to be the choice of many companies.

## Installing Rails
To install Rails you will need to install the Rails gem:
```shell
gem install rails
```
You can set Rails up to work with any kind of database, we will be using Postgresql in the Bootcamp so sure make you have it set up on your machine. On Mac computer you can set it up using `Brew`:
```shell
brew install postgresql
```
Make sure to follow the instructions at the end of the installation. There will be one or two commands to run such as `brew services start postgresql`.

## Creating Your First Rails Project
After installing the Rails gem, you will have the `rails` command that helps you create projects and generate files. We can create a project by running this command:
```shell
rails new awesome_answers
```
This will create a Rails project with a folder called `awesome_answers`. It will generate the files needed for a new Rails project.

We will be mostly doing this in the boot camp:
```shell
rails new awesome_answers -T -d postgresql
```
Because this command will use Postgres as our database instead of the default one: SQLite. It will also not generate the testing file using `TestUnit` as we will be using `RSpec` in the Bootcamp.

## Bundler
Rails uses Bundler to manage gems for the project. Bundler provides a very good way to specify the gems needed for your project, their versions and then locks the versions so other developers use the same gem versions.

Bundler defines the gems needed in a file that comes with Rails which is called `Gemfile`. You will see three main ways to define gems:

`gem 'rails', '4.2.5.1'`: This tells Bundler that we want to use `Rails` gem with version exactly '4.2.5.1'
`gem 'uglifier', '>= 1.3.0'`: This tells Bundler that we want to use `uglifier` with version `1.3.0` or higher.
`gem 'pg', '~> 0.15'`: This tell bundler that we want to use gem `pg` with `15` or more as the last digit number. So `0.85` is accepted while `1.0` is not.

Please note that most gems built with Ruby follow Semantic Versioning. You can read up more about it here: http://semver.org/. In brief, gem versions look like three numbers separated by a dot which depict the following `MAJOR.MINOR.PATCH`. This is why having a feature like `~>` is useful because in many cases we can accept any changes in the `PATCH` number but not with the `MAJOR` and `MINOR`.

After defining the gems you want to use, you will need to run:
```shell
bundle install
```
or, for short:
```shell
bundle
```
This will make Bundler go through the Gemfile and evaluate dependencies. Bundler will throw an error if there are two gems with dependencies that are in conflict. Bundler will then look in the gem already installed in your system and if any of them meet the criteria you specified, it will use them. Otherwise, Bundler will install the gems on your system.

After installing all the gems, Bundler will lock the gem versions by writing to the `Gemfile.lock` file. Which specifies exact versions. This way when other developers want to collaborate, running bundler on their machines will install exact versions of the ones you're using.

## MVC
Rails is based on the MVC architecture which specifies that it's best to split the logic in your application into distinct roles:
- Controllers: Ruby classes used to capture HTTP requests and delegate the work to other classes
- Models: Ruby classes used to interact with data storage such as the database
- Views: Files that usually use a templating system such as `ERB` to format the data in a way the client can make use of. We will mostly go with `html` format but we will see later in the Bootcamp that we can use `json`, `js`, `txt` or any other type we wish to support.

## Working with Routes and Controllers
You need to defines routes in order to have classes handle user requests properly. Routes are defined in `/config/routes.rb`. Rails uses `REST` architectural style for building its routes. Rails provides a structured way to handle requests with `REST` in a specific way.

### Defining Routes
To define a route you can put a rule with `Rails.application.routes.draw do` block within your `routes.rb` file. You can start by defining a route by specifying the HTTP verb to be used: `get`, `post`, `patch` or `delete` which are all methods provided to you by Rails when defining the route. Then you specify the URL pattern and the controller/action you want the request to be handled by. For instance, you can define a route this way:
```ruby
get({"/hello" => "welcome#hello"})
# this will most likely be written as:
get "/hello" => "welcome#hello"
```
The route above specifies that when your application receives a `GET` request with the URL `/hello` Rails will handle this request by the `WelcomeController` class and `index` method within that class.

The above is an example of a Rails convention. You will encounter a few of them on your journey of learning Rails. Rails emphasizes using `Convention Over Configuration` pattern whenever possible.

You can specify a dynamic piece of the URL by using symbols inside it as in:
```ruby
get "/hello/:name" => "welcome#hello"
```
The above will match any URL with pattern `/hello/something` to `WelcomeController` and `index` action. The `something` can be any string or number.

You can also define a route helper by passing the `as` option to your route definition:
```ruby
get "/hello/:name" => "welcome#hello", as: :main_page
```
This enables you to use a method to generate the route later as: `main_page_url` (with domain name) or `main_page_url` (without domain name).

### Defining Controllers
In order for the route we defined above to work, we will need to have a controller to handle the requests. The controllers live in the `app/controllers` folder. To defined a controller, it's best to use the generator. You can run this within your Rails project folder:
```shell
rails generate controller welcome
```
or
```shell
rails g controller welcome
```
This generates a file `app/welcome_controller.rb` which looks like:
```ruby
class WelcomeController < ApplicationController
end
```
The file name and the class name above are examples of Rails conventions.

To define an action within your controller, just define an instance method within the class:
```ruby
class WelcomeController < ApplicationController
  def index
  end
end
```

## ERB
You can use the `ERB` templating system within Rails which follows a convention related to the controller and action names. For instance if you have `index` action within `WelcomeController`, it will render `/app/views/welcome/index.html.erb` template by default as a convention. Note that the folder structure is related to the controller name without the word `controller` so you see that the folder name is `welcome`. The file name `index.html.erb` is composed of three parts:
- index: refers to the action
- html: refers to the format which defaults to `html`. Many others can be used such as: `json`, `xml` and `text`
- erb: the templating system. `ERB` is used by default, you can use gems to define others like: `HAML` and `SLIM`

If you don't want to render a non-default template from your action you can do that by using the `render` method:
```ruby
def index
  render :home
end
```
This will render `/app/views/welcome/home.html.erb` instead.

Rails will use the `/app/views/layouts/application.html.erb` layout by default unless you specify another one as in:
```ruby
def index
  render :home, layout: :special
end
```

### Generating Forms
The best approach to generate forms in Rails is to use help methods that are built-in with Rails. You can use `form_tag` as in:
```erb
<%= form_tag contact_path do %>

<% end %>
```
Which generates the form and the `authenticity_token` with it as well which protects against cross-site scripting attacks. You don't need to worry about the implementation details of `authenticity_token` but the key thing to remember is that it should be there. This is why if you generate a form just by writing your own HTML element `<form ...>` you will get an exception by default as per the link in the `ApplicationController` class:
```ruby
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end
```
In some cases we may need use another option for the `with` option such as `:null_session` which we will see when we cover building APIs with Rails. For now, It's highly recommend that you keep that line above and use `form_tag` or `form_for` when you want to generate a form.
