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

class Cats < Animals

  attr_accessor :color #create the getter and setter
  attr_accessor :type #create the getter and setter
  attr_accessor :number
  include HelperMethods

  def initialize(color, type)
    # instance variable - this variable is accessible all throughout our class
    # super(size)
    @color = color
    @type = type
    @birds = []
  end

  def catch
    number = HelperMethods::random_number
    if number == 1
      puts "Cat catching the bird #{ (number/2) * 100 }%."
    else
      puts "Cat didn't catch chance is not 50%"
    end
  end

  def simulate_100_catch

    


  end

end


cat = Cats.new('black', 'lab')
c1 = Birds.new('S')

dog.eat_bird
