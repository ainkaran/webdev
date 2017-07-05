//Assignment: [Lab] Simple Substitution Cipher Helper
/*
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

You will need to create a SubstitutionCipher constructor.

The SubstitutionCipher will have at least two prototype methods: .encode and .decode

Think about where you will store the alphabet and the alternate alphabet.

The following are examples of how your solution should work:

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";

const sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"

sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"

If a character provided is not in the opposing alphabet, simply leave it as be.

Stretch
Redo this exercise with Javascript classes.

*/


const l = console.log;

class SubstitutionCipher {
  constructor (alpha, subtitutionAlpha) {
    this.alpha = alpha;
    this.substitutionAlpha = subtitutionAlpha;
  }

  encode (text) {
    let out = '';

    for (let char of text.split('')) {
      out += this.substitutionAlpha[this.alpha.indexOf(char)];
    }
    return out;
  }

  decode (text) {
    let out = '';

    for (let char of text.split('')) {
      out += this.alpha[this.substitutionAlpha.indexOf(char)];
    }
    return out;
  }
}

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";

const sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"
//
// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"


l('Encoding ---')
l('abc: ', sub.encode("abc"));
l('xyz: ', sub.encode("xyz"));
l('aeiou: ', sub.encode("aeiou"));

l('Decoding ---')
l('eta: ', sub.decode("eta"));
l('qxz: ', sub.decode("qxz"));
l('eirfg: ', sub.decode("eirfg"));
