# methods - a way to do something
# takes in an input and produces an output

# method - is a function within a class

# functions, methods, classes, objects
# add 2 numbers together
# math function

# i want to add items to an array
# push is a method within the array class

# class? template for objects
# class describes an object
# blueprint

# Array.new # constructing a house, constructing an array

# House is an object
# list_of_students is an array object
# list_of_students is an instance of the array class
# list_of_students.push is calling an array method
#
# function sayHello() {
#   # block of code
# }

# definition
def say_hello
  # block of code
  puts "Ciao!"
end

say_hello
say_hello
say_hello
say_hello
say_hello


def morning
  puts "get up"
  puts "brush teeth"
  puts "change"
  puts "eat breakfast"
  puts "catch bus"
end

morning()
morning
morning()

def add(x, y)
  puts x + y
end

add(5, 6)
add(3, 4)
add(390384590843, 239490328498)

def say_hello(greeting)
  puts greeting
end

say_hello("ciao")
say_hello("bonjour")
say_hello("hola")

def subtract(x, y)
  x - y
end

result = subtract(10, 2)
result2 = subtract(8, 4)

subtract(10, 2) - subtract(8, 4)

subtract(subtract(10, 2), subtract(8, 4)) # recursion

# is_a? # boolean method

def by_five?(num)
  num % 5 == 0
end

put by_five?(11)
put by_five?(15)

def multiply(*a)
  result = 1
  a.each do |num|
    result = result * num
  end

  # return result
  result

  # return a.each {|num| result = result * num }
end

total = multiply(1,2,3,4,5,6,7,8,9,10)
p total

numbers = [1,2,3]
numbers[0]
puts numbers[0]
#

# create a function that takes in a variable number of arguments
# the function will return the largest number from the arguments passed in


def largest(*numbers)
  # numbers is an array
  p numbers
  largest = numbers[0]

  numbers.each do |number|
    # compare to see if it's the biggest?
    if number > largest
      largest = number
    end
  end

  largest
end

# def largest(x, y, z)
# end
# largest(1,2,3)

largest(1,2,29304829304,4,5)

# version 2
# def largest(*numbers)
#   numbers.map {|x| Integer(x).compact.max}
# end
# largest(1,2,"Jacob", 29304829304,4,5)

def largest(*numbers)
  numbers.max
end

largest(1,2,29304829304,4,5)

# optional arguments
# expected 3 args, but got 2
jacob = Hash.new
jacob = Hash.new(0)

def largest(x, y, z=0)
end

largest(1,2)










#
