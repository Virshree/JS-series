//reduce method takes array of numbers and returns to  single sum ;

const myNum=[1,2,3];
const initialValue=0;
// const newVal=myNum.reduce((acc,currentValue)=>{
//     return acc + currentValue;
// },initialValue);

// console.log(newVal)//6


const shoppingCart=[
    {
    course:"js courses",
    price:2999
},
{
    course:"py courses",
    price:1999
},
{
    course:"html courses",
    price:999
},
{
    course:"dsa courses",
    price:6999
}
]


const newVal=shoppingCart.reduce((acc,item)=>item.price+acc,0)

console.log(newVal);