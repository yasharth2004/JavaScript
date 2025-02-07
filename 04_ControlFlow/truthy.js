const userMail = "hahah@gmail.in"

if(userMail)
{
    console.log("User has got mailid");
}
else
{
    console.log("user doesnt has a mail id");
    
}

// falsy values
//   false , 0 , -0 ,BigInt 0n , null , undefined , NaN

// truthy values 
// "0" , "false", " ", [],  {}  , function(){}

const arr = []
if(arr.length === 0)
{
    console.log("Array is empty");
    
}


const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object empty");
    
}


// NULLish coalescing Operator (??) : null undefined

let val1;
val1= 5 ?? 10;
val2 = null ?? 15;
val3 = undefined ?? 20;
val4 = null ?? 10 ?? 20 ; //first non null will be assigned 
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Ternary statements
// condition ? true : false ;
const iceTeaPrice =100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");
;

