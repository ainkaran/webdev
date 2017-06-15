# puts "What's your name?"
# print "> "
#
# name =gets.chomp
#
# puts "Your name is #{name}!"


# puts "What's your first name?"
# print "> "
#
#
# first_name =gets.chomp
#
#
# puts "What's your last name?"
# print "> "
#
# last_name =gets.chomp
#
# puts "Your name is #{first_name} #{last_name}!"


# puts "What's your first name?"
# print "> "
#
#
# first_name =gets.chomp
#
#
# puts "What's your last name?"
# print "> "
#
# last_name =gets.chomp
#
# puts "Your name is #{first_name.capitalize} #{last_name.capitalize}!"


# puts "What's your first name?"
# print "> "
#
#
# first_name =gets.chomp.reverse
#
# puts "Your name is #{first_name}!"




# puts "Enter of your car"
# print "> "
#
# year = gets.chomp.to_i
#
# current_year = 2017
#
# response = if year == current_year
#   'New'
# elsif year > current_year
#   'Future'
# elsif year < current_year
#   'Old'
# else
#   'Very old'
# end
#
# puts "Your name is #{response}!"



# puts "Enter of your car"
# print "> "
#
# year = gets.chomp.to_i
#
# current_year = 2017
#
# puts 'New'if year == current_year
#
# elsif year > current_year
#
# elsif year < current_year
#   'Old'
# else
#   'Very old'
# end
#
# puts "Your name is #{response}!"

# i=0
# while i <= 50 do #(optional)
#   print "#{i} "
#   i += 1
# end


# puts "Enter a number"
# print "> "
#
# number = gets.chomp.to_f
#
# # current_year = 2017
#
# i=0
# while i <= number do #(optional)
#   puts  "Hello world\n"
#   i += 1
# end


# puts "Enter a number"
# print "> "
#
# number = gets.chomp.to_i
#
# # current_year = 2017
#
# i=0
# loop do #(optional)
#   puts  "#{number}*#{i} = #{i*number}"
#   i += 1
#   break if i == 10
# end



# puts "Enter a number"
# print "> "
#
# number = gets.chomp.to_i
#
# # current_year = 2017
#
# i=0
# while i < 30 do #(optional)
#   i += 1
#   print number.to_s if number%2 != 0
# end


#
# puts "Enter a number"
# print "> "
#
# number = gets.chomp.to_i
#
# # current_year = 2017
#
# for i in (number..100) do #(optional)
#   print "#{i}"
# end


# puts "Enter a number"
# print "> "
#
# number = gets.chomp.to_i

# current_year = 2017

# for i in (number..100) do #(optional)
#
# if (i%3 == 0) && (i%5 == 0)
#       print "FIZZBUZZ"
# elsif i%3 == 0
#     print "FIZZ"
# else i%5 == 0
#     print "BUZZ"
#
# end
# end


#
# for i in 1..100 do
#   # puts i
#   out = ''
#   out += 'FIZZ' if i % 3 == 0
#   out += 'BUZZ' if i % 5 == 0
#   puts out.length
#   out += i.to_s if out.length == 0
#
#   puts out
# end



# print "Give me a number: "
# input = gets.chomp.to_i
#
# if input < 100
#   # print from the input up to 100
#   for number in input..100
#     puts number
#   end
# else
#   # print from the input down to 100
#   while input >= 100
#     puts input
#     input -= 1
#   end
# end



# Assignment: [lab] Command line quiz
# print "How many sides does a hexagon have?"
# print "1- five\n 2- six\n 3- seven"
# print "> "
# number1 = gets.chomp.to_i
#
# print "How many sides does a triangle have?"
# print "1- three\n 2- six\n 3- four"
# print "> "
# number2 = gets.chomp.to_i
#
# print "How many sides does a square have?"
# print "1- three\n 2- six\n 3- four"
# print "> "
# number3 = gets.chomp.to_i
#
# i=0
# score = 0
# # while i < 3 do
#   if number1 == 2
#     score += 1
#   end
#
#   if number2 == 1
#     score += 1
#   end
#
#   if number3 == 3
#     score += 1
#   end
# # end
#
# puts "You scored #{((score.to_i/3.0)*100).floor}%, you got #{score} out of 3 questions correctly."



