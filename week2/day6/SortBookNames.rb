booksNames = []
loop do
  print "Enter book name"
  print "> "
  booksName = gets.chomp.to_s
  break if booksName.downcase == 'exit'
    booksNames << booksName.split(' ').map{|x| x.capitalize}.join(' ')
end

puts booksNames
