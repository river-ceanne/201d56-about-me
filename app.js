
//"use strict";

var questions = ['Am I girl?','Do I like sushi?','Am I a coder?','Am I an Amazon employee?','Do I play an instrument?'];

//var arraylength = questions.length;

questions.forEach(element => {

  var answer = prompt(element).toLowerCase;

  if (answer === 'yes' || answer === 'y'){
      console.log('You are right!!!');
      alert('You are right!!!');
  }else if(answer === null || answer === ''){
      console.log('Your answer is blank.');
      alert('Your answer is blank.');
  }else{
      console.log('You are wrong!');
      alert('Your answer is wrong!');
  }

  answer = null;

});