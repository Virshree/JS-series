const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls
  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 1000);
});
//resolve-success msg(.then) is used and reject-(catch) -failure msg
promiseOne.then(function () {
  console.log("promise is consumed");
});

//o/p
//after 1 sec timeout it is exceuted
//async task is complete
//promise is consumed

//without storing in variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2 complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async task consumed");
});
//async task 2 complete
//async task consumed

//How data is consumed from file system,api calls,network call

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});
//{ username: 'chai', email: 'chai@gmail.com' }

//if error exists how to handle it

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "virshree", email: "chai@gmail.com" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise in either in resolve or reject state");
  });

//try catch block using async and await approach

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1234" });
    } else {
      reject("JS ERROR Something went wrong");
    }
  }, 1000);
});

async function promiseConsumed() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
promiseConsumed();


//fetch method using async and await 
// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//        const data= await response.json();
//        console.log(data);
//     }
//  catch(error){
//     console.log(error);
//  }
// }
// getAllUsers();



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});