=begin
Build a class Animal that has two methods: "eat" that prints "I'm eating" and "walk" that prints "I'm walking".
Make the class have two attribute accessors: name and color. Make the initialize method set those two variables.

Now build a class called Dog that inherits from the Animal class. Add a new method to this class called bark that returns woof.
Override the eat methods and make it print whatever the Animal class eat method prints and then print "Bones are yummy!".

Now build a class called Cat that inherits from the Animal class. Override the eat methods and make it print "Fish is yummy!".

=end

# require './animals'
load './animals.rb'

class Dog < Animals

  def initialize(name, color)
    super(name, color)
  end

  def bark
    puts "woof"
  end

  def eat
    #attr_accessor :name, :color #create the getter and setter
    super
    # animal = Animal.new("Dog", "Black")
    # puts "#{Animals.eat}"
    puts "Bones are yummy!"
  end
end


dog = Dog.new("NiceDog", "black")
dog.eat
