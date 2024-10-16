// function sayMyName(){
//     console.log("R");
//     console.log("A");
//     console.log("N");
//     console.log("U");
// }
// sayMyName();


function addTwoNos(num1,num2)//parameter 
{
    return (num1 + num2)

}
const res=addTwoNos(2,2); //argument
// console.log(res);//4

function myname(name){
    return `${name} just logged in`

}
// console.log(myname("ranu"));


function calculateCartPrice(...num1){
    return num1;

}
// console.log(calculateCartPrice(200,300,400));

const user={
    username:"sam",
    price:422
}
function handleObject(anyObject){
    return `My name is ${anyObject.username} and price is ${anyObject.price}` 
}
console.log(handleObject(user));


