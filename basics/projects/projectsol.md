## project link

 [click here](https://stackblitz.com/@Virshree)

## Solution


## Project 1 -Color switcher

 ```javascript


const buttons = document.querySelectorAll('.button');
// console.log(buttons)

const body = document.querySelector('body');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target.id)
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2 - BMI INDEX CALCULATION

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
 
  if (height == '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a a valid height :${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a a valid weight : ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
    
   if(bmi<18.6 || bmi<0){
     result.innerHTML=`<span>${bmi} -Under weight</span>`
    result.style.color='yellow';
   }
   else if (bmi>18.6 && bmi<=24.9)
   {
    result.innerHTML=`<span>${bmi} -Normal weight</span>`
    result.style.color='pink';
   }
   else {
    result.innerHTML=`<span>${bmi} -Over weight</span>`
    result.style.color='purple';
   }
  }
  
});

```

## Project 3 - Digital Clock

```javascript

const clock = document.getElementById('clock');

setInterval(() => {
  const date = new Date().toLocaleTimeString();
  // console.log(date);
  clock.innerHTML = date;
}, 1000);
```

## Project 4- Guess any number

``` javascript

let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowORhi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let playGame = true;
let numGuess = 1;
let prevGuess = [];

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess)
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //user entered number is right or wrong

  if (isNaN(guess)) {
    alert(`Please enter a valid number : ${guess}`);
  } else if (guess < 1) {
    alert(`Please enter a number more than 1 : ${guess}`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100 : ${guess}`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over .Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function displayGuess(guess) {
  //user entered number is shown in 
  userInput.value='';
  guessSlot.innerHTML+=`${guess}  , `;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message) {
  //show message to user
  lowORhi.innerHTML=`<h2>${message}</h2>`
}

function checkGuess(guess) {
  //user entered the number is high or low.
  if (guess === randomNumber) {
    displayMessage(`You guessed it right :  ${guess}`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low  : ${guess}`);
  } else if (guess > randomNumber) {
  displayMessage(`Number is too high :  ${guess}`);
  }
}

function endGame() {
  //game is end
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h1 id="newGame">Start new Game</h1>`
  startOver.appendChild(p);
  startGame();
  playGame=false;
}
function startGame() {

  const newGame=document.querySelector('#newGame');
  newGame.addEventListener('click',(e)=>{
    randomNumber=parseInt(Math.random() * 100 + 1);
    playGame=true;
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

  })
}


```
## Project 5 - Keyboard check

 ```javascript


const insert=document.getElementById('insert');
window.addEventListener('keydown',function (e){
  insert.innerHTML=`
  <div class="color">
  <table>
  <tr>
  <td>Key</td> 
  <td>KeyCode</td>
  <td>Code</td>
  </tr>
  <tr>
  <td>${e.key===' '?'SPACE':e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tr>
  </table>
  </div>`
})

```

## Project 6 - Unlimited Colors

``` javascript


// const randomColor=Math.floor(Math.random()*16);
// console.log(randomColor);
const randomColor = function () {
  const hex = '0123456789ABCEDEF';

  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
    
  }
  return color;
};
// console.log(randomColor());
let IntervalId;
function startChangingColor(){
  if(!IntervalId)
  {
    IntervalId=setInterval(changeBgColor,1000)
  }

  function changeBgColor(){
    document.body.style.backgroundColor=randomColor();
  }
}
document.querySelector('#start').addEventListener('click',startChangingColor)

function stopChangingColor(){
    clearInterval(IntervalId)
    IntervalId=null;
}
document.querySelector('#stop').addEventListener('click',stopChangingColor) 


```