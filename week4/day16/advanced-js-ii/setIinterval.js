// window.setInterval(function(start) {
//     console.log('fired: ' + (new Date().getTime() - start));
//     wait();
//   }, 1000, new Date().getTime());


let outsideA = 'What'
console.log('Before outsideA:', outsideA);
setInterval(() => {
  outsideA += ' is that!?';
  console.log('After outsideA in callback:', outsideA);
}, 0);
console.log('After outsideA:', outsideA);


setInterval(

  () => {console.log("Hello")}
)



function timer (startTime, onDone () => {}) {
  let count = startTime;
  const decrementer = () => {
    count -= 1;
    console.log(count);

    if (count <=  0) {
      clearInterval(intervalId);

      onDone();
    }


  };
  const intervalId = setInterval(
    () => {
      console.dir(decrementer);
      decrementer();
    },
    1000);
}
