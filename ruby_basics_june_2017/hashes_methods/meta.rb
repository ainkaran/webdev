# meta programming - meta, itself.  code that writes itself
def say_hello
  puts "howdy!"
end

define_method(:say_hi) { puts "hi!" }

def say_hello(greeting)
  puts greeting
end

define_method(:say_hello) { |greeting| puts "#{greeting}" }

code = "3 + 4 + 5 + 6 + 7"
eval(code)
3 + 4 + 5 + 6 + 7

code2 = "Time.now"
code3 = "Symbol.all_symbols"


eval(code)
eval(code2)
eval(code3)






#
