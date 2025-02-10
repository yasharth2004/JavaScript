coding = ["js","ruby","java","python","cpp"]


// const values = coding.forEach((item)=>{  //No use to put for each in a variable since it never returns a value
//     console.log(item);
// })
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums= myNums.filter((num)=> num>4) 
// or   const newNums= myNums.filter((num)=> {
// return num>4
// })          //Parenthesis aa gya toh scope aa gya return likhna padega
console.log(newNums);



const newNumss = [];
const myNumss=[1,2,3,4,5,6,7,8,9,10];
myNumss.forEach((num)=>{
    if(num>4)
    {
        newNumss.push(num);
    }
})
console.log(newNumss);


const books=[
    {title : 'Book one ' , genre : 'Fiction', publish: 1981 , edition :2004},
    {title : 'Book two ' , genre : 'Non-Fiction', publish: 1992 , edition :2005},
    {title : 'Book three ' , genre : 'History', publish: 2002 , edition :2006},
    {title : 'Book four ' , genre : 'Non-Fiction', publish: 1984 , edition :2007},
    {title : 'Book five ' , genre : 'Science', publish: 1941 , edition :2008},
    {title : 'Book six ' , genre : 'Fiction', publish: 2003 , edition :2009},
    {title : 'Book seven ' , genre : 'History', publish: 1925 , edition :2045},
    {title : 'Book eight ' , genre : 'Science', publish: 1963 , edition :2003},
    {title : 'Book nine ' , genre : 'Non-fiction', publish: 1999 , edition :2011}
]

let userBooks = books.filter((bk)=>bk.genre==='History')
console.log(userBooks);

const userBooks1 = books.filter((bk)=>{ return bk.publish>=2000})
console.log(userBooks1);

userBooks = books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre=="History"
})
console.log(userBooks);





