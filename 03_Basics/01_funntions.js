function sayMyName(){
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}
sayMyName()

// function addTwoNumber(number1 , number2)
// {
//     console.log(number1+number2)
// }

function addTwoNumber(number1 , number2)
{
    let result = number1+number2
    return result
}

const result = addTwoNumber(2,4)
console.log(result );

function loginUserMessage(username)
{
    if(!username)// username === undefined
    {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in `
}

console.log(loginUserMessage("Yash"))
 
function loginUserMessage(username="sam")
{    return `${username} just logged in `
}
console.log(loginUserMessage())

function calculateCartPrice(...num1)
{
    return num1
}
console.log(calculateCartPrice(2,7,89898,68))

const user={
    username:"Yasharth",
    price:199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject(
    {
        username: "Haleluya",
        price:150
    }
)

const myNewArray=[100,200,300,400,500]

function returnSeconValue(getArray)
{
    return getArray[1]
}
console.log(returnSeconValue(myNewArray ));
