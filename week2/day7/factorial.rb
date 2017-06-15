=begin
Write a method factorial that takes one argument and returns the factorial value of that number.
In math, factorial for a number n is the product of the numbers from 1 to the number n.
For instance, factorial for 5 will be: 5 * 4 * 3 * 2 * 1.
=end

# def factorial(number)
#     puts number
#     yield(number) if block_given?
# end

def factorial(number)
  i = 1
  result = number
  while number > i
    result = result * i
    i += 1
  end
  result
end
p factorial(6)
