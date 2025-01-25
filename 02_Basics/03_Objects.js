//Singleton

// Object Literals
Object.create   //This is constructor method ....in this only singleton is made 

const mySym = Symbol("key1")

const JsUser = {
    name : "Yasharth",
    age: 21,
    [mySym] : "mykey1",
    "full name": "Yasharth Kesarwani",
    location : "Karagpur",
    email :"yasharth@gmail.com",
    isLoggedIn : false ,
    lastLoginDays :["Monday","Saturday"]
} 

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym])

JsUser.email="yashoo@gpt.info"
//Object.freeze(JsUser)
JsUser.email="jhwsajkd@sdkn.com"

console.log(JsUser.email);
console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Helllo World !")
    
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function()
{
    console.log(`Helllo Js User ${this.name}`)
    
}
console.log(JsUser.greetingTwo());





