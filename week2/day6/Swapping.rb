# You can swap elements in array in different way. One way is to delete the element from the a location and insert it in the other. The other one is to store a temporary variable to help you with the swap.
# Run the following code:


1 | require "benchmark"
2 |
3 | array = [34, 24, 45, 6, 6, 77, 19]
4 |
5 | Benchmark.bm do |x|
6 |   x.report do
7 |     30_000_000.times do
8 |       number = array.delete_at(3)
9 |       array.insert(2, number)
10 |     end
11 |   end
12 | end
13 |
14 | Benchmark.bm do |x|
15 |   x.report do
16 |     30_000_000.times do
17 |       temp     = array[2]
18 |       array[2] = array[3]
19 |       array[3] = temp
20 |     end
21 |   end
22 | end

# Which one is more performant? Why?


# Stretch: A third method to swap array's element is by using parallel assignments.
# Parallel assignments seems to be slower than the second method of swapping, run the following code:
1 | Benchmark.bm do |x|
2 |   x.report do
3 |     30_000_000.times do
4 |       array[2], array[3] = array[3], array[2]
5 |     end
6 |   end
7 | end

# Explain why using the parallel assignment method is slower than using a temporary variable method above.
