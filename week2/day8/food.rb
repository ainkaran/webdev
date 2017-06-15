=begin
Create a Pizza class and a Beer class. They both should have sugar, protein and fat attributes.
The Pizza class should have weight attribute and the beer class should have volume attribute.
Create a parent Food class and use inheritance.
=end

class Food

  attr_accessor :sugar, :protein, :food #create the getter and setter

  def initialize(sugar, protien, fat)
    @sugar = sugar
    @protien = protien
    @fat = fat
  end
end


class Pizza < Food
  attr_accessor :weight
  def initialize(weight)
    super(sugar, protien, fat)
    @weight = weight
  end
end


class Beer < Food

  attr_accessor :volume

  def initialize(volume)
    super(sugar, protien, fat)
    @volume = volume
  end
end
