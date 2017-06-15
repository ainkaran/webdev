=begin
You can sort an array in Ruby using the `.sort` method.
There are many algorithms in Computer Science for sorting arrays.
We well learn some of them later. Without looking up any of those algorithms online,
come up with your own sorting algorithm (without using the `.sort` method).
You will be able to compare yours with others later.
To emulate an unsorted array, you can use the `.shuffle` method as in:
=end

array = (1..15).to_a.shuffle
# Your sorting code here

newArray = []
array.each.with_index do |x, i|
  n=i+1
  array.each.with_index do |y, j|

    if array[i] < array[n]
      newArray << array[i]
    else
      newArray << array[n]
    end

end

print newArray # array must sorted here: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
