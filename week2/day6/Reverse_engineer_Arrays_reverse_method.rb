# Write a code that takes an array and returns the reverse of an array, your code should take an array:
array = [1,2,3,4]

# [4,3,2,1]
newArray = []

array.each.with_index do |x, i|

  j=i+1
  newArray << array[-j]

end

print newArray
