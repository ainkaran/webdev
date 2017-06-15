# Generate sentences in order from the array of arrays above.
# E.g: John ate an apple

generator = [
  ['john', 'steve', 'jen'],
  ['ate', 'sat on', 'bought'],
  ['an apple', 'the couch', 'a toothbrush']
]

sentences = []

generator.each do |words|
  words.each.with_index do |word, i|
    sentences[i] = if sentences[i]
      sentences[i] += ' ' + words[i]
    else
      words[i]
    end
  end
end

# puts sentences

20.times do
  puts generator.map{ |words| words.sample }.join(' ')
end





##
