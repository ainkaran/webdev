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

require './helper_methods.rb'
# load './helper_methods.rb'

class Animals
  attr_accessor :name, :color #create the getter and setter
  include HelperMethods

  def initialize(name, color)
    @name = name
    @color = color
  end

  def catch
    puts "Cat catch a bird"
  end
end


#test
animal = Animals.new("Cat", "Black")
animal.eat
puts animal.random_number

# mac = HelperMethods::Apple.new
# HelperMethods::random_number