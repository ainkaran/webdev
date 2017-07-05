# Assignment: [Assignment to submit] Ruby Exercises

# ==============================================================================
# Question 1
# ==============================================================================

# helper_methods.rb
module HelperMethods

  def titleize(str)

    # Ruby has several shortcuts for creating literals

    # for example, an array of words can be written:
    # http://ruby-doc.org/core-2.4.1/doc/syntax/literals_rdoc.html#label-Percent+Strings

    # words_to_ignore = %w(in the of and or from)


    words_to_ignore = ["in", "the", "of", "and", "or", "from"]
    str.split(' ').each { |w| w.capitalize! if ! words_to_ignore.include? w}.join(' ')

    # The each iterator returns the original enumerable (hash or array), and discards the results of the block.
    # It is meant to be used for side effects. This code works, because str.split() creates an intermediate array,
    # and capitalize! modifies-in-place each string in that array, and each returns that array.

    # A more natural way to write this would be with map, which is used to transform each element of an enum:

    # str.split(' ').map{ |w| words_to_ignore.include?(w) ? w : w.capitalize }

  end

end


# books.rb
load './helper_methods.rb'

class Books
  attr_accessor :name
  include HelperMethods

  def initialize(name)
    # instance variable - this variable is accessible all throughout our class
    @name = name
  end

end

# test
hp = Books.new("Fiction")
hp.name = "harry potter"
str = "harry potter"
puts hp.titleize(str)


# about_books.rb
load './helper_methods.rb'

class AboutBooks
  attr_accessor :details
  extend HelperMethods
end

# test
str = "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles, a reference term that means non-magical people."
puts AboutBooks.titleize(str)

# ==============================================================================
# Question 2
# ==============================================================================

# book.rb
class Book
  attr_accessor :title, :chapters
  # include HelperMethods

  def initialize(title)
    # instance variable - this variable is accessible all throughout our class
    @title = title
    # @chapters = chapters
    @chapters = []
  end


  def add_chapter(str)
    @cn = []
    @chapters.push(str)

  end

  def chapters

    @chapters.select { |s| " "}

  end

end

# tests
book = Book.new("T")
book.title = "My Awesome Book"
book.add_chapter("My Awesome Chapter 1")
book.add_chapter("My Awesome Chapter 2")
book.add_chapter("My Awesome Chapter 3")

puts book.chapters
# This should print:
# Your book: My Awesome Book has 2 chapters:
# 1. My Awesome Chapter 1
# 2. My Awesome Chapter 2

# ==============================================================================
# Question 3
# ==============================================================================

# is_prime.rb
def is_prime (number)

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

puts is_prime(4)


# ==============================================================================
# Question 3
# ==============================================================================

# major_cities.rb
major_cities = {
  BC: ["Vancouver", "Victoria", "Prince George"],
  AB: ["Edmonton", "Calgary"],
  ON: ["Toronto", "Ottawa", "London", "Kingston", "Brampton"]
}

major_cities.each do  |province, city|

    puts "#{province} has #{city.length} main cities: #{city.join(', ')}"

end

major_cities.each do  |province, city|

    puts "#{province} has #{city.length} main cities: #{city.first(city.length-1).join(', ')}, #{city.last(1).join()}"

end


# [Stretch]: Make sure that there is an and before the last one:
# BC has 3 main cities: Vancouver, Victoria and Prince George
# AB has 2 main cities: Edmonton and Calgary

major_cities.each do  |province, cities|

 cities_parts = [cities.last]
  puts “cities_parts: #{cities_parts.inspect}”
  if cities.length > 1
    cities_parts.unshift(cities[0..-2].join(‘, ‘))
  end

  cities_str = cities_parts.join(’ and ‘)
   puts “#{province} has #{cities.length} main cities: #{cities_str}”

end
