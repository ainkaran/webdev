# global variable, can be defined anywhere, can be accessed anywhere
$company = "Nestle"

class Cookie
  # class variable
  @@color = "light brown"

  # getter for the class variable
  def self.color
    @@color
  end

  # setter - allows us to change the value of a class variable
  def change_color(color)
    @@color = color
  end

  # class method
  def self.info
    puts "Yup, this is a cookie!"
    puts "Made by #{$company}"
  end

  # attr_reader :sugar
  # attr_writer :sugar
  attr_accessor :sugar # create the getter and setter

  def sugar=(sugar_amount)
    if (sugar_amount < 50)
      @sugar = sugar_amount
    end
  end

  # when we run Cookie.new this gets called
  def initialize(sugar_amount=0, flour_amount=0)
    # instance variable - this variable is accessible all throughout our class
    @sugar = sugar_amount
    @flour = flour_amount
    puts "Constructing a new cookie with #{sugar_amount}g of sugar and #{flour_amount}g of flour."
    puts "Made by #{$company}"
  end

  # getter
  # def get_sugar_amount
  #   @sugar
  # end
  #
  # # setter
  # def set_sugar_amount(sugar)
  #   # if sugar < 50
  #     @sugar = sugar
  #   # end
  # end

  # create methods - functions within a class
  def eat
    bake
    puts "#{@sugar}g of sugar, #{@flour}g of flour. munch, munch, munch"
    puts "Made by #{$company}"
  end

  private

  def bake
    puts "#{@sugar}g of sugar, #{@flour}g of flour, the cookie is baking ..."
    puts "Made by #{$company}"
  end
end

# temporary, may get rid of this before submitting/committing
# test code
# list_of_students = []
# # i am creating a variable and assigning an instance of the Array class
# list_of_students = Array.new
# # calling the push method, for our instance of the array class
# list_of_students.push "John"
# list_of_students.push "Jane"
# list_of_teachers = Array.new
# list_of_courses  = Array.new
#
# frequencies = {}
# # i am creating a variable and assigning an instance of the Hash class
# frequencies = Hash.new

# class Hash
#   def initialize(default=0)
#     this.default = default
#   end
# end

# postal_code = Hash.new
# dictionary  = Hash.new
#
# chocolate_chip_cookie = Cookie.new(20, 10)
# puts Cookie.color
# # chocolate_chip_cookie.bake
# chocolate_chip_cookie.eat
# oreo_cookie = Cookie.new(15, 10)
# puts Cookie.color
# oreo_cookie.change_color("black and white")
# puts Cookie.color



oatmeal_cookie = Cookie.new(5, 10)
puts oatmeal_cookie.sugar # calls the getter
oatmeal_cookie.sugar = 45 # calls the setter
puts oatmeal_cookie.sugar # calls the getter
# puts Cookie.color

# is there a way to list all instance variables within class/instance
p oatmeal_cookie

# Cookie.info

puts "Made by #{$company}"



#
