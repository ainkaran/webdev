puts "Give me a number!"
print "> "

number = gets.chomp.to_i

for i in (number..100).step(5) do
  print "#{i} "
end
