const user={
    username : "Yasharth",
    price : 456,

    welcomeMessage : function (){
        console.log(`${this.username} , Welcome here boiii...`);
    }
}
user.welcomeMessage()

user.username="Sam";
user.welcomeMessage()

console.log(this);  // {}

// function chai()
// {
//     let username = "Haleluaa"
//     console.log(this.username); // Undefined 
    
// }
// chai()



// const chai = function()
// {
//     let username = "yasharth"
//     console.log(this.username);
// }
// chai()



// const chai= () => {
//     let username = "Yashuuu"
//     console.log(this);
// }
// chai()


// const addTwo=( num1, num2 )=>{
//     return num1+num2;
// }

// console.log(add(3,4));



// const addTwo =( num1, num2 )=> num1+num2 
// console.log(addTwo(3,4));

const addTwo =( num1, num2 )=> ({ username : "Yash" })  //For object function ({ })
console.log(addTwo()); 

const myArray = [ 1,2,3,4,5,6,7,8]
myArray.forEach( ()=> {})   //nvm