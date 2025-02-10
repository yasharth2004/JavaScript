const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by Apple"
}

for (const key in myObject) {
    console.log(`${key} : - ${myObject[key]}`);
}

const programming =["js","rb","py","java","cpp"];
for (const key in programming) {
    console.log(programming[key]);
    
}

const map =new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")

for (const key in map) {  // FOR IN - NOT POSSBLE IN MAP
    console.log(key);
}