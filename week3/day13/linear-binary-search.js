
// https://rainsoft.io/power-up-the-array-creation-in-javascript/
//let zeros = new Array(5).fill(0);
//zeros; // => [0, 0, 0, 0, 0]
// let zeros = Array.from(new Array(5), () => 0);
// zeros; // => [0, 0, 0, 0, 0]

//let items = Array.from(new Array(5), (item, index) => index + 1);
//items; // => [1, 2, 3, 4, 5]
/*
function* generate(max) {
  let count = 0;
  while (max > count++) {
    yield count;
  }
}
let items = Array.from(generate(5));
items;       // => [1, 2, 3, 4, 5]
let itemsSpread = [...generate(5)];
itemsSpread; // => [1, 2, 3, 4, 5]

*/


/*Jason's solutions
function binarySearch (haystack, needle) {
  // l is the index of the left bound
  let l = 0;
  // r is the index of the right bound
  let r = haystack.length - 1;
  // m will be the index of the middle
  // and, mVal will be the value at that point
  let m, mVal;

  // if the left bound index is ever larger than the right bound index,
  // we're done... we didn't find anything
  while (!(l > r)) {
    m = Math.floor((l + r)/2)
    mVal = haystack[m]

    // return middle index if middle value matches
    // our search target
    if (mVal === needle) {
      return m;
    } else if (needle > mVal) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1
}

orderedHaystack = ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'j', 'l', 'n']
console.log('Searched for', 'h', 'Found at position', binarySearch(orderedHaystack, 'h'))
*/

/*J Devansh's solution, Recursion
let binarySearch = function(n,array,x=0){
  let midpoint = Math.floor(array.length/2)
  if (n === array[midpoint]) {
    return(x+ midpoint)
  }
  else if (n > array[midpoint]) {
    x += midpoint
    return binarySearch(n,array.slice(midpoint),x)
  }
  else {return binarySearch(n,array.slice(0,midpoint),x) }
}
*/



console.time("Recursion Recursive");

function BinarySearch(value, inputArray) {
  const low = 0,
        high = inputArray.length-1;
  const mid = Math.ceil((low + (high - low)) / 2);
  return BinaryRecursion(value, inputArray, low, high, mid)
}

function BinaryRecursion(value, inputArray, low, high, mid) {
  if (value === inputArray[mid]) {
    return mid;
  }
  if (low > high) {
    return null;
  }
  if (value < inputArray[mid]) {
    high = mid - 1;
    mid = Math.ceil((low + (high - low)) / 2);
    return BinaryRecursion(value, inputArray, low, high, mid);
  } else {
    low = mid + 1;
    mid = Math.ceil((low + (high - low)) / 2);
    return BinaryRecursion(value, inputArray, low, high, mid);
  }
}

console.timeEnd("Recursion Recursive");



console.time("Binary Recursive");

function binarySearch(value, inputArray) {
  let low  = 0,
      high = inputArray.length - 1,
      mid;

  while (low <= high) {
      mid = low + (high - low) / 2;
      if ((mid % 1) > 0) { mid = Math.ceil(mid); }

      if (value < inputArray[mid]) { high = mid - 1; }
      else if (value > inputArray[mid]) { low = mid + 1; }
      else { return mid; }
  }
  return null;
}
console.timeEnd("Binary Recursive");

let items = Array.from(new Array(10000), (item, index) => index + 1);
console.log(binarySearch(5001, items));


console.time("linearSearch Iterative");

  // let myArray = [ 1, 2, 3, 4 ], value = 3;

function linearSearch (value, inputArray) {

  for (let i = 0; i < inputArray.length; i++) {

    if (value === inputArray[i]) { return i; }

  }
  return null;
}

console.timeEnd("linearSearch Iterative");

// let items = Array.from(new Array(100), (item, index) => index + 1);

console.log(linearSearch(5001, items));





