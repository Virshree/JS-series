//filter methods takes callback function and return value if condition is true.
const number=[1,2,3,4,5,6,7,8,9,10];

// const val=number.filter((item)=>item>5)
// console.log(val);//[ 6, 7, 8, 9, 10 ]


const value=number.filter((item)=>{return item>5});
// console.log(value);//[]

// console.log(value);//[ 6, 7, 8, 9, 10 ]

const myNum=[];
const newVal=number.forEach((num)=>{

    if(num>5){
        myNum.push(num);   
    }
});
// console.log(myNum);//[ 6, 7, 8, 9, 10 ]


const books=[{title:'Book one',genre:'Science',publish:1989,edition:2000

},
{title:'Book two',genre:'History',publish:1999,edition:2002

},
{title:'Book three',genre:'Fiction',publish:1979,edition:1990

},{title:'Book four',genre:'Non-fiction',publish:2002,edition:2004

},{title:'Book five',genre:'Science',publish:1990,edition:2012

}
,{title:'Book six',genre:'History',publish:1992,edition:1996

},{title:'Book seven',genre:'Science',publish:2004,edition:2006

},{title:'Book eight',genre:'fiction',publish:2000,edition:1996

},{title:'Book nine',genre:'Non-fiction',publish:2006,edition:2008

}];

const userBooks=books.filter((bk)=>bk.genre=='History');
// console.log(userBooks);
// [
//     { title: 'Book two', genre: 'History', publish: 1999, edition: 2002 },
//     { title: 'Book six', genre: 'History', publish: 1992, edition: 2005 }
//   ]


// const userBookPublish=books.filter((bk)=>bk.publish>=2000)
// console.log(userBookPublish);

// [
//     {
//       title: 'Book four',
//       genre: 'Non-fiction',
//       publish: 2002,
//       edition: 2004
//     },
//     {
//       title: 'Book seven',
//       genre: 'Science',
//       publish: 2004,
//       edition: 2006
//     },
//     {
//       title: 'Book eight',
//       genre: 'fiction',
//       publish: 2000,
//       edition: 1996
//     },
//     {
//       title: 'Book nine',
//       genre: 'Non-fiction',
//       publish: 2006,
//       edition: 2008
//     }
//   ]

// const userBookPublish=books.filter((bk)=>bk.publish>=1995 && bk.genre =='History')
// console.log(userBookPublish);
// [
//     { title: 'Book two', genre: 'History', publish: 1999, edition: 2002 }
//   ]