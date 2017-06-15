# Integrating with the Twitter Gem
Assuming you have authenticated the user with Twitter using guidelines like [this](https://gist.github.com/tkbeili/3a524cbfe91a3e994b93). Then you you have the pieces of information need to integrate with Twitter and do things like tweeting on the user's behalf. Let's start by adding the Twitter gem:
```ruby
gem "twitter"
```
Then you can simply tweet on the user's behalf by doing:
```ruby
  client = Twitter::REST::Client.new do |config|
    config.consumer_key        = Rails.application.secrets.twitter_api_key
    config.consumer_secret     = Rails.application.secrets.twitter_api_secret
    config.access_token        = current_user.twitter_consumer_token
    config.access_token_secret = current_user.twitter_consumer_secret
  end

  client.update("Hello World!")
```
