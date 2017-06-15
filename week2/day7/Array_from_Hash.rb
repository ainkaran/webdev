=begin
bc_cities_population = {vancouver: 2135201, victoria:  316327, abbotsford: 149855, kelowna: 141767, nanaimo:  88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }

Write a method that takes the hash above and returns an array of the values divided by a 1000 in one line of code.

=end


bc_cities_population.each {|key, value| value.remainder(1000) == 0}

bc_cities_population.each {|value| bc_cities_population.map(&:last) if 2135201.remainder(1000) == 0}


bc_cities_population.each_with_object([]) { |(k, v), array| array += v }

map { |key, value| value }



bc_cities_population.values.each {|key, value| bc_cities_population.values if value==1000000}


bc_cities_population.select { |key, value| value > 100000 }
bc_cities_population.values.select { |value| value % 1000 }


bc_cities_population.values.each {|key, value|}.collect {|x| p x%1000==0}
