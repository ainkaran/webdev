class Rectangle
  attr_writer :width
  attr_writer :height

  def initialize(width, height)
    @width = width
    @height = height
  end

  def area
    @width * @height
  end

  def is_square?
    @width == @height
  end
end

rectangle = Rectangle.new(100_000_000_000, 100)
# rectangle.width = 100_000_000_000
# rectangle.height = 100
puts rectangle.area
puts rectangle.is_square?
