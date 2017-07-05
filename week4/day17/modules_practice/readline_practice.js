const readline = require('readline');

// We're defining an interface in here that makes it so we take input from the
// user using standard in (stdin) which is what the user types in the terminal
// and output things to (stdout) which is what gets printed in the terminal.
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('What is your name?', function(userInput){
  console.log(`Hello ${userInput}`);
  process.exit();
});
