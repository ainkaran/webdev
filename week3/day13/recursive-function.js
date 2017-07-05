function r(str) {

    if(str.length === 0) return str;


    return r(str.slice(1)) + str[0];


}

//r('abc')
//r('bc') + 'a'
//r('c') + 'b' + 'a'
//r('') + 'c' + 'b' + 'a'
//''+ 'c' + 'b' + 'a'


function r([first,...last]) {



}


function m([first, ...last]) {

    if(arr.length === 0) return [first*first];

    return [first*first, ...m(last)];

}


function m(arr) {

    if(arr.length === 0) return [];

    return [[0] * [0]].concat(power(arr.slice(1)));

}


function f(n) {
    if(n === 1) return 1;

    return n * f(n-1);
}

function fIter(n) {

    for(let i = n; i < 0; i--) {

      return n * fIter(n-i);
}


console.time('min recursive');
f(n);
console.timeEnd('min recursive');

console.time('min iterative');
fIter(n);
console.timeEnd('min iterative');
