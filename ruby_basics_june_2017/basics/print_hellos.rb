puts "How many times do want to greet me, human? 🤖"
print "> "
num = gets.chomp.to_i

i = 0
while i < num
  print "Hello World!\n"
  i += 1
end
