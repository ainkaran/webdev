puts "Give me a number, human! 🤖"
print "> "

number = gets.chomp.to_f

i = 0
loop do
  i += 1
  puts "#{number} * #{i} = #{i*number}"
  # in ruby, the only values that are considered false are
  # nil and false
  break if i == 10
end
