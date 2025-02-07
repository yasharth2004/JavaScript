// Immediately Invoked Function Expression (iife)
(function chai()
{
    //Named iife
    console.log("DB connected");
    
})();

(()=>{
    console.log("DB TWo Connected");
    
})();


((name)=>{
    console.log(`DB TWo Connected by ${name}`);
    
})('Yasharth');

/* JS execution context
    -> Global Execution context
    -> Function execution context
    -> Eval Execution context 

-> Memory Creation Phase
-> Execution Phase
-> */