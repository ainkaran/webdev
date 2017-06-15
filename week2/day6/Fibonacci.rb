print "Enter a number"
print "> "
number = gets.chomp.to_i

# a = Array.new(number, 0)

# a = []
# a[0] = 1
# a[0] = 1

newArray = []

number.times do |i|
    # puts i
    if i == 0 || i == 1
      newArray << 1

    else
      newArray << newArray[i-2] + newArray[i-1]
    end



end

puts newArray



print "Enter a number"
print "> "
number = 5

# a = Array.new(number, 0)

# a = []
# a[0] = 1
# a[0] = 1

newArray = []

number.times do |i|
    # puts i
    if i == 0 || i == 1
      newArray << 1

    else
      newArray << newArray[i-2] + newArray[i-1]
    end

end

puts newArray == [1, 1, 2, 3, 6]
