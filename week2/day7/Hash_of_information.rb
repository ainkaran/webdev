=begin
Ask the user for personal information: first name, last name, city of birth and age.
Then store that information in a hash. After that loop through the hash and display the results, for example:

Your first name is Tam.

Capitalize the inputs from the user if they are capitalizable.

=end

loop do

  info_hash = {}

  puts "Enter your first name: "
  first_name = gets.chomp
  info_hash[:first_name] = first_name

  puts "Enter your last name: "
  last_name = gets.chomp
  info_hash[:last_name] = last_name

  puts "Enter your city of birth: "
  city = gets.chomp
  info_hash[:city] = city

  puts "Enter your age: "
  age = gets.chomp
  info_hash[:age] = age

  puts "Type exit once you are done"
  done = gets.chomp



    p "Your first name is #{info_hash[:first_name]}."
    p "Your last name is #{info_hash[:last_name]}."
    p "Your city is #{info_hash[:city]}."
    p "Your age is #{info_hash[:age]}."

    break if done.downcase == 'exit'
end
