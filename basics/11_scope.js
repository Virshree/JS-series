const   a=200;
function inner(){
    
    // let a=2000;
    const b=30;
    // console.log(a);//200

}
inner();
//let ,const are block scope
//var is global scopeooo
function one(){
    const username="ranu";

    function two(){
        const website="youtube";
        // console.log(username);//ranu
    }
    // console.log(website);
    two();

}
one();


if(true){
    const username="ranu";
        if(username=="ranu"){
            const website="youtube";
            // console.log(username  +" "+ website);o//ranu youtube
        }
        // console.log(website); error throws
}
// console.log(username);//error throws


function addOne(num1){
    return num1+2
}
console.log(addOne(5));//7

console.log(addTwo(2));//throws error because of hoisting 
const addTwo=function(num1){
    return num1+2;
}
