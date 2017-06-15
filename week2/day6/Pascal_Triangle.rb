puts 'Please Enter a number'

number = gets.chomp.to_i

number.times {|n| puts (0..n).map {|e| 'o'}.join(" ").center(number * 3)}


# pyramid 10
