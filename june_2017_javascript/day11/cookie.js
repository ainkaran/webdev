class Cookie {
  constructor(sugar, flour) {
    this.sugar = sugar;
    this.flour = flour;
  }
}

class Oreo extends Cookie {

}

// test code
let cookie = new Cookie(10, 20);
console.log(`cookie sugar amount: ${cookie.sugar}`);
console.log(`cookie flour amount: ${cookie.flour}`);
let oreo = new Oreo(10, 20);
console.log(`oreo sugar amount: ${oreo.sugar}`);
console.log(`oreo flour amount: ${oreo.flour}`);
