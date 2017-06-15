# Take a sentence from the user and then print every word in that sentence
# capitalized. Use the `map` method.

puts "Give me a sentence!"
print ">"

puts gets.chomp.split.map{ |word| word.capitalize }.join(' ')