/*
ALGORITHMS, JAVASCRIPT, WEB DEVELOPMENT
JavaScript: Binary Search vs Linear Search
by Arthur Kay • December 7, 2011 • 1 Comment

Generally speaking, most JavaScript array search algorithms I see in production code look something like this:


  var myArray = [ 1, 2, 3, 4 ],
      key     = 3;

  function linearSearch (key, inputArray) {
      var i;

      for (i = 0; i < inputArray.length; i++) {
          if (key === inputArray[i]) { return i; }
      }

      return null;
  }

  linearSearch(key, myArray); //returns 2
This is a classic linear search algorithm: we loop through a given array checking to see if a key exists. The search starts at one end of the array (usually the beginning) and incrementally moves toward the opposite end, returning the index of the key (if it exists). In most cases, the input array is not sorted.

The linear search algorithm is often "good enough" for most applications. Although optimization would improve performance, the benefit might only be minimal if our data set (stored in an array) is relatively small.

The linear search algorithm (represented in the above code sample as the linearSearch() method) takes two input parameters:

key (an integer)
inputArray (an array of integers, not necessarily sorted)
This algorithm returns:

the index of the key (if present), or
null
But what happens to our algorithm as the data set increases in size?

Measuring Search Efficiency

When we study the structure of algorithms, we represent the growth rate using Big-O Notation. In short, Big-O Notation is a mathematical forumla that demonstrates how a function performs as its inputs (or memory requirements) change.

In practice, Big-O Notation represents the mathematical limit (i.e. upper-bound, or ceiling) for performance given some input. It is the worst-case scenario for the algorithm.

For example, the Big-O Notation for the linear search algorithm is O(n) - where n is the size of the array we're searching. This means that for an array containing 10 elements, the linear search will take at most 10 loops through the data set. For an array containing 10,000 elements, linear search will take at most 10,000 loops.

If you were to plot these on graph paper, you would see the growth of maximum execution is linear - appropriate considering the name "linear search". In a production environment, linear search often performs better than O(n) because we rarely have to look at each array index every time the algorithm is executed.

However, we should never assume our algorithms will not hit their limits in production. The whole point of measuring Big-O Notation is to mathematically compare options.

In the case of linear search, we probably want to consider a more efficient option if one is available.

Binary Search

The Binary Search algorithm takes a divide-and-conquer approach. Given a sorted array (a key difference from linear search), the algorithm checks the key against the middle index value of the array. The algorithm then continuously divides itself until it finds the correct index (if it exists).

The binary search algorithm takes two inputs:
- key (an integer)
- inputArray (a sorted array of integers)

This algorithm returns:
- the index of the key (if present), or
- null


  function binarySearch(key, inputArray) {
      var low  = 0,
          high = inputArray.length - 1,
          mid;

      while (low <= high) {
          mid = low + (high - low) / 2;
          if ((mid % 1) > 0) { mid = Math.ceil(mid); }

          if (key < inputArray[mid]) { high = mid - 1; }
          else if (key > inputArray[mid]) { low = mid + 1; }
          else { return mid; }
      }

      return null;
  }

  // run the binary search
  binarySearch(3, [1,2,4]); //returns null
  binarySearch(3, [2,3,5]); //returns 1
Binary search will never have to loop through every index in the array. In fact, the growth of maximum execution (i.e. worst case scenario) is O(log n). For those of you who don't remember high-school math, logarithmic growth is exponential... but in this case, the growth is far less compared to it's linear option.

Comparing Linear and Binary Search

Keeping in mind that Big-O notation is the worst case scenario, we can expect the following results*:

Array Size	Linear: O(n)	Binary O(log n)
10	10	2.30
100	100	4.60
1,000	1,000	6.90
*These results are not actual times... just the maximum number of iterations in the algorithm

Do you see a pattern here? While these numbers represent the worst-case scenario (and algorithms do not consistently perform at their worst), they're obviously important to consider. This is particularly true when your data sets grow larger.

For Example...

I put together a short example comparing the expected (worst-case) and actual performance of these two search algorithms. To level the playing field, both algorithms will use the same key (randomly generated) and the same input array (which is sorted).

If you keep hitting the "run" button, you'll see that the actual performance of each algorithm changes as the new (random) key is generated. Although linear search is sometimes more efficient on smaller data sets, you will notice that binary search is consistently better on larger data sets.

In fact, my example seems to indicate that sorted arrays with more than 10 elements almost always perform better than linear search. In other words, with the exception of infrequent and rare circumstances, binary search is clearly the better choice.

What do you think?

Is my logic flawed? Is binary search a realistic option for production programs?

Your thoughts and comments are definitely welcome!


About Arthur Kay
With nearly 20 years of software engineering and operations experience, Arthur Kay offers an extraordinary set of leadership skills and technical expertise to develop meaningful products and high-performing teams. He has worked with Fortune 500 companies, VC-funded startups and companies across a wide variety of industries to build cutting-edge software solutions.
Arthur is a successful entrepreneur, technology professional, and mentor. He is a full-time family man, part-time consultant and spare-time musician. He graduated from Loyola University Chicago and currently lives in greater Chicago-land.


*/
