# Write an array that contains three strings and three numbers

arr = ['First string', 1, 'Second string', 2, 'Third String', 3]

# Accessing values in a ruby can be done with #[] notation
arr[0] # returns 'First string'
arr[3] # returns 2
# Putting a negative number inside [] will return values beginning
# from the end of the array instead
arr[-1] # returns 3
arr[-2] # returns 'Third String'


# Multi dimensional arrays
# An array whose elements are all arrays  is multi-dimensional array
# it can be used to represent a table or a matrix
a = [[1,2,3], [4,5,6], [7,8,9,10]]

# You can access array elements of nested arrays by chaining
# the bracket notation

a[1] # returns  [4, 5, 6]
a[0][1] # returns 2
a[-1][-1] # returns 10

# The bracket notation when combined with = can be used to
# assign a value
a[1][-1] = 16 # replaces the value 6 in the nested array with 16
a[-1] = [20, 30] # replaces the last array with [20, 30]

b = ['Sun', 'Moon']
# To add values at the end of an array use the << (shovel operator) or
# .push method. They function identically, return the array and mutate it
# as well

b << 'Earth' << 'Alpha Centauri'
# returns ['Sun', 'Moon', 'Earth', 'Alpha Centauri']
b.push('Earth').push('Alpha Centauri') # same as above
# << and push can be chained one after the other

# use the method .include? to check if an array contains a value
b.include? 'Earth' # returns true
b.include? 20 # returns false

# Find out how to get the number of Array elements in two different ways
b.count
b.size
b.length

# Find a method to turn a multi-dimensional array into a one-dimensional array
a.flatten
#a.flatten! #mutates a


# Find out how to add and remove elements from the end of arrays and from
# beginnings of arrays
a.shift # remove from the beginning
a.unshift(1) # add 1 to the beginning
a.pop # remove from the end
a.push(10) # add 10 to the end

# Find out how to convert a string sentence to an array of words

# Find out how to convert an array of words to a sentence


# Iterating through arrays

my_arr = [1, 3, 5, 7]

# you can use the each method to iterate over arrays
# it takes a block defined with do .. end
# the value of each element will be available as the variable
# put inside the bar characters (i.e. |variable_name|)
my_arr.each do |value|
  puts value * 2
end

# Build an array that contains five numbers then loop through the array and
# print each number multiplied by itself

my_nums = [1,4,6,7,8,9,10,12]

my_nums.each do |val|
  puts val * val
end

for val in my_nums
    puts val * val
end

# Write code that prints every element multiplied by itself in the
# two-dimensional array above

arr_of_arrs = [[1,2,3], [4,5,6], [7,8,9]]

arr_of_arrs.each do |arr|
  arr.each do |num|
    puts num * num
  end
end

arr_of_arrs.flatten.each do |num|
  puts num * num
end

# HASH

# use {} to create Hashes
rick = {
  "name" => "Rick",
  "species" => "Human",
  "age" => 60,
  "place of origin" => "Earth (Dimension C-137)"
}

# use [] to read values by their keys
rick["name"] # return "Rick"

# use [] with = to write to a hash
rick["main voice actor"] = "Justin Roiland"

# Write a hash that stores three car brands as keys and one car model as values

cars = {
  "Toyota" => "Camry",
  "Tesla" => "Roadster",
  "BMW" => "i8"
}

# Write a hash that contains three Canadian provinces as
# keys and their capitals as values. Then loop through
# it and print each province and its capital.

provinces = {
  'BC' => 'Victoria',
  'New-Brunswick' => 'Frederiction',
  'Newfoundland' => 'Saint Johns'
}

provinces.each do |key, value|
  puts "#{key}'s capital is #{value}"
end

# Print all the keys in the hash above and all the members of the value arrays.
# For example:
# BC: Richmond, Vancouver

my_hash = {
  'BC' => ['Vancouver', 'Richmond'],
  'AB' => ['Edmonton', 'Calgary']
}

my_hash.each do |key, val|
  puts "#{key}: #{val.join(', ')}"
end

# How could we represent a list of students with their name, ages and hobbies
students = [
  { "name" => "Rick", "age" => 60, "hobbies" => ["Chaos", "Science", "Dimensional Travel"]},
  { "name" => "Morty", "age" => 14, "hobbies" => ["Avoiding Rick"] }
]

# SYMBOLS
# Symbols can be used as keys in hashes. They're more much memory efficient
course_info = {
  :name => 'CodeCore Bootcamp',
  :length => '9 weeks',
  :location => 'Vancouver'
}
# 👇 syntax sugar for the above 👆 (they're identical)
course_info = {
  name: 'CodeCore Bootcamp',
  length: '9 weeks',
  location: 'Vancouver'
}

things = ["hello", "greetings", "ohayou", "yo"]

things_in_a_hash = {}

things.each do |val|
  things_in_a_hash[val.to_sym] = val.size
end

things_in_a_hash






##
