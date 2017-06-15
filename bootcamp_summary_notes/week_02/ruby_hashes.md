# Ruby Hashes Summary Notes

## What are they

Hashes are data structures that are good when you want to access values by some key rather than index as in arrays. They are sort of like dictionaries.

```ruby
my_cat = {"name" => "grumpy", "job" => "sleeping"}
```
To access an element in a hash use the keys:
```ruby
puts my_cat["name"] # will print: grumpy
```
If you try to access using a key that isn't a key, you get `nil` by default:
```ruby
my_cat["weight"] # will return nil
```
You can add an element to a hash by defining a new key as in:
```ruby
my_cat["color"] = "White"
```
If the key you used already exists in the hash it will override the previous value. Keys in hashes must by unique.
```ruby
my_cat = {"name" => "Grumpy", "color" => "White" }
puts my_cat["color"] # This prints: White
my_cat["color"] = "Red"
puts my_cat["color"] # This prints: Red
```

To create an empty hash you can do it in two ways:

```ruby
my_hash = Hash.new
```
or

```ruby
my_hash = {}
```
You can pass in an optional parameter as a default value when using the syntax with `.new` as in:
```ruby
my_cat = Hash.new("Don't ask!")
my_cat["name"] = "Grumpy" # Adding an element to the empty Hash `my_cat`
puts my_cat["name"] # this prints: Grumpy
puts my_cat["weight"] # this prints: Don't ask!
```
## Iterating through Hashes
You can iterate through hashes using the `.each` method. Similar to an array, except that with Hashes we iterate through key/value pairs as in:
```ruby
my_cat = {"name" => "grumpy", "job" => "sleeping"}
my_cat.each do |key, value|
  puts "key is #{key} and value is #{value}"
end
```
## Hashes with Arrays
Hashes and arrays are both objects as everything else in Ruby. So you can put hashes within arrays and arrays within hashes as in:
```ruby
my_hash = {"abc" => [1, 2, 3], "xyz" => [4, 5]}
my_array = ["abc", {"a" => 1, "b" => 2}, false]
```
## Symbols
Symbols are ruby objects that are similar to strings but they are immutable, faster and use the same spot of memory. For that they are used in situations when we care more about what they refer to rather than the value of the symbol itself. Symbols are used widely in Hashes.

You can define a symbol using `:` before the name of it
```ruby
a = :hello
```
To check that they take the same memory spot, you can try:
```ruby
a = :hello
b = :hello
a == b # will be true
a = "hello"
b = "hello"
a == b # will be false
```
If you have spaces in the symbol name, you can use this syntax:
```ruby
:"symbol with space"
```
You can use them in Hashes as in:
```ruby
user_info {:first_name => "Tam", :last_name => "Kbeili"}
```
Or you can use the shorter syntax (works with Ruby 1.9 or higher):
```ruby
user_info {first_name: "Tam", last_name: "Kbeili"}
```
