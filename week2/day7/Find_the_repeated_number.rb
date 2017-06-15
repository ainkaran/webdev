=begin
You are given an array with numbers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one? Can you think of a way to do it using little extra memory?

Bonus: Solve it in two ways: one using hashes and one without.

=end


numbers = [1, 2, 3, 4, 3, 4, 5, 6, 3, 4]

#p numbers.detect {|value| numbers.count(value) > 1}




#p numbers.select {|value| numbers.count(value) > 1}.uniq



numbers = [1,2,3,4,5,6,7,4,5,10]

# returns the first match
numbers.detect { |value| numbers.count(value) > 1 }

# returns all matches
numbers.select { |value| numbers.count(value) > 1 }.uniq


def find_repeated_number(numbers)
  result_hash = Hash.new(0)

  numbers.each do |value|
    result_hash[value] += 1
  end

  result_hash.max_by { |k, v| v }.first
end

p find_repeated_number(numbers)
