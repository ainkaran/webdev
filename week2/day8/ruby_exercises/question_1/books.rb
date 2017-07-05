# require './helper_methods.rb'
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
str = "harry potter in the"
puts hp.titleize(str)
