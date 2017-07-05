module HelperMethods

  def titleize(str)

    words_to_ignore = ["in", "the", "of", "and", "or", "from"]
    str.split(' ').each { |w| w.capitalize! if ! words_to_ignore.include? w}.join(' ')

  end

end

# Ruby coding convention, each of the following classes are in two seperate file
# book.rb, AboutBooks.rb

# class Book
#   attr_accessor :name
#   include HelperMethods
# end
#
# class AboutBooks
#   attr_accessor :details
#   extend HelperMethods
# end

# test
# hp = Book.new
# hp.name = "harry potter"
# b = "harry potter"
# puts hp.titleize(b)
#
# str = "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles, a reference term that means non-magical people."
# puts AboutBooks.titleize(str)

# book = HelperMethods::Book.new
# HelperMethods::titleize
