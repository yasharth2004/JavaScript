let score = 100
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber1 = 23.7899
console.log(otherNumber1.toPrecision(3));

const otherNumber2 = 123.7899
console.log(otherNumber2.toPrecision(3));

const hundreds =10000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++   MATHS    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.min(2,6,2,21,34,6));
// console.log(Math.max(4,2,1,4,5,2,));
console.log(Math.random().toFixed(2)*100); 
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);
