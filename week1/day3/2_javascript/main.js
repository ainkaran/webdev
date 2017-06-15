// function add(a, b) {
//   const total = a+b;
//   return total;
// }
//
// console.log(add(1, 3));
//
// //to use the function add, we have to call it with brackets
//
//
// //this is possible in JS
// const sum = add;


// function increment(a){
//
//   return (a+1);
//
// }
//
// //this is identical to the first one
// var increment = function increment(a){
//
//   return (a+1);
//
// }
//
// const increment = function increment(a){
//
//   return (a+1);
//
// }
//
// console.log(increment(4));


// function random (n){
//
//   return Math.ceil(Math.random()*n);
// }
//
// function insult(name){
//   //let random = Math.round(Math.random()*5);
//   const pickInsult = random(3);
//
//   if (pickInsult === 1) (
//     return `${name}, you doofus`;
//   } else if (pickInsult ===2){
//     return `${name}, you uywyu`;
//   }
//   else{
//     return eturn `${name}, you iqouiqsss`;
//   }
//   //console.log(message);
// }




// function repeat (str, num) {
//
//   let newStr = '';
//
//   for(i = 0; i < num; i += 1) {
//
//     newStr += str;
//   }
//
//   return newStr;
// }

//
// const names = [
//   'Joe',
//   'Ding',
//   'Don'
//
// ]


// const first = [
//   'hello',
//   5,
//   'a'
// ]
//
// first[1] = 6;

// const second = [];
//
// for (let i = 0; i <=100; i += 1){
//   second.push(i);
// }
//
// console.log(second.length);
// console.log(second);

//looping over array
//regular for loop

// let abc = ['a', 'b', 'c'. 'd', 'e'];
// for (let index = 0; index < abc.length; index++) {
//   console.log(`${index}: ${abc[index]}`);
// }


// let arr = ['apple', 'dog', 'compyter', 'cup', ];
//
// for (let index = 0; index < arr.length; index++) {
//   console.log(`${arr[index]}: ${arr[index].length}`);
// }

//
// let word = ['apple', 'dog', 'compyter', 'cup', ];
//
// for (let letter of words) {
//   console.log(`${word]}: ${word.length}`);
// }


// const arr = [0, 5, 6, -12];
//
// function sum(arr) {
//
//   for (let index = 0; index < arr.length; index++) {
//     result += arr[index];
//     return result;
//     //console.log(`Sum = ${result}`);
//   }
//
//   return console.log(`Sum = ${result}`);
// }


// const arr = 'hello';
//
// for (let word of words) {
//     result += arr[index];
//     return result;
//     //console.log(`Sum = ${result}`);
//   }



// let sentense = prompt('enter a sentense');
//
// let word  = sentense.split('/\s/+/');
//
// for (let word of words) {
//     result += arr[index];
//     return result;
//     //console.log(`Sum = ${result}`);
//   }


// function askUser () {
//   const sentence = prompt('Tell me something I don\'t know');
//
//   // We'll define words as characters seperated by white spaces
//   let wordCount = sentence.split(' ').length
//   // ð this is not a robust way to split. If I get multiple white spaces,
//   // new line characters, tabs or any other white space character, it may
//   // not split or it will do additional splits
//   wordCount = sentence.split(/\s+/).length
//   // ð the above is much more reliable way to split. We use a
//   // regular expression to match any type of white space character (the \s part) and
//   // and any length of white space (the + part)
//   alert(`Your sentence has ${wordCount} words`);
// }



// const me = {
//   name: 'Ainkaran',
//   age: '',
//   occupation: 'ETL'
// }
//
// me.occupation = 'javascript expert';
//
// me['skill'] = ['ruby', 'rails', 'javascript'];


// function words(str){
//   //w is words characters
//   //W none words characters
//   return str.split(/\W+/);
// }
//
// function wordLength(str){
//   const dic = {};
//   for(let word of words(str) ){
//     dic[word.toLowerCase()] = word.length;
//
//   }
//     return dic;
//
// }


//const obj = {name: 'Ainkaran', occupation: 'Ruby, rails, javascript'}

// function clone(obj){
//
//   const newObj = {};
//   for(let property in obj){
//     newObj[property] = obj[property]
//   }
//   return newObj;
// }


// Loop through a Multi-Dimensional Array
// function largestNumber(arr){
//
//   for(let i = 0; i < arr.length; i += 1){
//
//
//     if(arr[i] > arr[i+1] ) {
//       var lNumber = arr[i];
//     } else {
//       var lNumber = arr[i+1];
//     }
//
//     return lNumber;
//
//   }
//
// }
//
// const a = [40, 2, 13, 34, 42];
// console.log(largestNumber(a));


//working
// function largestNumber(arr) {
//   let largest = arr[0];
//
//   for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//       largest = arr[i];
//     }
//   }
//
//   return largest
// }
//
// const a = [40, 2, 13, 34, 42];
// console.log(largestNumber(a));

//another way
// function largestNumber(numbers) {
//   return Math.max(... numbers);
//
// }
//

//Assignment: [Lab] Loop through a Multi-Dimensional Array


//const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];

//const o = {};

// function multiDimensionalArray(arr){
//
//   for(let i = 0; i < arr.length; i += 1){
//     for(let j = 0; j < arr[i].length; j += 1){
//       //let fArray = [];
//         // [arr[i].split('')][j].split('');
//         console.log(arr[i][j])
//     }
//   }
//
// }
//
// const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];
//
// console.log(multiDimensionalArray(myArray));


