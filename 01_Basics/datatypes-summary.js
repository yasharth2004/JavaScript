// Primitive 
// 7 types : String ,number ,boolean ,null ,undefined ,symbol ,BigInt 



const score = 100
const scoreValue = 100.3
const isLoggedIn= true
const outsideTemp = null
let userMail; //undefined

const id=Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
const bigIntNumber= 1234567898765434567876n
console.log(typeof bigIntNumber)

//Reference / Non-Primitive 
// Arrays, Object, Functions

const heros =[ "shaktiman" , "naaagraj" , "doga"];
let obj ={
    name: "Yash",
    age:21,
}

const myFunction = function(){
    console.log("Hello world")
}

myFunction();