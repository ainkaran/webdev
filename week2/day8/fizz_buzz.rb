=begin
Build a class called FizzBuzz that takes two numbers as parameters and then have
a method called run that returns a fizzbuzz array (numbers from 1 to 100, numbers divisible by the
first number replaced by 'fizz' and numbers divisible by the second number replaced by 'buzz' and
numbers divisible by both replaced by 'fizzbuzz').
For instance this code should work with your class:

fb = FizzBuzz.new(3,5)
fb.run # returns an array like: [1, 2, 'fizz', 4, 'buzz, ...

Now modify your solution to make it flexible and be able to change the numbers after you create the object. For instance:

fb = FizzBuzz.new(3,5)
fb.run # returns an array: [1, 2, 'fizz', 4, 'buzz, ...
fb.first_number = 2
fb.second_number = 3
fb.run # returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuzz'...

=end

# load './fizz_buzz.rb'

class FizzBuzz
  attr_accessor :n1, :n2 #create the getter and setter

  def initialize(n1, n2)
    @number1 = n1
    @number2 = n2
  end

  def run
    i = 1
    while i <= 100 do
      if i % (@number1 * @number2) == 0
        puts "fizzbuzz"
      elsif i % @number1 == 0
        puts "fizz"
      elsif i % @number2 == 0
        puts "buzz"
      else
        puts i
      end
      i += 1
    end
  end

end

fb = FizzBuzz.new(3, 5)
fb.run
