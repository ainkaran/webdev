s = "HelloDone"
a= s.split(%r{\s*})

newArray = []
a.each.with_index do |x, i|
  newArray << a[a.length-i-1]
end

puts newArray
