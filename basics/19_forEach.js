const coding=["js","python","cpp","css","html"];


//forEach takes callback funtcion  and returns parameter as item,index,array

coding.forEach(function (value){
// console.log(value);
})

// js
// python
// cpp
// css
// html

coding.forEach((item)=>{
    // console.log(item);
})


// coding.forEach((item,index,arr)=>{console.log(item,index,arr)});

// js 0 [ 'js', 'python', 'cpp', 'css', 'html' ]
// python 1 [ 'js', 'python', 'cpp', 'css', 'html' ]
// cpp 2 [ 'js', 'python', 'cpp', 'css', 'html' ]
// css 3 [ 'js', 'python', 'cpp', 'css', 'html' ]
// html 4 [ 'js', 'python', 'cpp', 'css', 'html' ]


const myCoding=[{
    languageName:   'python',
    languageFileName:"py"
},{
    languageName:   'java',
    languageFileName:"java"
},{
    languageName:   'javascript',
    languageFileName:"js"
}]

myCoding.forEach((item)=>{
    // console.log(item.languageFileName)
})
// py
// java
// js

