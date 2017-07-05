// 'use strict';

class Hash {

  constructor(obj) {
    this.obj = obj;
  }

  isEmpty() {
    return Object.keys(this.obj).length === 0
    // if (Object.keys(this.obj).length > 0) {
    //   return false;
    // }
    // else {
    //   return true;
    // }
  }

  merge(hash) {
    return Object.assign({}, this.obj, hash.obj);
  }

  hasKey(str) {

    for (let property in this.obj) {
      if (property === str) {
        return true;
      }
    }
    return false;
  }

  invert() {
    let newHash = new Object();
    //
    // for (let property in this.obj) {
    //   newHash[Object.values(this.obj)] = Object.keys(this.obj);
    // }
    for (let property in this.obj) {
      let key = this.obj[property];
      let value = property;
      newHash[key] = value;
    }
    return newHash;
  }

  inspect() {

    let newArray = [];
    let newHash = new Object();

    newArray = Object.entries(this.obj)

    let out = '';
    // for (let i = 0; i < newArray.length; i++) {
    //   out += "'" + newArray[i][0] + "'" + ' => ' + newArray[i][1] + ', '
    // }
    // return '{' + out + '}'
    for (let property in this.obj) {
      let value = this.obj[property];
      // let value = property;
      out += `'${property}' => ${value}, `
    }
    return `{${out.substring(0, out.length-2)}}`

  }

  keys() {
    return Object.keys(this.obj);
  }

  values() {
    return Object.values(this.obj);
  }

}



let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});

console.log(`hash.isEmpty(): ${hash.isEmpty()}`) // returns false
console.log(`emptyHash.isEmpty(): ${emptyHash.isEmpty()}`) // returns true

let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
// returns Hash {a: 1, b: 2, c: 3, bob: 'yo', jane: 'ya'}
// should not mutate original hash

console.log(`merged !== hash:`, merged, hash) // should be true

console.log(`hash.hasKey('a'): ${hash.hasKey('a')}`) // returns true
console.log(`hash.hasKey('bob'): ${hash.hasKey('bob')}`) // returns false
console.log(`merged.hasKey('bob'): ${hash.hasKey('bob')}`) // returns true

// Values will have to made into strings
console.log(`hash.invert(): ${hash.invert()}`) // returns Hash {'1':'a', '2':'b', '3':'c'}

console.log(`hash.inspect(): ${hash.inspect()}`) // returns "{'a' => 1, 'b' => 2, 'c' => 3}"

console.log(`hash.keys(): ${hash.keys()}`) // returns ['a', 'b', 'c']
console.log(`hash.values(): ${hash.values()}`) // returns [1, 2, 3]
