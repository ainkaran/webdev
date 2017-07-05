class Car
  # max_speed
  # number_of_wheels
  def self.max_speed
    puts "The maximum speed that a car can go in BC is 240km/h"
  end

  def initialize(model, type, capacity)
    # we want to access these values outside of our initialize method, but inside of our class
    @model = model
    @type = type
    @capacity = capacity
    puts self #TODO: find out how to get the variable name of the instance from within the class
    puts "A car is being constructed: #{@model} #{@type} that seats #{@capacity}"
  end

  def drive
    ignite_engine
    puts "driving a #{@model} #{@type}..."
  end

  def stop
    puts "stopping..."
  end

  def park
    puts "parking...."
    pump_gas
  end

  private

  def pump_gas
    puts "pumping gas..."
  end

  def ignite_engine
    puts "igniting engine..."
  end
end

# test
# tesla = Car.new
# tesla.drive
# tesla.stop
# tesla.park
# # tesla.pump_gas
# # tesla.ignite_engine
#
kia = Car.new("Sedona", "SUV", 5)
kia.class
toyota = Car.new("Odyssey", "Mini Van", 7)
dodge = Car.new("Charger", "Muscle Car", 4)

kia.drive
#
# dodge.drive
# kia.park
# toyota.stop
#
# puts toyota.class

# dodge.max_speed
Car.max_speed





#
