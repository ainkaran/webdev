array = [[2,3,4], [5,6,7], [6,7,8]]

array.map do |x|
  puts x.map { |y| y **2 }
end
