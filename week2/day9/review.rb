# good morning 19s!!!

# functions - block of code we might want to recall
def say_hello
  puts "Hi!"
end

say_hello

def say_hello(greeting)
  puts "#{greeting}!"
end

say_hello("Hola")

# function(){
#   return something;
# }

def multiply(x, y)
  return x * y
end

def multiply(x, y)
  x * y
end

# methods - a function inside a classes
# classes

# an instance of the array class
list_of_students = Array.new
frequencies = Hash.new

# blueprint
# cookie cutter
class Cookie
  # constructor method
  def initialize(sugar)
    @sugar = sugar + 10
    @flour = 20
  end

  # method
  def eat
    puts "crunch! #{@sugar}"
  end
end

cookie = Cookie.new(10) # inside this cookie object, there is an instance variable that unique to this particular cookie.  this value can be accessed inside the object.
cookie2 = Cookie.new(20)
cookie3 = Cookie.new(30)
cookie.@sugar # i do not have access

# inheritance
# super
# attr_accessors : getters & setters
# private and public - accessibilty of methods
# @ -> instance variables
# $ -> global variables
# @@ -> class variables

# what is the difference between a helper methods and a class

# name space
# a library of methods, helper methods

# name space
module Computer
  class Apple
  end
end

module Fruit
  class Apple
  end
end

mac = Computer::Apple.new
honey_crisp = Fruit::Apple.new

# library of methods that can be imported to a class
module helper_methods
  def name_display
  end
end

class Student
  include helper_methods
end

# load vs require
# require loads every time
# load will check to if it is loaded, if not, it will load
require './cookie'
load './cookie.rb'

# class methods
# class variables

# methods and variables that DO NOT belong to the instance

# obj     class
cookie = Cookie.new
cookie1 = Cookie.new
cookie2 = Cookie.new
cookie3 = Cookie.new

# @sugar belongs to the cookie (i end up with 4 different instance variables)
@@colour belongs to the Cookie class (i end up with 1 class variable always)

# feedback
# chess & library exercises were too open ended








#




#
