console.time("Maximum Recursive");
function maximum(arr){

  let newArray = arr.slice();
  if (newArray.length === 1) return newArray[0];

  if (newArray[0] < newArray[1]) {
    newArray.splice(0,1); }
  else {
    newArray.splice(1,1);
  }

  return  maximum(newArray);
}
console.timeEnd("Maximum Recursive");



// console.time("Maximum Iterative");
// function maximum(arr){
//
//   let newArray = [0];
//   let result = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//   	if(newArray[0] > arr[i]) {
//       result = newArray[0];
//     }
//     else {
//       result = arr[i];
//     }
//   }
//   return result;
// }
// console.timeEnd("Maximum Iterative");


console.log(maximum([0, 1, 2, 3, 4]));
