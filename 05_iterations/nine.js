// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );      // From mdn



const myNums= [1,2,3];
// const myTotal = myNums.reduce(function(acc,currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
    
//     return acc+currval},0)
// console.log(myTotal);
// Same in arrow function --->

const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);


const shoppingCart = [
    {
        itemname : 'js course',
        price: 2999
    },{
        itemname : 'python course',
        price: 999
    },{
        itemname : 'mobile dev course',
        price: 5999
    },{
        itemname : 'data science course',
        price: 12999
    }
]

const priceToPay= shoppingCart.reduce((acc, item)=>item.price+acc,0) 
console.log(priceToPay);
