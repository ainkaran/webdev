puts "Enter a sentence"

sentence = gets.chomp

characters = sentence.downcase.gsub(" ", "").split ""
#characters = sentence.downcase.gsub(" ", "").chars


count_char = Hash.new(0)
characters.each do |char|

  count_char[char] += 1

end

max_char = 0
letter = ""

count_char.each do |key, value|

  if value > max_char
    max_char = value
    letter = key
  end
end

#most = count_char.values.max

p letter
