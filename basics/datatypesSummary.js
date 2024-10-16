// /**
//  * 
//  * # Primitive Data Types (Call by value) 
//  *  7 types of primitive data
//  * String, Number, Boolean,BigInt,Symbol,undefined,Null
//  * 
//  * # Non primitive types (Call by Reference)
//  * Array,Object,Functions
//  */

// // const id=Symbol('123');
// // console.log(typeof id);//symbol 

// // const  anotherId=Symbol('123');
// // console.log(typeof anotherId);//symbol

// // console.log(id === anotherId);//false

// // const BigNumber=3224242424;
// console.log(typeof BigNumber);//undefined

// const arr=["fruits","veggies","desserts"];

// const newObj={
//     name:"apple",
//     color:"red",
//     qty:2
// }
// // console.log(newObj);

// let newFunc = function (){
//     console.log("hello world");
// }
// console.log(newFunc);//function

// ********************************Memory ********************************

//2 TYPES OF MEMORY
//STACK (Primitive) AND HEAP (Non-primitive)

let youtubeName="programming.youtube.com"
let anotherName=youtubeName;
// console.log(youtubeName);
// console.log(anotherName);

anotherName="chai aur code";
// console.log(anotherName);

let userOne={
    email:"userOne@gmail.com"

}
let userTwo=userOne;
userTwo.email="userTwo@gmail.com"

console.log(userOne);
console.log(userTwo);


