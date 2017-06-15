puts "What's your name, human? 🤖"
print "> "
# gets waits for user input in the terminal and returns it
# chomp removes the newline character `\n` at the end of a string
name = gets.chomp.capitalize

puts "Here is your name capitalized, Human! #{name}"
