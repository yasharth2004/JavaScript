let score = "33" 
console.log(typeof score)
console.log(typeof (score))
let valueinInNumber=Number(score)
console.log(typeof valueinInNumber)

score="22abc"
valueinInNumber=Number(score)
console.log(typeof valueinInNumber)
console.log(valueinInNumber)

score=null
valueinInNumber=Number(score)
console.log(typeof valueinInNumber)
console.log(valueinInNumber)

score=true
valueinInNumber=Number(score)
console.log(typeof valueinInNumber)
console.log(valueinInNumber)

score="yash"
valueinInNumber=Number(score)
console.log(typeof valueinInNumber)
console.log(valueinInNumber)

//"33" => 33
//"33abc" =>NaN
// //true => 1 : false => 0

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

isLoggedIn=""
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

isLoggedIn="Yash"
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 : true    
// 2 : false
// "" : false
// "Yash" : true


let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber)
console.log(typeof stringSomeNumber)


//******************* Operations  **************************

console.log("1" + 2)
console.log(1 + "2")
console.log(1 + 2 + "2")
console.log("1" + 2 + 2)

console.log(+true)
console.log(+"")