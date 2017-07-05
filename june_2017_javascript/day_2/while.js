// Solution 1
let i = 0;
while(i <= 100) {
  if(i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// Solution 2
let i = 0;
while(i <= 100) {
  console.log(i);
  i += 2;
}

let number = 100;

while(number > 0) {
  console.log(`
               ${number} bottles of beer on the wall
               ${number} bottles of beer
               Take one down, pass it around, ${number - 1} bottles of beer on the wall
              `);
  number--;
}
