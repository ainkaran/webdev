# hashes

# contact list
# name: phone number
# nutrition facts for a food item at a resto
# food item
#    fat: value
#    carbs: value
#    calories: value

# dictionary
# pulp: piece of wood soaked in water
# fiction: false piece of literature

# zip codes
# 90210:  Beverly Hills
# [] = array
# {} = hash

# jacob = Hash.new
jacob = {
  age: 38,
  height: 160,
  hobbies: ["running", "cycling", "climbing"]
}

# how do we step through a Hash

jacob.each do |key, value|
  # if the value is an array, please print out all values in the array
  # if the value is not, just print out the single value
  if value.is_a? Array
    puts "The #{key} property has the values of: "

    value.each do |val|
      puts val
    end

  else
    puts "The #{key} property has the value of #{value}"
  end
end

# "This is the way, step inside."

# which character occurs the most in the sentence
sentence = "This is the way, step inside."
# turn this sentence into a word array
words = sentence.split
# turn this sentence into a character array
# character = sentence.split(/\s/)
characters = sentence.gsub(" ", "").split ""

# [
#   0: "T",
#   1: "h"....
# ]


jacob = {
  age: 38
  "age": 38
}

jacob.age
jacob[:age]
jacob["age"]

to_s # turn something into a string
to_sym # turn something into a symbol

key = "age";
key_symbol = key.to_sym
key = key_symbol.to_s

jacob = {}
jacob["hair_colour"] = "black"
jacob[:eye_colour] = "brown"

# we specify a default to our hash by doing the following
jacob = Hash.new(0)
# or
jacob.default = 0

# turn the character array into a hash
# ["T", "h", "i", "s"....]
sentence = "This is the way, step inside."
# turn this sentence into a character array
# character = sentence.split(/\s/)
characters = sentence.downcase.gsub(" ", "").split ""

frequencies = Hash.new(0)
# frequencies.default = 0

characters.each do |char|
  frequencies[char] += 1
  # frequencies[char.to_sym]
end

p frequencies






#
