def is_prime (number)

# result = ""

  if number <= 1
    false
  else

    for p in 2..(number-1)

      if ((number % p) == 0)
        return false
      end
    end

    return true
  end

end

puts is_prime(-1)


# def titleize(str)
#
#   words_to_ignore = ["in", "the", "of", "and", "or", "from"]
#
#   str.split(' ').each { |w| w.capitalize! if ! words_to_ignore.include? w}.join(' ')
#
# end
#
# str = "I am in the world"
# puts titleize(str)



# alternative methods
# value = "United state of america"
# words_to_ignore = Hash[%w[the of].map{|w| [w, w]}]
# new_string = value.gsub(/\w+/){|w| words_to_ignore[w] || w.capitalize}
#
# value = "United state of america"
# words_to_ignore = ["the","of"]
# new_string = value.split(' ').map do |w|
#   unless words_to_ignore.include? w
#     w.capitalize
#   else
#     w
#   end
# end
# new_string[0].capitalize!
# new_string = new_string.join(' ')
