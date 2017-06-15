### Using Rack with HTTP
We can use Ruby `Rack` gem to build a simple HTTP server as in:
```ruby
require "rack"

class MyApp
  def self.call(env)
    [200, {"Content-Type" => "text/html"}, ["Hello world"]]
  end
end

Rack::Handler::WEBrick.run MyApp
```
We can connect to that app using a browser by typing `http://localhost:8080/` (default port used by Rack is 8080).
