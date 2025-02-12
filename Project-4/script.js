let newgame = document.getElementById('start-new-game');
let message = document.querySelector('#message');
let attempts = document.querySelector('#attempts');
let prevAttempts = document.querySelector('#previousAttempts');
let guessButton = document.getElementById('guessButton');
let str = "";
let count = 10;

let won = false;

let randomNumber = Math.floor(Math.random()*(100)) + 1;
// console.log(randomNumber);

const attRem = (n) => {
    attempts.innerHTML = `Attempts Remaining : ${n}`;
}


guessButton.addEventListener('click',()=>{
    let num = parseInt(document.querySelector('#num').value);

    if(count>0){

        if(isNaN(num)){
            message.innerHTML=`Try and Guess The Number between<br>1 to 100<br><br>Enter a Number`;
        }
        else if(num == randomNumber){
            count=0;
            message.innerHTML=`You Won<br>The number was ${randomNumber}<br><br>START NEW GAME`;
            won = true;
        }
        else if(count>0){
            document.querySelector('#num').value = '';
            attRem(--count);
            if(str == ""){
                str = str + `${num}`;
            }
            else{
                str = str + ` | ${num}`;
            }
            prevAttempts.innerHTML=`Previous Attempts :<br><br>${str}`;
            if(num<randomNumber){
                message.innerHTML=`Try and Guess The Number between<br>1 to 100<br><br>Number is too Low`;
            }
            else{
                message.innerHTML=`Try and Guess The Number between<br>1 to 100<br><br>Number is too High`;
            }
        }
    }
    if(count==0){
        if(won){
            message.innerHTML=`You Won<br>The number was ${randomNumber}<br><br>START NEW GAME`;
        }
        else{
            message.innerHTML=`GAME OVER<br>The number was ${randomNumber}<br><br>START NEW GAME`;
        }
        guessButton.style.opacity = 0.1;
        
    }


});


newgame.addEventListener('click',()=>{
    message.innerHTML = `Try and Guess The Number between<br>1 to 100<br>You have 10 attempts to guess the right<br>number`;
    document.querySelector('#num').value = '';
    prevAttempts.innerHTML=`Previous Attempts :<br><br> - `;
    randomNumber = Math.floor(Math.random()*(100)) + 1;
    count = 10;
    str="";
    attRem(10);
    won = false;
    guessButton.style.opacity = 1;
});