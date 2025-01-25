const marvel_heros =["thor","Ironman","Spiderman"]
const dc_heros =["Superman","Flash","Batman"]
// marvel_heros.push(dc_heros)
// console.log(marrvel_heros)
const allHeros = marvel_heros.concat(dc_heros)
console.log(marvel_heros)
console.log(allHeros)

const all_new_Heros =[...marvel_heros,...dc_heros]
console.log(all_new_Heros)

const another_array = [ 1 , 2 , 3 , [ 4 , 5 , 6 ] , 7 , [ 6 , 7 , [ 4 , 5 ] ] ]
const real_another_array = another_array.flat(Infinity)  //depth till which array can also use array
console.log(real_another_array);

console.log(Array.isArray("Yasharth"));
console.log(Array.from("Yasharth"));
console.log(Array.from({name:"Yahsarth"})); // interesting case

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


