# Sinatra Part 2

## Serving Static Files
To serve static files in Sinatra you must create a folder called `public` which must be within the same folder as you main application file, for example `app.rb`. The url for the static asset must start with `/`. So if you put a file called `style.css` within your `public` folder, you can link to it from your HTML pages by:
```html
<link rel="stylesheet" type="text/css"  href="/style.css">
```

## Authentication
If you'd like to add a simple HTTP authentication to your Sinatra application then you can follow the code highlighed [here](http://www.sinatrarb.com/faq.html#auth):
```ruby
use Rack::Auth::Basic, "Restricted Area" do |username, password|
  username == 'admin' and password == 'supersecret'
end
```
This will make entering your entire application require the user to enter a username `admin` and password `supersecret`. Browsers will open a pop up for you to enter those information. If you want to restrict only certain parts of your applictaion then you can create a helper method as in:

```ruby
helpers do
  def protected!
    return if authorized?
    headers['WWW-Authenticate'] = 'Basic realm="Restricted Area"'
    halt 401, "Not authorized\n"
  end

  def authorized?
    @auth ||=  Rack::Auth::Basic::Request.new(request.env)
    @auth.provided? and @auth.basic? and @auth.credentials and @auth.credentials == ['admin', 'supersecret']
  end
end

get "/" do
  "This is public"
end

get "/special" do
  protected
  "This required an authentication"
end
```

## Sessions
HTTP is a stateless protocol which means every request/response cycle is completely independent from any other request/response cycle. So if you'd like certain pieces of information to be carried between one request to another you will need to make use of cookies which are small pieces of data stored in key/value fashion. Cookies are passed back and forth with every request/response cycle. Sinatra makes it easy by using `sessions` which encypts the cookies stored on the user's machine. This way you don't have to worry about the user viewing the data in the cookies because it will be encrypted.

To start using sessions you will need to enable sessions by including this line at the top of you `app.rb` file:
```ruby
enable :sessions
```
Then you can think of a session as a Hash the persists between different requests:
```ruby
get "/language_select" do
  session[:preferred_language] = "English"
  erb :index
end
```
Then you can access the session anywhere in your `app.rb` or any `.erb` file:
```erb
<p>Your favourite language: <%= session[:preferred_language] %></p>
```
or
```ruby
get "/some_other_page" do
  puts "The user selected #{session[:preferred_language]}"
  # ...
end
```
The key thing to remember is that sessions are per browser session and that they depend on cookies. So if the user open another browser (Safari instead of Chrome for instance) sessions won't be available. Also if the user opens a Chrome incognito window or cleared the cookie, sessions won't be available.

## Sending `PATCH` and `DELETE` requests
HTML forms only support `GET` and `POST` HTTP requests. In order to send `PATCH` or `DELETE` requests we have to use a workaround. This is done first enabling Rack MethodOverride. You can put this line at the top of you `app.rb` file:
```ruby
use Rack::MethodOverride
```
After this you will need to include a hidden field in your forms with `_method` name as in:
```html
<form action="/user" method="post">
  <input type="hidden" name="_method" value="DELETE">
  <!-- ... -->
</form>
```
Then the form will mimic a `DELETE` request which you can handle in your `app.rb`:
```ruby
delete "/user" do
  # ....
end
```

## Emails
To send emails in Sinatra you need to make use of other gems that help you connect to mail servers. One gem to use is `pony`. First make sure you have `pony` installed:
```shell
gem install pony
```
Then you will need to include at the top of your `app.rb` file:
```ruby
require "sinatra"
require "pony"

# ...
```
After that you can send an email by simply calling the `mail` method:
```ruby
Pony.mail :to => 'you@example.com',
          :from => 'me@example.com',
          :subject => 'Howdy, Partna!'
```
If you would like to send an email through a server like Gmail you can do something like:
```ruby
  Pony.mail({
    to: "tam@codecore.ca",
    subject: "Thank you",
    body: "Thank you for contacting us! will get back to you shortly",
    via: :smtp,
    via_options: {
      address:        'smtp.gmail.com',
      port:           '587',
      user_name:      'YOUR_GMAIL_USERNAME_HERE',
      password:       'YOUR_GMAIL_PASSWORD HERE',
      authentication: :plain,
      domain:         "localhost.localdomain" # the HELO domain provided by the client to the server
    }
  })

```