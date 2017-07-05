=begin
Build a simple student database program in the command line that does the following:

When you first start the program it will give you the option to enter commands:

l Display all students in the database with id beside them.

n Enter new student data.

s It will prompt you to display more details about a student by entering its id from the listing in the previous command.

d It will prompt you to delete a student by its id.

When you want to enter a new student (n command), it will prompt you for the following:
name, email, courses (separated by commas).
After that, it will prompt you to enter the grade on every course entered for that student.

At any point, you can type exit to stop the program.

After finishing any command it will go back to step 1, listing all possible commands.

Make sure to use Ruby classes to structure your code.

Consider building a class for the student database that'll have a variety of methods to add
students, display students, etc. The database can be abstracted by an array assigned to an instance variable:

class StudentDB
  def initialize
    @students = []
  end
  # a bunch of other methods
end

A student can also be represented by a class:

class Student
  attr_accessor :id, :name, :email, # etc
  # methods & constructors
end

Consider saving instances of the Student class in the StudentDB's "database".

One last note, avoid getting user data with the class methods. Happy Hunting!

P.S. There are many ways to solve this.

Stretch: Make the data persist after closing the program by using Ruby File class

=end



class Student
  attr_accessor :id, :name, :email, # etc
  # methods & constructors
end
