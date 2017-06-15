# Ruby Arrays Summary Notes

Arrays are used to store a collection of objects.

To define an empty array you do:

```ruby
my_array = []
```
You can store any type of object in an array including other arrays:
```ruby
my_array = [1, "I'm a string", false, nil]
a = [[1,2,3], true, "Hey", "Drew"]
```
Arrays are ordered so you can access each element by its index using square brackets. Array indexes start with 0

```ruby
my_array = ["Hello World", 1, 4, true]
my_array[0] # Hello World my_array[2] # 4
```
# Multi-dimensional array
Arrays that are composed of other arrays are called multi-dimensional arrays:
```ruby
a = [[1,2,3], [1,2,3], [1,2,3], [1,2,3]]
```
## Array methods
There are many methods for arrays that you can find on the [http://rubydoc.org](http://rubydoc.org) website. Here are few useful ones:
### push
The push methods add an element at the end of the array.
```ruby
a = [1,2,3]
a.push(4)
# a now will be: [1,2,3,4]
```
You also use the shovel operator to add an element at the end of an array:
```ruby
a = [1,2,3]
a << 4
# a now will be: [1,2,3,4]
```
### include?
You can check if an array includes a given value using the `include?` method:
```ruby
array = [1,2,3]
array.include?(4) # false
array.include?(2) # true
```
## Iterating through an array
The most common way to iterate through an array is to use the `each` method:
```ruby
my_array = [1, 5, 6, 7]
my_array.each do  |x|
  y = x * 2
  puts y
end
```
## Generating an array from an array
You can generate an array from a given array using the `map` method:
```ruby
my_array = [1, 2, 3]
new_array = my_array.map  { |x| x * x }
# new_array will be [1, 4, 9]
```
