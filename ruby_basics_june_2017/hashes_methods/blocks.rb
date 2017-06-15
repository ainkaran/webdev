# what are blocks? - a piece of code or method without a name.
# numbers.each do
#   puts "nothing"
# end
#
# def method_name
#   # block of instructions
# end

def my_method
  puts "hello"
  yield if block_given?
  puts "goodbye"
end

my_method

# we've created a function that takes in a variable number of arguments
def largest(*numbers)
  puts "hello"
  # we check to see if a yield exists
  # since there are arguments being passed in, we are going to hand them over to the yield
  puts numbers # return an array of numbers
  yield(numbers) if block_given?
  puts "goodbye"
end

# in our block, we can use the each..do like syntax to grab the arguments passed over
largest(1,2,3,4,5) do |args|
  puts args.max
end


#
