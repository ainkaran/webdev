//

//Object.assign(String.prototype, StringExtras);

String.prototype.repeat = function(number) {
  let out = '';
  for (let i = 0; i < number; i++) {
    out += this;
  }
  return out;

}

String.prototype.leftPad = function(number) {
  return ' '.repeat(number) + this;
}

String.prototype.rightPad = function(number) {
  return this + ' '.repeat(number);
}

String.prototype.pad = function(number) {
  return this.leftPad(number).rightPad(number);
}

String.prototype.capitalize = function() {
  return this.slice(0,1).toUpperCase() + this.slice(1);
}


let a = 'you';

console.log(a.repeat(3)); // returns 'youyouyou'
console.log(a.leftPad(3)); // returns '   you'
console.log(a.rightPad(5) + 'me'); // returns 'you     me'
console.log(a.pad(3)); // returns '   you   '
console.log(a.capitalize()); // returns 'You'
