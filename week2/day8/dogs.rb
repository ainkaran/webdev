=begin
Make two classes dog and bones. The dog class must have an initialize method that takes dog's colour and type.
The bone must have an initialize method that assigns a size for the bone.

The dog class must have a give method that takes a bone object and adds it to an array of bones for the dog.
The dog can take a maximum of three bones so if you give it more than three it will will print,
I have too many bones.

The dog class must have an eat bone method so that when you call it it removes a bone from the array of bones
and prints "yummy! I ate 'big' bone" the 'big' part comes from the size attribute of bone.
=end

require './bone'
# load './cookie.rb'

class Dogs

  attr_accessor :color #create the getter and setter
  attr_accessor :type #create the getter and setter
  # attr_accessor :bones #create the getter and setter

  def initialize(color, type)
    # instance variable - this variable is accessible all throughout our class
    # super(size)
    @color = color
    @type = type
    @bones = []
  end

  def give(bone)
    if @bones.length < 6
      @bones.push(bone)
    else
      puts "Too many Bones"
    end
  end

  def eat_bone
    @bones.pop
    bone = @bones.pop
    puts "yummy! I ate 'big' bone, size, #{bone.size}"
  end

end


dog = Dogs.new('black', 'lab')
b1 = Bone.new('S')
b2 = Bone.new('M')
b3 = Bone.new('L')
b4 = Bone.new('XL')
b5 = Bone.new('XXL')
dog.give(b1)
dog.give(b2)
dog.give(b3)
dog.give(b4)
dog.give(b5)

dog.eat_bone
