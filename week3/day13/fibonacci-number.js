function fibonacci(num){
  var first = 1;
  var next  = 0;
  var tempStorage;

  while (num >= 0){
    console.log('first', first)
    console.log('next', next)
    console.log('______________')
    tempStorage = first;
    first = first + next;
    next = tempStorage;
    num --;
  }

  return next;
}




console.time("Fibonacci Recursive");
function fib(n){
  if (n==1 || n==2)
  	return 1;

  return  fib(n-1) + fib(n-2);
}
console.timeEnd("Fibonacci Recursive");



console.time("Fibonacci Iterative");
function fib2(n){
   let result=1;
   let fibnum = 0;
   let cnt = 0;
   for (let i =1; i<=n;i++)
   {
   	if (n===1) result=1;
    else if (cnt ===1 || cnt ===2) fibnum = 1;
    else {
    	// console.log(fibnum);
    	 temp = fibnum;
         fibnum   =  fibnum + result
         result = temp
         }
   }
   return fibnum;
}
console.timeEnd("Fibonacci Iterative");


console.log(fib(9));
console.log(fib2(9));


function fibonacci(n) {
  let result = [];

  // let p = 0;
  // let pp = 0;

  for (let i = 1; i < n; i++) {
    if (i === 1) {
      result.push(1);
      p = i;
    }
    else if(i === 2) {
      result.push(1)
      pp = i-1;
    }
    else {

      result.push(p+pp);
      p = i;
      pp = i-1;
    }
  }
  return result
}


console.log(fibonacci(5));
