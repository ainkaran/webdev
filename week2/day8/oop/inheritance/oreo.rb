require './cookie'
# load './cookie.rb'

# oreo has sugar and flour as well, so why don't we inherit from cookie
class Oreo < Cookie
  attr_accessor :filling

  def eat
    # super # call the original method from our parent
    puts "break it apart"
    # super # call the original method from our parent
    puts "dip in milk"
    super # call the original method from our parent

  end
end
