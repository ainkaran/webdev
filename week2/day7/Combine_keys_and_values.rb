=begin
Given a hash:
{:a => "123", :b => "345", :c => "678", :d => "910"}
Write a code that generates an array that combines the keys and values so that the resulting array should be:
["a123", "b345", "c678", "d910"]

=end


combine_hash = {:a => "123", :b => "345", :c => "678", :d => "910"}

newArray = []
combine_hash.each do |key, value|
  newArray << key.to_s + value
end

p newArray
