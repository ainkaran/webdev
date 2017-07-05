let i = 0;

while(i <= 100) {
  console.log(i);
  if(i === 44) {
    break; // this will exit the loop right here
  }
  i++;
}


while(true) {
  let number = parseInt(prompt('Give me a number from 1 to 50'));
  if(number === 13) {
    alert('You guessed the lucky number');
    break;
  } else {
    alert('Try again!');
  }
}
