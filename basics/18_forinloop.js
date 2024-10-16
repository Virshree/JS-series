const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift",
}
for (const key in myObject) {
 
    // console.log( ` ${key} shortcut is  ${myObject[key]}`);
}
//o/p

// js shortcut is  javascript
// cpp shortcut is  c++
// rb shortcut is  ruby
// swift shortcut is  swift


const myArray = ["js","ruby","java","cpp"];
for (const key in myArray) {
    // console.log(` ${key}`);//0123 
    // console.log(myArray[key]);
}
//o/p
// js
// ruby
// java
// cpp