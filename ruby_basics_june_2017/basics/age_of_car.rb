puts "What is the year of your car? 🤖"
print "> "

year = gets.chomp.to_i

# in ruby, if conditions are expressions. they return
# the value of the block (the last line) that was executed
# this allows to assign the result of a if to a variable
=begin
response = if year > 2018
  'future'
elsif year >= 2017
  'new'
elsif year > 2012
  'old'
else
  'very old'
end
=end

if true
  if false
  end
end

print 'future' if year > 2018
print 'new' if year >= 2017 && year <= 2018
print 'old' if year > 2012 && year < 2017
print 'very old' unless year > 2012
print 'very old' if not year > 2012









##
