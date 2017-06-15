=begin
for i in 1..100 do
  if i % 5 == 0 && i % 3 == 0
    puts 'FIZZBUZZ'
  elsif i % 5 == 0
    puts 'BUZZ'
  elsif i % 3 == 0
    puts 'FIZZ'
  else
    puts i
  end
end
=end

for i in 1..100 do
  out = ''
  out += 'FIZZ' if i % 3 == 0
  out += 'BUZZ' if i % 5 == 0
  out += i.to_s if out.length == 0
  puts out
end











##
