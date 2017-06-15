# Testing with MiniTest - Summary Notes
You can use MiniTest to write simple tests in Ruby. It can be used with Rails as well.

## Setting Up
To set up MiniTest, simply install the gem:
```shell
gem install minitest
```

## Writing Your first test
Let's say you have a `Cookie` class in file `cookie.rb`:
```ruby
class Cookie

  def initialize(sugar, flour)
    @sugar, @flour = sugar, flour
  end

  def calorie_count
    @sugar * 5 + @flour * 4
  end

end
```
We Can start by writing the test in a file `cookie_test.rb` that looks like:
```ruby
require "./cookie.rb"
require "minitest/autorun"

class CookieTest < Minitest::Test

end
```
Note in the file above that we require `minitest/autorun` and then we inherit from  `Minitest::Test`. Requiring `minitest/autorun` makes it easy to run our tests.

### Writing the first test
We can then define methods in the above class as:
```ruby
def test_requiring_sugar_and_flour
  assert_raises(ArgumentError) { Cookie.new }
end
```
In the example above we're testing to make sure that when we call `Cookie.new` we get an exception `ArgumentError` because we expect that when we call `.new`, two arguments are passed for the sugar and flour amounts.

Note that for this to work with MiniTest autorun you must start the method name with `test_`.

Also, you must make sure that the test fails at least once. This way if you've already written the code in your `Cookie` class, make sure to comment it out and run your test again to make sure that the test fails under some conditions. Otherwise, you may have written the test in a way that always passes which defeats the purpose of having the test all together.

### Using `assert_equal`
The most common way to write tests is to use `assert_equal` as in:
```ruby
def test_calorie_count_calculation
  c     = Cookie.new(6, 10)
  count = c.calorie_count
  assert_equal(70, count)
end
```
The above code makes sure that the `calorie_count` method returns `70`.

## Running Tests
To run tests run the following in your terminal:
```shell
ruby cookie_test.rb
```
This will give you the following output:
```shell
# Running:

..

Finished in 0.001136s, 1761.0641 runs/s, 1761.0641 assertions/s.

2 runs, 2 assertions, 0 failures, 0 errors, 0 skips
```
If tests fail, you will see messages describing that in the outcome.
