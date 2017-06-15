// let number1 = parseInt(prompt('Please give me a number'))
// let number2 = parseInt(prompt('Please give me another number'))
//
// if(number1 === number2) {
//   alert('Both numbers are equal')
// } else if (number1 > number2) {
//   alert(`${number1} is greater than ${number2}`)
// } else if (number2 > number1) {
//   alert(`${number2} is greater than ${number1}`)
// } else {
//   alert('I dont understand')
// }
//

// let num1 = parseInt(prompt("Num1:"));
// let num2 = parseInt(prompt("Num2:"));
// let num3 = parseInt(prompt("Num3:"));
//
// let array = [num1, num2, num3];
//
// alert(`The largest number is: ${Math.max(...array)}`);

// let number1 = (parseInt(prompt("enter the first side")))
// let number2 = (parseInt(prompt("enter the second side")))
// let number3 = (parseInt(prompt("enter the third side")))
// let perimeter = (number3 + number2 + number1);
// let hP = perimeter/2
// console.log((hP*(hP-number1)*(hP-number2)*(hP-number3)) ** (1/2))
// console.log(perimeter)


//
// let i=0;
// while(i<3){
//   number=parseInt(prompt("Please enter your 3 numbers!"));
//   if(i===0){
//     number1=number;
//   }
//   else if (i===1){
//
//     number2=number;
//     if(number1 > number2){
//
//     })
//   }
//   else{
//     number3=number;
//


// let num1 = parseInt(prompt("Num1:"));
// let num2 = parseInt(prompt("Num2:"));
// let num3 = parseInt(prompt("Num3:"));
//
// let array = [num1, num2, num3];
//
// alert(`The largest number is: ${Math.max(...array)}`);


// let a = parseInt(prompt("Enter a side length for your triangle"))
// let b = parseInt(prompt("Enter a second side length for your triangle"))
// let c = parseInt(prompt("Enter a third side length for your triangle"))
//
// let s = (a+b+c)/2
// let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log(s)
// console.log(area)



//A+ A A- B+ B B- C+ C C- D+ D D- E+ E E- F+ F

// let grade=-1;
// //grade=parseInt(prompt("Enter your grade"));
// while(0 < grade || grade > 100){
//   grade=parseInt(prompt("grade > 100, please enter again"));
//   //if(0 >= grade || grade <= 100){
//     //grade=parseInt(prompt("grade > 100, please enter again"));
//     //break;
//   //}
//   //break;
// }
// switch (grade){
// case (grade > 95):
//   console.log("A+");
//   break;
// case (grade <= 95 && grade > 90):
//     console.log("A");
//     break;
// case (grade <= 90 && grade > 85):
//     console.log("A-");
//     break;
// case (grade <= 85 && grade >80):
//     console.log("B+");
//     break;
// case (grade <= 80 && grade > 75):
//     console.log("B+");
//     break;
// case (grade <= 75 && grade > 70):
//     console.log("B-");
//     break;
// case (grade <= 70 && grade > 65):
//     console.log("C+");
//     break;
//
//   }


//0:Sunday, 1:Monday, 2:Tuesday, 3:Wednesday, 4:Thursday, 5:Friday, 6:Saturday
var date = new Date(2014, 0, 1); //First day of January

//Find first Sunday in 1901
while (date.getFullYear() !== 2050) {
  date.setYear(date.getFullYear() + 1);
  if(date.getDay() === 0){
    console.log(date);
    break;
  }
}
