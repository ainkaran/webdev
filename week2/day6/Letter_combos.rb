s = "abcd"
a= s.split(%r{\s*})

newArray = []

a.each.with_index do |x, i|
  unless i == a.length - 1
    newArray << a[i] + a[i+1]
  end
end

puts newArray
