
//Lab

//JSon
let number1 = parseInt(prompt('Please give me a number'))
let number2 = parseInt(prompt('Please give me another number'))

if(number1 === number2) {
  alert('Both numbers are equal')
} else if (number1 > number2) {
  alert(`${number1} is greater than ${number2}`)
} else if (number2 > number1) {
  alert(`${number2} is greater than ${number1}`)
} else {
  alert('I dont understand')
}


//largest of 3 numbers
let num1 = parseInt(prompt("Num1:"));
let num2 = parseInt(prompt("Num2:"));
let num3 = parseInt(prompt("Num3:"));

let array = [num1, num2, num3];

alert(`The largest number is: ${Math.max(...array)}`);


//Triangle area and perimeter
let a = parseInt(prompt("Enter a side length for your triangle"))
let b = parseInt(prompt("Enter a second side length for your triangle"))
let c = parseInt(prompt("Enter a third side length for your triangle"))

let s = (a+b+c)/2
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
console.log(s)
console.log(area)

//Grade
let grade=-1;
grade=parseInt(prompt("Enter your grade"));
while(grade < 0 || grade > 100){
  grade=parseInt(prompt("grade > 100, please enter again"));
}
if(grade > 95) {
  console.log("A+");
}
else if(grade <= 95 && grade > 90) {
  console.log("A");
}
else if(grade <= 90 && grade > 85) {
  console.log("A-");
}
else if(grade <= 85 && grade >80) {
  console.log("B+");
}
else if(grade <= 80 && grade > 75) {
  console.log("B+");
}
else if(grade <= 75 && grade > 70) {
  console.log("B-");
}
else if(grade <= 70 && grade > 65) {
  console.log("C+");
}
else {
  console.log("F");
}



//First occurance of Jan 1st between year 2014-2050
let arr = [];
for (i = 2014; i < 2051; i++) {
  let day = new Date(i,0,1)
  if (day.getDay()===0) {
    arr.push(i);
  }
}
console.log(arr[0]);

//another way
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


//HELLO
let text = 'HELLO'
let result = [];
let textLowercase = text.toLowerCase().split('');
for (i=0; i<textLowercase.length; i++) {
  if (i % 2 !== 0){
    result.push(textLowercase[i].toUpperCase())
  } else {
    result.push(textLowercase[i])
  }
}
console.log(result.join(''))


//ALTerNAtiNG CaSe
let text = 'ALTerNAtiNG CaSe';
let result = [];
for (i=0; i<text.length; i++) {
  if ((text.charCodeAt(i) < 65 || text.charCodeAt(i) > 122) || (text.charCodeAt(i) > 90 && text.charCodeAt(i) < 97)) {
    result.push(String.fromCharCode(text.charCodeAt(i)))
  } else if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
  result.push(String.fromCharCode(text.charCodeAt(i)+32));
  } else {
    result.push(String.fromCharCode(text.charCodeAt(i)-32));
  }
}
console.log(result.join(''))


//Guessing game
let randomNumber = Math.round(Math.random()*100);
let guess = parseInt(prompt("Guess a number"));

let attempts = 0;
let playing = true;
while (playing) {
if (guess === randomNumber) {
  attempts++
  console.log(`Good work. You guessed in ${attempts} try.`)
  playing = false;
  attempts = 0;
  } else if (guess > randomNumber) {
    attempts++
    guess = parseInt(prompt("You guessed too high. Guess again."));
  } else {
    attempts++
    guess = parseInt(prompt("You guessed too low. Guess again."));
  }
}
