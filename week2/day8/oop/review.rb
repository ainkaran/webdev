# good morning 19's!

# data structures
# hashes
# find the most recurring letter
  # string manipulation
  # each do iterator
  # building up hash keys dynamically
  # categorization and counters


# meta programming
  # procs & lambdas
  # eval
  # define_method

# proc or lambda - a way to create piece of code that we can assign to variable, so we can pass around, like we would any object in ruby

my_lambda = lambda { puts "I'm a lambda!" }

my_lambda = lambda do
  # multiple lines of code
  puts "This is the start of my lambda"
  puts "This is the end of my lambda"
end

my_lambda.call


my_proc = proc { puts "I'm a proc!" }

my_proc = proc do
  # multiple lines of code
  puts "This is the start of my proc"
  puts "This is the end of my proc"
end

my_proc.call

# 1. procs don't allow you to use a "return" in it's block, where lambda's do.

# 2. lambda's are more strict about the number of params that are passed to it.  procs are more flexible.








#
