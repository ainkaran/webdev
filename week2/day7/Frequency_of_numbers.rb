# #Given an array of number such as:
# array = [1,2,3,4,4,4,2,3,3,3]
# #Write a piece of code that will generate a hash of frequencies that looks like:
# #{1 => 1, 2 => 2, 3 => 4, 4 => 3}
# #Stretch: Attempt to do the exercise in one line of code using methods like `each_with_object`.
#
# # newArray = array.split("")
# newHash = Hash.new(0)
#
# array.each do |value|
#   newHash[value] += 1
#
# end
#
# puts newHash



# # #Given an array of number such as:
array = [1,2,3,4,4,4,2,3,3,3]

# #Stretch: Attempt to do the exercise in one line of code using methods like `each_with_object`.
newHash = Hash.new(0)
array.each_with_object(newHash) {|value, memo| memo[value] += 1}

puts newHash