#Assignment: [lab] Print letters


# letters = ('a'..'z').to_a
#
# i = 0
# while i < 26 do
#   j=0
#   print_out = ''
#
#   while j <= i do
#     print_out += letters[i]
#     j += 1
#   end
#
# print_out += "\n"
# print "#{print_out}"
# i += 1
#
# end



# print "Give me a number: "
# input = gets.chomp.to_i
#
# if input < 100
#   # print from the input up to 100
#   for number in input..100
#     puts number
#   end
# else
#   # print from the input down to 100
#   while input >= 100
#     puts input
#     input -= 1
#   end
# end



# print "Enter a number"
# print "> "
#
# number = gets.chomp.to_i
#
#
# letter = 'o'
#
# i = 0
# while i < number do
#   j=0
#   print_out = ''
#
#   while j <= i do
#     print_out += letter
#     j += 1
#   end
#
# print_out += "\n"
# print "#{print_out}"
# i += 1
#
# end



# puts 'Please Enter a number'
#
# numbers = gets.chomp.to_i
#
# os = 0
# spaces = numbers;
#
# while os < numbers
#   spaces.times {print " "}
#   os.times {print "o "}
#   print "\n"
#
#  spaces -= 1
#   os += 1
# end

# def pyramid
# num.times {|n| puts (0..n).map {|e| 'o'}.join(" ").center(num * 3)}
# end
#
# pyramid 10

# day6

a = []

# if (i%3 == 0)
#       a << "FIZZ"
# if i%5 == 0
#     a "BUZZ"
# else i%5 == 0
#     print "BUZZ"
# end
# end
#
#
#
#
#
# newArr = []
# for i in 1..100 do
#   # puts i
#   out = []
#   out += ('FIZZ') if i % 3 == 0
#   out += ('BUZZ') if i % 5 == 0
#   puts out.length
#   out += i.to_s if out.length == 0
#
#   a << out
#  end
# puts newArr.inspect



a = [1, 2, 3, 4, 5]

a.each do |value|
  puts value*value
end

a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


a.each do |array|
  array.each do |arr|
    puts arr*arr
  end
end
use flatten



names = []

loop
  puts "Name pls"
  print "> "
  names << gets.chomp

  break if name.downcase == 'exit'
  names << name
end

puts names.inspect



words = [
  ['john', 'steve', 'jen'],
  ['ate', 'sat on', 'bought'],
  ['an apple', 'the couch', 'a toothbrush']
]

senences = []

words.each do |word|
  word.each.with_index do |v, i|
  sentence[i] = if sentence[i]
    sentences[i] += word[i]
  else
    words[i]
  end
end
end


print "Enter a sentence"
print "> "
sentences = gets.chomp.split.map {|word| word.capitalize}.join(' ')



%w short hand for creating an array


students = %w(Ainkaran Allain Amir Colin Devansh Jackie Kyle Michael Mohammed Ozge Roy
 Samuel Sanny Shaggy Jacky Sid Srinivas)

result = []

students.each do |student|
  result << student.length
end

print result

new_result = students.map { |student| student.length }
print new_result

fancy_result = students.map(&:length)
print fancy_result


array = [[2,3,4], [5,6,7], [6,7,8]]

array.map do |x|
  x.map { |y| y **2 }
end


use flatten
each_slice(3)




s = "abcd"
a= a.split(%r{\s*})

newArray = []
a.map do |x|
  newArray = x
end

puts newArray


s = "abcd"
a= s.split(%r{\s*})

newArray = []

a.each.with_index do |x, i|
  unless i == a.length - 1
    newArray << a[i] + a[i+1]
  end
end

puts newArray


s = "HelloDone"
a= s.split(%r{\s*})

newArray = []
a.each.with_index do |x, i|
  newArray << a[a.length-i-1]
end

puts newArray




booksNames = []
loop do
  print "Enter book name"
  print "> "
  booksName = gets.chomp.to_s
  break if booksName.downcase == 'exit'
    booksNames << booksName.split(' ').map{|x| x.capitalize}.join(' ')
end

puts booksNames





loop do
  puts "Give me a name!"
  print ">"
  name = gets.chomp
  break if name.downcase == 'exit'
  names << name
end

puts names.inspect
