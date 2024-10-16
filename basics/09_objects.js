//Declaration of objects

//singleton
//object literal

let JSUser={
    name:"Virshree",
    age:20,
    email:"virshree@gmail",
    lastLoggedIn:false,
    lastLoginDays:["Sun", "Mon", "Tue"]
}
//access objects

// console.log(JSUser.name);//Virshree

// console.log(JSUser["age"]);//20

// console.log(JSUser["lastLoginDays"][1])//Mon

// console.log(Object.freeze(JSUser));//Virshree


JSUser.greeting=function(){
    console.log("helo js user");//helo js user
   
}
// console.log(JSUser.greeting());//undefined
JSUser.greeting2=function(){
    console.log( `Hello js user , ${this.name}`);//Hello js user , Virshree
}
// console.log(JSUser.greeting2());//undefined


const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
// const obj3={obj1,obj2};
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3=Object.entries(obj1,obj2);
// console.log(obj3);//[ [ '1', 'a' ], [ '2', 'b' ] ]

// const obj3={...obj1,...obj2};
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users=[{
    name: 'John',
    email: 'john@example.com',
},
{
    name: 'JFEFohn',
    email: 'joFEFhn@example.com',
},
{
    name: 'JoFhn',
    email: 'johDFEn@example.com',
}]
console.log(Object.keys(users));
console.log(Object.values(users));