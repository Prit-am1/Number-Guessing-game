'use strict';

let item1 = document.querySelector(".check");
item1.addEventListener("click",itemList);
let guessNumber = Math.ceil(Math.random()*20);
// console.warn(guessNumber);
let score = 20;
let newMessage = function(message){
    return document.querySelector(".message").textContent = message;
}
let ele = document.querySelector(".again");
ele.addEventListener("click", itemList1);

function itemList(e){
e.preventDefault();
let item2 = Number(document.querySelector(".guess").value);
if(!item2){
    newMessage('No value entered. Enter one !!!');
}
else if(item2===guessNumber){
    document.querySelector(".number").textContent = guessNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    newMessage("Congratulations !!! you have gussed the correct number");
    document.querySelector(".highscore").textContent = score;
    
}
else if(item2!==guessNumber){
    if(score>1){
    item2>guessNumber ? newMessage("You have gussed too high") : newMessage("You have gussed too low");
    score--;
    document.querySelector(".score").textContent = score;
    }
    else{
        newMessage("You have lost the game !!!");
        document.querySelector(".score").textContent = score;
    }
}
}


function itemList1(){
// e.preventDefault();
document.querySelector(".guess").value = "";
newMessage("Start guessing...");
document.querySelector(".score").textContent = 20;
score = 20;
guessNumber = Math.ceil(Math.random()*20);
// console.warn(guessNumber1);
document.querySelector("body").style.backgroundColor = "#222";
document.querySelector(".number").textContent = "?";
// document.querySelector(".number").value = Number(guessNumber1);
document.querySelector(".number").style.width = "15rem";
document.querySelector(".number").style.backgroundColor = " #eee";
document.querySelector(".number").style.fontColor = "#333";
document.querySelector(".number").style.fontSize = "6rem";
document.querySelector(".number").style.padding =  "3rem 0rem";
document.querySelector(".number").style.textAalign =  "center";
document.querySelector(".number").style.position =  "absolute";
document.querySelector(".number").style.bottom =  "0";
document.querySelector(".number").style.left =  "50%";
document.querySelector(".number").style.transform =  "translate(-50%, 50%)";
}