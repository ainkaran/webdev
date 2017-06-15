
class Rectangle

  #  attr_reader :model # same as get_model
  #  attr_writer :model # same as set_model
  attr_accessor :width #create the getter and setter
  attr_accessor :height #create the getter and setter

  # when we run Cookie.new this gets called
  def initialize(width, height)
    # instance variable - this variable is accessible all throughout our class
    @width = width
    @height = height
  end

  def area
    puts @width * @height
  end

  def is_square
    @width == @height
  end
end


rectangle = Rectangle.new(0, 0)
rectangle.width = 100
rectangle.height = 100
puts "This shape area is: #{rectangle.area}"
puts "Is this shape square? #{rectangle.is_square}"



# what types of cookies are in the bag as well?
    @cookies.each_with_index do |cookie, index|
      puts "#{index+1}: #{cookie.class}"
    end
