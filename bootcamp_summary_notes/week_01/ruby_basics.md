# Ruby Basics Summary Notes
​
## What is Ruby
General Purpose Programming Language: meaning it can be used for a variety of purposes including scripting, web development and desktop development.
Interpreted language: meaning you can run instructions directly without the need for compilation
Object Oriented: meaning you can model your program in classes and objects.
​
## Running Ruby
​
IRB: Interactive Ruby Shell
​
```bash
irb
```
​
# Printing
​
You can print stuff to the console in Ruby by running:
```ruby
print "Hello Programming Fundamentals Students"
```
​
## Getting User's Input
​
You can get users input by simply using the gets method. We use chomp to remove the return line character at the end of it.
​
```ruby
user_input = gets.chomp
```
​
## Running Ruby Files
​
You can run ruby files by saving the file with .rb extension (for instance hello.rb and then executing:
```shell
ruby hello.rb
```
​
## comments in Ruby
​
```ruby
# print "this line will not print anything because it's commented out"
print "this line will print because it's not commented out"
```
​
## Variables
Variables are at the code of most programming languages as we need them to display stuff and manipulate data.
​
### Setting variables
​
We set variables in Ruby by simple giving it a name and then using the = operator
​
```ruby
my_first_variable = "Hello Class!"
```
## Duck typing
This means that we don't have to specify the type of variable we're creating. The word duck came from: if it looks like a duck, walks like a duck and quacks like a duck then it must be a duck:
​
```ruby
a = "this is a string"
b = true
c = 100
```
## Snake case for variables
​
When naming a variable make sure to follow the convention of making it all small letters and use underscore _ instead of spaces:
​
```ruby
MyVar = "hello" # DON'T start variables with capital letter, this will reserver for other things as we will see later
myvar = true    # acceptable but harder to read so it's better to use underscore for spaces
my_var = 100    # this is a good variable name 1myvar = "aaa" # this will not work, variable names should start with letters
```
​
## Everything is an object in Ruby
​
Everything in Ruby is an object. This includes numbers, string, arrays, hashes..etc. In many other programming languages including object oriented ones, numbers for instance are treated as basic or primitive types different from classes and objects. This is why you can call .class on any object and it should return something to you.
​
```ruby
1.class # => Fixnum
"abc".class # => String
true.class # => TrueClass
```
​
## Strings
You define a string in Ruby by simply putting quotes around the text. You can use single or double quotes in Ruby to specify strings as in:
​
```ruby
my_first_string = "Hello There!"
my_second_string = 'How are you?'
```
### String Interpolation
This is a way to insert a variable or expression within a string in Ruby as in:
```ruby
name = "Tam"
greeting = "Hello #{name}" # greeting will be: Hello Tam
```
Please note String interpolation only works with double quotes.
​
## Methods on Strings
You can call a method on Ruby strings using the `.` as in:
```ruby
name = "tam"
puts name.capitalize
```
In this case capitalize will return a copy of the content of `name` variable with first letter upcased and the rest of the letter downcased. If you want to find out about other methods that you can call, you can google `ruby docs strings`. The first results is likely to be from `ruby-doc.org` which is what you want to be looking in. Here is a link for the String docs for Ruby version 2.2.0 [http://ruby-doc.org/core-2.2.0/String.html](http://ruby-doc.org/core-2.2.0/String.html). Make sure to be looking up the same or a very close version to the Ruby version you're using.
​
## Numbers & Math in Ruby
​
### Fixnum vs. BigNum vs. Float
​
Fixnum is used for smaller numbers. BigNum is using for big numbers. Float is used for decimal point numbers.
​
```ruby
100.class # => Fixnum
10000000000000000000.class # => Bignum
1.0.class # => Float
```
## Converting Strings to numbers
​
You can convert a string to numbers by simply using `to_i` (to integer) or `to_f` (to float):
```ruby
"1000".to_i # 1000
"2000".to_f # 2000.0
```
## Math: Operators: `(+)` `(-)` `(*)` `(/)` `(**)` `(%)`
​
the `+`, `-`, `*` and `/` operators can be used for normal math operations. The `**` operator gives you the power of a number and the `%` operator gives your the remainder:
​
```ruby
5 * 2  # => 10
10 - 3 # => 7
14 + 3 # => 17
15 / 5 # => 3
2 ** 3 # => 8
9 % 4  # => 1
```
​
## true and false in Ruby
​
In Ruby, true and false are used mainly to control flow. They are instances of `TrueClass` and `FalseClass`. When we use operators the result will normally be a true or false which will help us control flow and decide what path to follow
​
### `&&` Operator
​
This is used to know whether both things passed are true so unless both sides are true your will get false
```ruby
true && false  # => false
false && false # => false
true && true   # => ture
```
### `||` Operator
​
This is used to know whether either things passed are true so unless both sides are false your will get true
```ruby
true || false  # => true
false || false # => false
true || true   # => ture
false || true  # => ture
```
### > , >=, <, <= Operators
​
These will return true or false based on the outcome:
```ruby
1 > 2  # => false
1 > 0  # => true
1 >= 1 # => true
2 <= 2 # => true
2 <= 3 # => true
```
### == Operator
​
\Checks if two objects are the same or now:
```ruby
1 == 1        # => true
1 == 4        # => false
"Hi" == "Hi"  # => true
"Hi" == "Hey" # => false
```
​
### != Operator
​
Checks if two variables are the same or now:
```ruby
1 != 1        # => false
1 != 4        # => true
"Hi" != "Hi"  # => false
"Hi" != "Hey" # => true
```
### Using parentheses
​
In Ruby, as in most programming languages, the expressions inside parentheses from the deepest level out
```ruby
(true && (true || (9 > 10))) && false
```
​
## Flow Control
​
### if
​
If will execute whatever is inside it if the expression returns true.
​
```ruby
if 9 > 3
  print "9 is actually greater than 3"
end
```
​
### Indentation
​
Although indenting code is not required in Ruby, it's very highly recommended. It makes code much more readable. So anything inside the if block of code should be indented. You should use two space for one level of indentation. Most text editors allow setting that by default so when you hit "tab" it will auto indent by two spaces.
​
### Optional Parentheses
​
Parentheses are optional in many situations in Ruby. For instance, if you have only one condition, it's possible to skip the parentheses and it's actually quite common. However, if you have a more complicated expression, it's recommended that you use parentheses to make it more readable
​
```ruby
a = 10
if a > 5
  print "Hey a is greater than 5"
end
b = 14
c = 2
if ((a < 5) || b > 15) && c == 2
  print "Hello world!"
end
```
​
### else
​
When you need to execute another block of code if the expression is not true then you use else with your if:
```ruby
a = 1000
if a > 10000
  print "a is big!" else print "a is small"
end
```
### elsif
​
If you have multiple expressions that you need to evaluate then you should use elsif. Notice Ruby doesn't have a middle "e" in elsif :
```ruby
distance_to_tim_hortons = 0.5
distance_to_starbucks = 1
if distance_to_tim_hortons < 1
  print "Let's get Timis"
elsif distance_to_starbucks < 1
  print "let's get Starbucks"
else
  print "let's do push ups"
end
```
### unless
​
You can use unless as it sounds! if you want to do something if a condition is not met then you use it:
```ruby
time_now = 12
unless time > 12
  print "keep learning Ruby!"
end
```
​
## Loops
​
### While loop
​
You use loops when you want to repeat the same operation numerous times. The most common loop is while which will keep executing the code while the condition given is still true:
```ruby
counter = 1
while counter < 11
  print "I'm at #{counter}"
  counter = counter + 1
end
```
### Be aware of infinite loops
​
If you put a condition that will always be true then the piece of code will keep executing until you program crashes.
```ruby
counter = 10
while counter > 1
  print "I'm at #{counter}"
  counter = counter + 1
end
```
Your program will keep executing and you may need to stop it by pressing `Ctrl + C`. It's also common if you don't put your condition in there for instance:
```ruby
counter = 10
while counter > 1
  print "I'm at #{counter}"
end
```
### Until Loop
​
Until loops works the opposite of While loop. The code will keep executing until the condition is met:
```ruby
counter = 1
until counter > 5
  print "your are at #{counter}"
  counter += 1
end
```
### For Loop
​
You use for loops when you want to loop through a specific range of numbers as in:
```ruby
for number in 1...10
  puts num
end
```
### 1...10 vs. 1..10
​
There are two ways to create number ranges, one with two dots and the other with three dots. The two-dot one include the last number and the three-dot one will not.
