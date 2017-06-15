module HelperMethods
  class Apple
  end

  def name_display
    name.squeeze(" ").capitalize
  end
end

class User
  attr_accessor :name
  include HelperMethods
end

class Car
  attr_accessor :name
  include HelperMethods
end

# test
tesla = Car.new
tesla.name = "model                    3"
puts tesla.name_display

jacob = User.new
jacob.name = "jacob"
puts jacob.name_display

mac = HelperMethods::Apple.new
HelperMethods::name_display
