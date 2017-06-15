# load
# require

# global variable, can be defined anywhere, can be accessed anywhere
$company = "Honda"

class Car
  #class variable
  @@color = "white"

  #getter for the class variable
  def self.color
    @@color
  end

  #setter - allow us to change the value of a class variable
  def change_color(color)
    @@color = color
  end


  # class method
  # max_speed
  # number_of_wheels
  def self.max_speed
    puts "The maximum speed that a car can go in BC is 240km/h"
  end

  # when we run Cookie.new this gets called
   def initialize(model, type, capacity)
     # instance variable - this variable is accessible all throughout our class
     @model = model
     @type = type
     @capacity = capacity
     puts "Car: #{model}, #{type}, #{capacity}"
     puts self #TODO: find out how to get the variable name of the instance from within the class
   end

  #  # getter
  #  def get_model
  #    @model
  #  end
  #
  #  # setter
  #  def set_model(model)
  #    @model = model
  #  end

  #  attr_reader :model # same as get_model
  #  attr_writer :model # same as set_model
   attr_accessor :model #create the getter and setter


  def drive
    puts "Drive"
    ignite_engine

    puts "This car=> Model: #{@model}, Type: #{@type}, Capacity: #{@capacity}"
  end

  def stop
    puts "Stop"
  end

  def park
    puts "Park"
    pump_gas

  end

  private

  def pump_gas
    puts "Pump gas"
  end

  def ignite_engine
    puts "Ignite engine"
  end

end

# honda = Car.new
# kia = Car.new
# toyota = Car.new
#
# honda.drive
#
# honda.stop
#
# honda.park

# kia.drive
#
# kia.stop
#
# kia.park
# honda.pump_gas
#
# honda.ignite_engine

Car.max_speed

honda = Car.new("Honda", "Civic", 4)

honda.drive
honda.model # calls the getter
honda.model = "Accord" # calls the setter
