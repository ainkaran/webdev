# require './cookie'
# require './oreo'

# load - checks if the class is already loaded
load './cookie.rb'
load './oreo.rb'

class CookieBag
  def initialize
    @cookies = []
  end

  def add_cookie(cookie)
    @cookies.push(cookie)
  end

  def take_cookie
    @cookies.pop
  end

  def info
    puts "There are #{@cookies.length} cookie(s) in the bag"

    # what types of cookies are in the bag as well?
    @cookies.each_with_index do |cookie, index|
      puts "#{index+1}: #{cookie.class}"
    end

  end
end




#
