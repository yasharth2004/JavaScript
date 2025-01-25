//const tinderUser = new Object()
const tinderUser = {}  //both same for defining object

tinderUser.id =  "123abc"
tinderUser.name = "Yashu"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser  = {
    fullname :{
        userFullName:
        {
            firstName : "Yasharth",
            lastName : "Kesarwani"
        }
    }
}
console.log(regularUser.fullname);

const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = { 3 : "c" , 4 : "d"}
const obj3 = Object.assign({} , obj1,obj2) //{} this is optional but preferred
// OR const obj3 = (...obj1 , ...obj3)
console.log(obj3);

const users = [

    {
        id :  1,
        email : "yasharth@mail.info"
    },
    {
        id :  1,
        email : "yasharth@mail.info"
    },
    {
        id :  1,
        email : "yasharth@mail.info"
    },
    {
        id :  1,
        email : "yasharth@mail.info"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // Imp
console.log(Object.values(tinderUser)) // Imp 
console.log(Object.entries(tinderUser))  
 


