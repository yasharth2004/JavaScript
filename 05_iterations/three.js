//for of 

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
       
}

const greeting="Hello World"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}


// MAP.....
const map =new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
console.log(map);


for (const key of map) {
    console.log(key);
    
}


for (const [key,value] of map) {      //destructuring of map into key value
    console.log(key," : -  ",value);
    
}


const myObject = {
    'game1':'NFS',
    'game2':"Spiderman"
}

