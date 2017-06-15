# a proc allows to create a piece of code and assign that block to a variable. we can pass this code around just like any object in Ruby.

my_proc = proc do
  puts "I'm a proc!"
end

my_proc = proc { puts "I'm a proc!" }
my_proc.call


my_lambda = lambda do
  puts "I'm a lambda!"
end

my_lambda = lambda { puts "I'm a lambda!" }
my_lambda.call

# the difference between procs & lambdas are:
# 1. procs don't allow you to use "return" within it's code, while lambda do.
# 2. lamdba's are strict about the number of parameters or arguments you pass to it.  procs are more flexible and will make them nil if you don't pass them.
