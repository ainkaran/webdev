require './cookie'
require './oreo'
require './cookie_bag'


# cookie = Cookie.new
# cookie.eat

oreo = Oreo.new
oreo2 = Oreo.new
oreo3 = Oreo.new
oreo4 = Oreo.new

cookie = Cookie.new
cookie1 = Cookie.new
cookie2 = Cookie.new
cookie3 = Cookie.new
cookie4 = Cookie.new

cookie_bag = CookieBag.new
cookie_bag.add_cookie(Oreo.new)
cookie_bag.add_cookie(Oreo.new)
cookie_bag.add_cookie(Oreo.new)
cookie_bag.add_cookie(Oreo.new)
cookie_bag.add_cookie(Cookie.new)
cookie_bag.add_cookie(Cookie.new)
cookie_bag.add_cookie(Cookie.new)
cookie_bag.add_cookie(Cookie.new)

cookie_bag.info

cookie_bag.take_cookie
cookie_bag.take_cookie
cookie_bag.take_cookie

cookie_bag.info
# p cookie_bag



#
