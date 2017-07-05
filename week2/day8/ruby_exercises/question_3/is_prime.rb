def is_prime (number)

  if number <= 1
    false
  else

    for p in 2..(number-1)

      if ((number % p) == 0)
        return false
      end

    end

    return true

  end

end

puts is_prime(4)
