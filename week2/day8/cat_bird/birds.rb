=begin
Model the following in Ruby Classes & Objects: The cat catches the bird and eats it

Stretch 1: Use inheritance

Stretch 2: Give the cat and the bird names.

Stretch 3: Make the chances of the cat catching the bird 50%.

Stretch 4: Simulate having 100 cats trying to catch and eat 100 birds.

Stretch 5: Create a module called HelperMethods in a separate file
that has a method called `random_number`. Include the module in your classes and
use the `random_number` method if it makes sense.
=end

require './animals'
# require './helper_methods.rb'
# load './animals.rb'

class Birds < Animals

  attr_accessor :number #create the getter and setter

  def initialize(number)
    # instance variable - this variable is accessible all throughout our class
    @number = number
  end

  def test
    puts "Working"
  end

end

b = Birds.new(10)
b.test
