# FizzBuzz: Write a piece of code that adds 1 to 100 to an array and if the
# number is divisible by 3 then adds FIZZ and if it’s divisible by 5 adds BUZZ
# and if it’s divisible by both adds FIZZBUZZ

puts "What should replace 'FIZZ'?"
print ">"
fizz = gets.chomp

puts "What should replace 'BUZZ'?"
print ">"
buzz = gets.chomp


newArr = []
for i in 1..100 do
  out = ''
  out += fizz if i % 3 == 0
  out += buzz if i % 5 == 0
  out += i.to_s if out.length == 0
  newArr << out
  # newArr.push out
end

puts newArr.inspect
