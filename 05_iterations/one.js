//for 

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(i);   
}


for(let i =0;i<=10; i++)
{
    console.log(`Outer loop ${i}`);
    for(let j =0;j<=10;j++)
    {
        console.log(`Inner Loop value ${j} and inner loop value ${i} `);
    }
}

let array=["flash","batman","superman"];
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}


// break and continue

for(let i =1;i<=20;i++)
{   if(i==5){
        console.log("5 detected");
        continue;
    }
    if(i==10){
        console.log("10 detected");
        break;
    }
    console.log(`Value of i is ${i} `);
     
}