# Debugging - Summary Notes

## Ruby

### Byebug

Byebug is a simple to use, feature rich debugger for Ruby 2.

#### Installation

It comes bundled in all new Rails' projects by default. If you want to use it in a non-Rails project, add it to your Gemfile.

In your `Gemfile` add the following:

```ruby
# Gemfile
gem 'byebug'
```
Then, run `bundle install` in your application root folder.

To install `byebug` globally, run `gem install byebug`.

#### Usage

You can run a ruby file with `byebug` instead of `ruby`. For example:

```sh
byebug app.rb
```

When doing so, execution of the file will pause at the first line of code allowing you to use the debugger to navigate code.

To use `byebug` in a non-Rails project, you must require in the file where you would like to run.

```ruby
# Top of file
require 'byebug'
```

*Note: In a Rails project, gems are auto-required. You can skip this step.*

To break with byebug, write `byebug` where you want your program to stop:

```ruby
# Line to stop at
byebug
```

This will work any ruby files in your program including erb files:

```html
<!-- An .erb file -->
<% byebug %>
<!-- Remember, byebug is a ruby method -->
```

#### Commands

The following are some of the commands that you can use during a byebug session:

##### Information
- `b[ack]t[race]` Display stack trace.
- `h[elp] <command-name>` Get help.

##### Navigation

- `c[ontinue] <line-number>` Run until program ends, hits a breakpoint or reaches **line-number** (if specified).
- `n[ext] <number>` Go to next line, stepping over function calls. If **number** specified, go forward that number of lines.
- `s[tep] <number>` Go to next line, stepping into function calls. If **number** is specified, make that many steps.

##### Breakpoints

- `b[reak]` Sets a breakpoint at the current line. These can be conditional: `break if foo != bar`.
- `b[reak] <filename>:<line-number>` Puts a breakpoint at **line-number** in **filename** (or the current file if filename is blank). Again, can be conditional: `b myfile.rb:15 unless my_var.nil?`
- `b[reak] <class>(.|#)<method>` Puts a breakpoint at the start of the **method** in **class**. Accepts an optional condition: `b MyClass#my_method if my_boolean`
- `del[ete] <number>` Deletes breakpoint **number**. With no arguments, deletes all breakpoints.
- `info breakpoints` Show all breakpoints.

##### General
- `q[uit]` Exits Byebug
- `q!` Exits Byebug without confirmation
- `kill` Force quits when `q` doesn't cut it