//Assignment: [Lab] Parsing CSV
// Note that the following string is created with backticks. This is important because it keeps track of newline characters
// let csvData = `
// id,first name,last name,email
// 1,jane,doe,wildmirror@yahoo.com
// 2,john,doe,tamepool@hotmail.com
// 3,sherlock,holmes,mag@glass.com
// 4,natalia,romanov,8legged@ninja.com
// 5,peter,quill,starlord@gmail.com
// `

/*
let users = parseCSV(csvData)

console.log(users)
/* logs
[
  {id: 1, firstName: 'jane', lastName: 'doe', email: 'wildmirror@yahoo.com'},
  {id: 2, firstName: 'john', lastName: 'doe', email: 'tamepool@hotmail.com'},
  {id: 3, firstName: 'sherlock', lastName: 'holmes', email: 'mag@glass.com'},
  {id: 4, firstName: 'natalia', lastName: 'romanov', email: '8legged@ninja.com'},
  {id: 5, firstName: 'peter', lastName: 'quill', email: 'starlord@gmail.com'},
]
*/

// function parseCSV(csvData) {
//
//   const obj = {
//     id: '',
//     firstName: '',
//     lastName: '',
//     email: ''
//   }
//
// let count = 0;
//   while(true){
//     let pos = csvData.search('\n');
//     count++;
//   }
//
//   let arr= csvData.split('')
//   for(let i = 1; i < count-1; i += 1){
//     for(let j = 0; j < 4; j += 1){
//
//       let newArray = [];
//         obj.id = arr[i];
//         obj.firstName = arr[i+1];
//         obj.lastName = arr[i+2];
//         obj.email = arr[i+3];
//
//         newArray[j] = obj;
//       }
//     }
//
//     return newArray;
// }
//
// let csvData = `
// id,first name,last name,email
// 1,jane,doe,wildmirror@yahoo.com
// 2,john,doe,tamepool@hotmail.com
// 3,sherlock,holmes,mag@glass.com
// 4,natalia,romanov,8legged@ninja.com
// 5,peter,quill,starlord@gmail.com
// `
// console.log(csvData);

// function titleCase(str) {
//    let splitStr = str.toLowerCase().split(' ');
//    for (let i = 0; i < splitStr.length; i++) {
//        // You do not need to check if i is larger than splitStr length, as your for does that for you
//        // Assign it back to the array
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//        console.log(splitStr[i].substring(1));
//    }
//    // Directly return the joined string
//    return splitStr.join(' ');
// }


//
// const capitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1);
//
// function search(arr, str){
//   // console.log('starting search')
//   for(let i =0; i < arr.length; i += 1){
//     for(let propertyName in arr[i]){
//       // console.log('propertyName', propertyName);
//       if(propertyName === 'firstName' || propertyName === 'lastName'){
//     //  if(arr[i].hasOwnProperty(propertyName)) {
//         let propertyValue = arr[i][propertyName];
//         // do something with each element here
//         console.log(propertyValue,str);
//         let pattern = new RegExp(str);
//         if((propertyValue.match(pattern))){
//           return arr[i];
//         }
//       }
//     }
//   }
// }
//
//
// function parseCSV(csvData) {
//
// let count = 0;
// let newArray = [];
//   // while(true){
//   //   let pos = csvData.search('\n');
//   //   count++;
//   // }
//   let lines = csvData.split('\n');
//
//   let fields = lines[0].split(',');
//
//   let userDatas = lines.slice(1);
//   //console.log(userDatas)
//   console.log(fields)
//   //console.log(lines)
//   for(let userData of userDatas){
//     let obj = {};
//     let splitData = userData.split(',');
//     let count = 0;
//     for(let field of fields){
//
//       // let newArray = [];
//       if(count > 0 && count < 3){
//         obj[field] = capitalize(splitData[count]);
//       } else {
//         obj[field] = splitData[count];
//       }
//
//
//       count++;
//       }
//     newArray.push(obj);
//     }
//
//     return newArray;
// }
//
// let csvData = `id,first name,last name,email
// 1,jane,doe,wildmirror@yahoo.com
// 2,john,doe,tamepool@hotmail.com
// 3,sherlock,holmes,mag@glass.com
// 4,natalia,romanov,8legged@ninja.com
// 5,peter,quill,starlord@gmail.com`;
//
// console.log(parseCSV(csvData));
// let a=[
//   {id: 1, firstName: 'jane', lastName: 'doe', email: 'wildmirror@yahoo.com'},
//   {id: 2, firstName: 'john', lastName: 'doe', email: 'tamepool@hotmail.com'},
//   {id: 3, firstName: 'sherlock', lastName: 'holmes', email: 'mag@glass.com'},
//   {id: 4, firstName: 'natalia', lastName: 'romanov', email: '8legged@ninja.com'},
//   {id: 5, firstName: 'peter', lastName: 'quill', email: 'starlord@gmail.com'},
// ];
//
// console.log(search(a, 'ane'));
//
// // console.log(csvData);



//Assignment: [Lab] Merging Arrays

// function mergeArray(arr1, arr2){
//
//   let newArray = [];
//
//   for(let i = 0; i < arr1.length; i += 1){
//     newArray.push(arr1[i]);
//   }
//
//   for(let j = 0; j < arr2.length; j += 1){
//     newArray.push(arr2[j]);
//
//   }
//   return newArray;
// }
//
// let a = [1, 2, 3];
// let b = [2, 3, 4];
//
// console.log(mergeArray(a, b));
//
// function uniq(a) {
//    return Array.from(new Set(a));
// }
//
// console.log(uniq(mergeArray(a, b)));


function isEven(number){
  if((number&1) == 0){
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
