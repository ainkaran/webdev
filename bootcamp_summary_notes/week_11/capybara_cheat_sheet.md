# Testing with Capybara - Summary Notes
Capybara helps emulate user interaction on your website, it helps emulating things like clicks, visiting links and submitting forms.
## Setting Up
Make sure you have `qt` installed on your computer by running:
```shell
brew install qt
```
on a Mac, or:
```shell
sudo apt-get install qt
```
on Linux systems.

Add `capybara` to your `Gemfile` and run `bundle` in your console:
```ruby
gem 'capybara'
```

## Setting up Capybara with RSpec
Add the following line in your `spec/rails_helper.rb` at the top of the file
```ruby
...
require 'spec_helper'
require 'rspec/rails'
...
```
### Generating the test file
You can use Capybara with RSpec. You can start by generating `feature` test file using the following command in the console:
```shell
rails g rspec:feature users
```
## Using Capybara Features
Here are a few features you can use in Capybara to emulate user interaction with your website:
### visit
You can use `visit` method to emulate visiting a specific web page as in:
```ruby
visit new_user_path
```
### fill_in
You can use `fill_in` method to fill in a field on the form as in:
```ruby
fill_in "First name", "John"
```
### click_button
You can use `click_button` to emulate clicking a button within a form as in:
```ruby
click_button "Create User"
```
### click_link
You can use `click_link` to emulate clicking a link as in:
```ruby
click_link "Sign Up"
```
## Matching techniques with Capybara and RSpec
Here are a few techniques you can use for matching outcomes with RSpec and Capybara:
### Using `current_path`
You can use `current_path` method to test the current page you're on:
```ruby
expect(current_path).to eq(root_path)
```
### Using `page` with `have_text`, `have_selector` and `have_title`
You can use the `page` object to test things on the resulting page as in:
```ruby
expect(page).to have_text "Hello World"
```
or
```ruby
expect(page).to have_selector "h1", text: "Hello World"
```
or
```ruby
expect(page).to have_title "Hello World"
```

## Capybara with RSpec
Capybara integrates nicely with RSpec and you can use the techniques above with RSpec tests. It's common to put Capybara tests within the `features` folder in the `spec` folder. For instance, `/spec/features/campaigns_spec.rb` may look like:
```ruby
require 'rails_helper'

RSpec.feature "Campaigns", type: :feature do
  describe "Home page" do
    it "has `Welcome to Fund.sy` in the page title" do
      visit root_path
      expect(page).to have_title "Welcome to Fund.sy"
    end
  end
end
```

## Opening Web Pages
You can open pages during the test to check whether they look the way you want them to or not using the `save_and_open_page` as in:
```ruby
require 'rails_helper'

RSpec.feature "Campaigns", type: :feature do
  describe "Home page" do
    it "has `Welcome to Fund.sy` in the page title" do
      visit root_path
      save_and_open_page
      expect(page).to have_title "Welcome to Fund.sy"
    end
  end
end
```
For that to work, make sure to have the `launchy` gem installed, so make sure it's added to your `Gemfile`:
```ruby
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  gem "capybara"
  gem "launchy"
  # ...
end
```
