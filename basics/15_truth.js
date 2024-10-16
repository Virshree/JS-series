const userEmail=[];
if(userEmail){
    console.log("got user email");

}
else{
    console.log("Dont have user email")
}

//falsy values
//false,0,-0,BigInt,null,undefined,0n,"",Nan

//truthy values
//"0","false"," ",[],{},function(){}

if(userEmail.length==0){
    console.log("Array is empty")
}

const emptyObj={};
if(Object.keys(emptyObj).length==0){
    console.log("Object is empty")
}


//Nullish coalescing operator ?? : null undefined

// let val1;
// val1=5?? 10; //5
// val1=null?? 10;//10
// val1=undefined ?? 10 ?? 20;//10
// console.log(val1);

///Ternary operator

const icecream=200;
icecream<100 ? console.log("less than 100"):console.log("greater than 100") //false part is executed