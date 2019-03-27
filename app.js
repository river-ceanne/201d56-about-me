
"use strict";

var questions = ["Am I girl?","Do I like sushi?","Am I a coder?","Am I an Amazon employee?","Do I play an instrument?"];

//Am I a girl?
var answer = prompt(questions[0]);
answer = answer.toLowerCase;
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

//Am I a coder?


//Am I an Amazon Employee?

//Do I play an instrument?


