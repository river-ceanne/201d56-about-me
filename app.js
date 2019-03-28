
"use strict";

console.log("JS Script linked/started.");

var name;
var reply;
var yesReply = ["y","yes","true"];
var noReply = ["n","no","false"];
var visitedCountries = ["philippines","grand cayman","australia","france","dubai"];

var qAndA = [
    ["Am I girl?",yesReply], //0
    ["Do I like sushi?",yesReply],//1
    ["Am I a coder?",yesReply],//2
    ["Am I an Amazon employee?",yesReply],//3
    ["Do I play an instrument?",yesReply],//4
    ["Guess the number I'm thinking:",22],//5
    ["Guess a country I have visited:", visitedCountries]//6
];

var questions = [
    "Am I girl?",
    "Do I like sushi?",
    "Am I a coder?",
    "Am I an Amazon employee?",
    "Do I play an instrument?",
    "Guess the number I'm thinking:",
    "Guess a country I have visited:"
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

for(var i = 0; i < questions.length; i++){
    reply = prompt(questions[i]).toLowerCase();
    var counter = 0;
    var answerArr = answers[i];
    while(counter < answerArr.length){
        if(reply === answerArr[counter] || reply === answers[i]){
            console.log("Correct answer was submitted");
            alert('You are right!!!');  
            break;
        }else if(counter == answerArr.length - 1 && reply != answerArr[counter]){
            console.log("Wrong answer was submitted");
            alert("Your answer is . . wrong!");
        }

        counter++;
    }

    

}

/*

for(var i = 0; i < questions.length; i++){
    
    for(var ii = 0; ii < qAndA[i].length;ii++){

        answer = prompt(qAndA[i][0]).toLowerCase();

        var answerAr = qAndA[i][ii];
        var answerCounter = 0;

        if(i < 5){//question upto 5 -- yes/no

            while(answerCounter < answerAr.length){
                if(answer === answerAr[answerCounter]){
                    console.log("Correct answer was submitted");
                    alert('You are right!!!');  
                }
            }
           
        }//////////////////////////////////////BORDER END OF IF

        if(i == 5){//guessing a number question

            for(var iii = 4; iii > 0; iii++){
                      
            }
            


        }/////////////////////////////////////BORDER END OF IF

        if(i == 6){//guessing -- with multiple possible answers
            
        }///////////////////////////////////////BORDER END OF IF

        
    }//end of for loop checking for answers

}//end of for loop prompt each question

/*
//Am I a girl?
var answer = prompt(questions[0]).toLowerCase();
if(answer != null || answer != ""){
    if(answer === "y" || answer === "yes"){
        console.log("Correct answer was submitted");
        alert('You are right!!!');  
    }else if(answer === "n" || answer === "no"){
        console.log("Wrong answer was submitted");
        alert("Your answer is . . wrong!");
    }else{
        console.log("Invalid Answer");
        alert("Your answer was invalid.");
    }
}


//Do I like Sushi?
var answer = prompt(questions[1]).toLowerCase();
if(answer != null || answer != ""){
    if(answer === "y" || answer === "yes"){
        console.log("Correct answer was submitted");
        alert('You are right!!!');  
    }else if(answer === "n" || answer === "no"){
        console.log("Wrong answer was submitted");
        alert("Your answer is . . wrong!");
    }else{
        console.log("Invalid Answer");
        alert("Your answer was invalid.");
    }
}

//Am I a coder?
var answer = prompt(questions[2]).toLowerCase();
if(answer != null || answer != ""){
    if(answer === "y" || answer === "yes"){
        console.log("Correct answer was submitted");
        alert('You are right!!!');  
    }else if(answer === "n" || answer === "no"){
        console.log("Wrong answer was submitted");
        alert("Your answer is . . wrong!");
    }else{
        console.log("Invalid Answer");
        alert("Your answer was invalid.");
    }
}

//Am I an Amazon Employee?
var answer = prompt(questions[3]).toLowerCase();
if(answer != null || answer != ""){
    if(answer === "y" || answer === "yes"){
        console.log("Correct answer was submitted");
        alert('You are right!!!');  
    }else if(answer === "n" || answer === "no"){
        console.log("Wrong answer was submitted");
        alert("Your answer is . . wrong!");
    }else{
        console.log("Invalid Answer");
        alert("Your answer was invalid.");
    }
}

//Do I play an instrument?
var answer = prompt(questions[4]).toLowerCase();

if(answer != null || answer != ""){
    if(answer === "y" || answer === "yes"){
        console.log("Correct answer was submitted");
        alert('You are right!!!');  
    }else if(answer === "n" || answer === "no"){
        console.log("Wrong answer was submitted");
        alert("Your answer is . . wrong!");
    }else{
        console.log("Invalid Answer");
        alert("Your answer was invalid.");
    }
}
*/