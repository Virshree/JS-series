
// **********************Numbers****************
const score=500;
// console.log(score);

const anotherNumber=new Number(200);
// console.log(anotherNumber.toFixed(2));//200.00

const otherNumber=232.883;
// console.log(otherNumber.toPrecision(5));//232.88

const otherNumber1=100000;
// console.log(otherNumber1.toLocaleString());//10,000
// console.log(otherNumber1.toLocaleString('en-IN'));//1,00,000


//*******************Maths***************** */

// console.log(Math);
// console.log(Math.abs(-4))//4
// console.log(Math.round(4.7));//5
// console.log(Math.ceil(4.3));//5
// console.log(Math.floor(4.3));//4

console.log(Math.random()*10+1);//

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);//13,14,15,18 any values between 10 and 20