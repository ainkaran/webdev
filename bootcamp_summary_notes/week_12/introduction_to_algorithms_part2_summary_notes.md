
## Sorting Algorithms
There are many sorting algorithms available as it's an important to have a a sorted array to search it for instance. Also sorting algorithms can be the topic of interview questions so it's important to be familiar with them. Most programming languages come with array sorting methods so it's less likely you'll ever have to write to your own.

## Insertion sort
Insertion sort works by starting at the beginning of the array then looping through the remaining inserting each new one in it's proper place in the sorted portion of the array. It's somewhat like the natual algorithm you follow when you sort out cards you get in a card game with you hards. Here is a good video to understand how it works: [https://www.youtube.com/watch?v=DFG-XuyPYUQ](https://www.youtube.com/watch?v=DFG-XuyPYUQ).

Here is a sample solution:
```ruby
1.upto(array.length - 1) do |n|
  0.upto(n-1) do |m|
    if array[n] <= array[m]
      element = array.delete_at(n)
      array.insert(m, element)
    end
  end
end
```
Note that the implementation above is just one possible option of many that could be more or less efficient. Insertion sort has a worst and average case of `O(n^2)`. It's best case is `O(n)`. Insertion sort is generally good for lists that have a small number of elements.

## Selection Sort
Selection sort works by starting at the beginning of the array and then build a sorted portion of the array then looping over the remaining elements (unsorted) of the array to find the minimum value then swapping that minimum value with the current value. Here is a video that explains how it works: [https://www.youtube.com/watch?v=f8hXR_Hvybo](https://www.youtube.com/watch?v=f8hXR_Hvybo). 

Here is a sample solution:
```ruby
0.upto(array.length-1) do |n|
  min_index = n
  (n+1).upto(array.length-1) do |m|
    min_index = m if array[m] < array[min_index]
  end
  array[n], array[min_index] = array[min_index], array[n]
end
```
Selection sort has an average and worst case scenario of `O(n^2)`. It's not adaptive so it's not likely to have better performance in other conditions. It's not the most efficient algorithm, useful mostly in situations where you want to minimize the number of swaps.

## Bubble Sort
Bubble sort works by swapping element in an array until you reach end and then doing it again and again until reaching a point when the array is sorted. Here is a video that explains how it works: [https://www.youtube.com/watch?v=8Kp-8OGwphY](https://www.youtube.com/watch?v=8Kp-8OGwphY).

Here is a sample code of it:
```ruby
loop do
  sorted = true
  0.upto(array.length - 2) do |n|
    if array[n + 1] < array[n]
      array[n], array[n+1] = array[n+1], array[n]
      sorted = false
    end
  end
  break if sorted
end
```

Bubble sorts has `O(n^2)` and has a best case scenario of `O(n)` if the array is nearly sorted so that only few elements are swapped.