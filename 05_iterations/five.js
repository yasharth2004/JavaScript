const coding =["js","ruby","java","python","cpp"]
coding.forEach(
    function(val){
        //console.log(val);
        
    }
)

coding.forEach((val)=>{
    //console.log(val);
    
})


function printme(item)
{
    //console.log(item);
}

coding.forEach(printme)



coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

myCoding = [
    {
        language : "javascript",
        languageFileName: "js"
    },
    {
        language : "java",
        languageFileName: "java"
    },
    {
        language : "python ",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language);
    
})