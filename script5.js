
"use strict"
let again=document.querySelector(".again");
let number=document.querySelector(".number");
let guess=document.querySelector(".guess");
let check=document.querySelector(".check");
let message=document.querySelector(".message");
let score=document.querySelector(".score");
let highScore=document.querySelector(".highScore");
let body=document.querySelector("body");


//let secretNumber//let secretNumber=Math.random();
//let generateSecNum=function(){
let secretNumber=Math.random();
//secretNumber=Math.random();
secretNumber=secretNumber*20+1;
secretNumber=Math.floor(secretNumber);
console.log(secretNumber);
//};
//console.log(secretNumber);

let highscorevalue=0;
let scorevalue=20;
//let secretNumber=Math.random();
//secretNumber=secretNumber*20+1;
//secretNumber=Math.floor(secretNumber);
//console.log(secretNumber);

number.textContent=guess.value;

check.addEventListener("click",function(event){
    let guessNum=Number.parseInt(guess.value);
//    secretNumber=generateSecNum();
    //check ur guess matches with secret
    if(guessNum===secretNumber){
        //bodg-->green
        body.style.backgroundColor="green";
        //.?->secretNumber
        number.textContent=secretNumber;
        //highh score evaluation
 //       highScore.textContent=highscorevalue+1;
        if(highscorevalue<scorevalue)
        {
            highscorevalue=scorevalue;
            highScore.textContent=highscorevalue;
        }
        //message changes->correctNum
        message.textContent="Correct Number!!";
    }
        //score
    else if(guessNum<secretNumber)
    {
            message.textContent="too low";
            scorevalue--;
            score.textContent=scorevalue;
            body.style.backgroundColor="red";
    }
      //      number.textContent=guessNum;
       //     if(highscorevalue<scorevalue)
       ////         {
       //             highscorevalue=scorevalue;
        //            highScore.textContent=highscorevalue;
          //      }
          //  message.textContent="Wrong Number";
    else if(guessNum>secretNumber)
    {
             message.textContent="too high";
            scorevalue--;
            score.textContent=scorevalue;
    }
    again.addEventListener("click",function(ev){
        secretNumber=generateSecNum();
        body.style.backgroundColor="black";
        message.textContent="start guessing";
        number.textContent="?";
        score.textContent="20";
        scorevalue=20;
        guess.value="0";
    })
    }

);


