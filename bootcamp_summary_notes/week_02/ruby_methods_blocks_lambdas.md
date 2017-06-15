# Ruby Methods, Blocks and Lambdas Summary Notes
You can define a ruby method using the `def` keyword as in:
```ruby
def greeting
  "Hello"
end
```
Methods can take parameters
```ruby
def sum(a, b)
  a + b
end
```
You can call Ruby methods with or without brackets:
```ruby
sum(1,2)
sum 1,2
```
The method `sum` has two required parameters `a` and `b`. To make parameters optional you can give it a default value as in:
```ruby
def multiply(a, b = 1)
  a * b
end
```
## Value Returning
Ruby methods return the last expression from it. For instance `my_method`:
```ruby
def my_method(a, b)
  a * b
  a + b
end
```
will return `a + b` because it's the last expression in the method.
## Variable Arguments
You can define the method to take a variable number of arguments using the splat `*` operator as in:
```ruby
def multiply(a, *b)
  result = a      
  b.each {|x| result *= x}
  result
end

puts multiply(4, 5, 5, 4, 5)
puts multiply(10, 4, 4)
```
## Blocks
Blocks are a piece of code of methods without a name. Any method in Ruby can take a block and execute it using the `yield` keyword:
```ruby
def my_method
  puts "Hello"      
  yield if block_given?
  puts "Bye"
end
```
You can pass the block to be executed by the `yield` in two different ways:
```ruby
my_method do
  puts "I'm a block"
end
```
or
```ruby
my_method { puts "I'm a block" }
```
Reserve the second one for blocks that contains a simple line of code.

## Procs & Lambdas
Procs and lambdas are ways to create a piece of code assigned to a variable and you can pass the code around as you would pass any other Ruby object.
```ruby
my_lambda = lambda { puts "I'm a lambda" }
my_lambda.call # this will print `I'm a lambda`
```
and
```ruby
my_proc = proc { puts "I'm a proc" }

def my_method (code)
  puts "Hey you!"
  code.call
  puts "Hello"
end

my_method(my_proc)
```
### The difference between Procs and Lambdas
There are a few differences between Procs and Lambdas:
- Procs don't allow you to use `return` with its code while lambdas do
- Lambdas are strict about the number of parameters you pass to it. Procs are more flexible and will make them nil if you don't pass them.

Here is an [article](http://awaxman11.github.io/blog/2013/08/05/what-is-the-difference-between-a-block/) with more details.

## Hash as a last argument
If you pass in a Hash as the last argument to a Ruby method, you can omit the curly braces:
```ruby
def first_value(hash)
  hash.first[1]
end

first_value {a: 1, b: 2}
# Or
first_value a: 1, b: 2
```
