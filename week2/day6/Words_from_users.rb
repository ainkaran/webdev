=begin
Keep asking user for input and add their input to an array until they type "exit".

After that print out the number of input they've entered and the words. For example print:

You've entered 5 words:

1. Hi
2. Hello
3. Hey
4. What's up?
5. Bye
=end

newArray = []
loop do
  print "enter anything"
  print "> "

  anything = gets.chomp

  break if anything.downcase == 'exit'

  newArray << anything

  newArray.each.with_index do |x, i|
    puts "#{i+1}: #{newArray[i]}"
  end
end
