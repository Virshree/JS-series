//for of

//It is used in String,objects,number

const arr=[1,2,3,4,5,];
for (const num of arr) {
    // console.log(num) ;   //12345

}

const states=["jaipur","pune","mumbai"];
for (const names of states) {
// console.log(names);//jaipur pune mumbai
}

//map

const map=new Map();
// console.log(map);//Map(0) {}

map.set("IN","INDIA");

map.set("USA","United States of America"); 
map.set("Fr","France");
// console.log(map);

// //Map(3) {
//     'IN' => 'INDIA',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }


for([key,values] of map){
    // console.log(key,":-",values);
}
//array destructuring key,values
// IN :- INDIA
// USA :- United States of America
// Fr :- France

const myObject={
    'game1':"NFS",
    'game2':"Spiderman"
}

for (const [key,value] of myObject) {
    // console.log(key,": " ,value)//error message
}