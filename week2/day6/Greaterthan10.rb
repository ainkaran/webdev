my_array = [1,4,"abhjgajhha", 5,23,14,"Hello there", false, nil]


newArray = []
my_array.each.with_index do |x, i|

  if x.is_a? Integer
    if x > 10
      newArray << x
    end
  end
end

puts newArray
