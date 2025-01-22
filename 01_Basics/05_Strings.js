const name = "yasharth"
const repoCount= 7

//console.log(name + repoCount +" value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gamename = new String (`Kesarwani-ht`)
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('w'));

const newString  = gamename.substring(0,4)//does not take -ve values 
console.log(newString);

const anotherString=gamename.slice(-8,5)
console.log(anotherString);

const newStringS ="   heyaa   "
console.log(newStringS);

console.log(newStringS.trim());

const url="https://yasharth%20kesarwani.com"
console.log(url.replace("%20","-"));
console.log(url.includes('yasharth'));
console.log(gamename.split('-'));






