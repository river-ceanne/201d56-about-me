
"use strict";

console.log("JS Script linked/started.");

var name;
var rightAnswersNum = 0;
var reply;
var yesReply = ["y","yes","true"];
var noReply = ["n","no","false"];
var visitedCountries = ["philippines","grand cayman","australia","france","dubai"];
var countryTries = 6;
var countryGuessed = false;
var numberTries = 4;
var numberGuessed = false;

var questions = [
    "Am I girl?",
    "Do I like sushi?",
    "Am I a coder?",
    "Am I an Amazon employee?",
    "Do I play an instrument?",
    "Guess the number I'm thinking:", //4 tries
    "Guess a country I have visited:" // 6 tries
];

var answers = [
    yesReply,
    yesReply,
    yesReply,
    yesReply,
    yesReply,
    "22",
    visitedCountries
];

name = prompt("Let's play a guessing game about me, but first tell me your name.");
if(name == null || name === ""){
    name = "anonymous person"
}
alert("Welcome " + name + "! Let's proceed!");

for(var i = 0; i < 5; i++){
    reply = prompt(questions[i]).toLowerCase();
    var counter = 0;
    var answerArr = answers[i];
    while(counter < answerArr.length){
        if(reply === answerArr[counter] || reply === answers[i]){
            console.log("Correct answer was submitted");
            alert('You are right!!!');  
            rightAnswersNum++;
            break;
        }else if(counter == answerArr.length - 1 && reply != answerArr[counter]){
            console.log("Wrong answer was submitted");
            alert("Your answer is . . wrong!");
        }

        counter++;
    }
}

while(numberTries != 0){
    reply = prompt(questions[5]).toLowerCase();
    var counter = 0;
    var answerArr = answers[5];
    while(counter < answerArr.length){
        if(reply === answerArr[counter] || reply == answers[5]){
            console.log("Correct answer was submitted");
            alert('You are right!!!');  
            rightAnswersNum++;
            numberGuessed = true;
            break;
        }else if(counter == answerArr.length - 1 && reply != answerArr[counter]){
            console.log("Wrong answer was submitted");
            alert("Your answer is . . wrong! Try Again!");
        }

        counter++;
    }

    if(numberGuessed){
        break;
    }

    numberTries--;
    if(numberTries == 0){
        alert("You get no more tries for this question! Sorry T_T");
    }
}

while(countryTries != 0){
    reply = prompt(questions[6]).toLowerCase();
    var counter = 0;
    var answerArr = answers[6];
    while(counter < answerArr.length){
        if(reply === answerArr[counter] || reply === answers[5]){
            console.log("Correct answer was submitted");
            alert('You are right!!!');  
            rightAnswersNum++;
            countryGuessed = true;
            break;
        }else if(counter == answerArr.length - 1 && reply != answerArr[counter]){
            console.log("Wrong answer was submitted");
            alert("Your answer is . . wrong! Try again!");
        }

        counter++;
    }

    if(countryGuessed){
        break;
    }

    countryTries--;
    if(countryTries == 0){
        alert("You get no more tries for this question! Sorry T_T");
    }
}


alert("You got " + rightAnswersNum + " out of 7 questions right. ");