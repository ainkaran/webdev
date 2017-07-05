major_cities = {
  BC: ["Vancouver", "Victoria", "Prince George"],
  AB: ["Edmonton", "Calgary"],
  ON: ["Toronto", "Ottawa", "London", "Kingston", "Brampton"]
}



major_cities.each do  |province, city|

    puts "#{province} has #{city.length} main cities: #{city.join(', ')}"

end

major_cities.each do  |province, city|

    puts "#{province} has #{city.length} main cities: #{city.first(city.length-1).join(', ')}, #{city.last(1).join()}"

end



# [Stretch]: Make sure that there is an and before the last one:
# BC has 3 main cities: Vancouver, Victoria and Prince George
# AB has 2 main cities: Edmonton and Calgary

major_cities.each do  |province, cities|

 cities_parts = [cities.last]
  puts “cities_parts: #{cities_parts.inspect}”
  if cities.length > 1
    cities_parts.unshift(cities[0..-2].join(‘, ‘))
  end

  cities_str = cities_parts.join(’ and ‘)
   puts “#{province} has #{cities.length} main cities: #{cities_str}”

end
