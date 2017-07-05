// First solution
// Methods in an object

const StringExtras = {

  repeat (str, number) {
    let out = '';
    for (let i = 0; i < number; i++) {
      out += str;
    }
    return out;

  },

  leftPad(str, number) {
    return this.repeat(' ', number) + str;
  },

  rightPad(str, number) {
    return str + this.repeat(' ', number);
  },

  pad(str, number) {
    return this.leftPad(this.rightPad(str, number), number);
  },

  capitalize(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1);
  }

}

let a = 'you';

console.log(StringExtras.repeat(a, 3)) // returns 'youyouyou'
console.log (StringExtras.repeat(' ', 6)) // returns '      '
console.log (StringExtras.leftPad(a, 3)) // returns '   you'
console.log (StringExtras.rightPad(a, 5)) //+ 'me'; // returns 'you     me'
console.log (StringExtras.pad(a, 3)) // returns '   you   '
console.log (StringExtras.capitalize(a)) // returns 'You'
