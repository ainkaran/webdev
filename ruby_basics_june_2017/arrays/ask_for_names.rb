# Write code that asks for names and stores them in an array.  Make each name in
# the array capitalized. When ‘exit’ is entered, stop asking for names and print
# the array.

names = []

loop do
  puts "Give me a name!"
  print ">"
  name = gets.chomp
  break if name.downcase == 'exit'
  names << name
end

puts names.inspect
