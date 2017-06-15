# module - categorization or namespace

module Computer
  class Apple
  end
end

module Fruit
  class Apple
  end
end

mac = Computer::Apple.new
gala = Fruit::Apple.new


# PI - make 2 PI classes, place them in 2 seperate modues
# mathematics and food modules
# construct an instance of each class
module Math
  class Pi
  end
end

module Food
  class Pi
  end
end

pi = Math::Pi.new
pie = Food::Pi.new


class Math::Pi
end

class Food::Pi
end

#
