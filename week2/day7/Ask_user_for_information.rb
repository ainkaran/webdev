=begin
Ask the user for the following information: first name, last name and age.

Then ask them for cities they've visited (they can keep entering until they type "done").

Store all the entered data in a hash and then loop through the hash and display results.

=end



# info_hash = {}

info_hash = Hash.new {|key,value| key[value]=[]}
# info_hash = Hash.new()
# info_hash["cats"] << "Jellicle"
# info_hash["cats"] << "Mr. Mistoffelees"

puts "Enter your first name: "
first_name = gets.chomp
info_hash[:first_name] = first_name

puts "Enter your last name: "
last_name = gets.chomp
info_hash[:last_name] = last_name

puts "Enter your age: "
age = gets.chomp
info_hash[:age] = age

loop do
  # done = gets.chomp
  puts "Enter cities you have visited: "
  city = gets.chomp

  # cities = city.downcase.split " "

  if city == 'exit'
    break
  else
    info_hash[:city] << city
  end
end

puts "Your first name is #{info_hash[:first_name]}."
puts "Your last name is #{info_hash[:last_name]}."
puts "Your age is #{info_hash[:age]}."
puts "Cities you have visited: #{info_hash[:city]}."

puts info_hash
