if (true)
{
    let a = 10
    const b = 20
    var c = 30
}
//console.log(a);  Error
//console.log(b);  Error
console.log(c);


function one()
{
    const username= 'Yasharth'
    function two()
    {
        const website = 'youtube'
        console.log(username);
         
    }
    // console.log(website);

    two()
    
}
one()

if(true)
{
    const username= "yasharth"
    if(username==="yasharth")
    {
        const website = " @twitter"
        console.log(username+website);
        
    }
}
// console.log(username)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//addone(5)  No error
function addone(num)
{
    return num+1;
}
console.log(addone(5));

//addTwo(6)   //Error
const addTwo = function (num){
    return num + 2
}

addTwo(5)