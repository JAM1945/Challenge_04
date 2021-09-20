
//*Estalishing Question Array
var questions = [
  new Question("Javascript is which type of language?", ["Object-Oriented", "Object-Based", "Assembly Language", "High-Level"], "Object-Based"),
  new Question("The 'function and the 'variable are known as:", ["Key words", "Data type", "Declaration statemetns", "Prototypes"], "Declaration Statements"),
  new Question("Which of the following variables take precedence over the others if the names are the same?", ["Global variables", "Local variables", "Both of the Above", "None of the Above"], "Local variables"),
  new Question("Which of the following symbols is used to create comments in javascript?", ["\\", "//", "/* */", "\* */"], "/* */"),
  new Question("Javascript files have an extension of:", ["Java", "js", "javascript", "xml"], "js")
];



//*Creating Quiz function with questions array as parameters and assigning properties to the individual results of calling function based on parameters; also startin condition
  function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
//*Creating a QuestionIndex function to retrieve the question index position in question Array

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 

//*IF the question index is the correct answer, the score increases, and questionIndex increases to next place in Array and next qustion can be retrieved
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      var rightWrongEl = document.getElementById("rightWrongMessage");
      rightWrongEl.innerHTML = "Correct Answer";
   
        this.score++;
    }
    var rightWrongEl = document.getElementById("rightWrongMessage");
    rightWrongEl.innerHTML = "Incorrect Answer";
    this.questionIndex++;
}

//*Function that ends the quiz once the questionIndex matches the Array length
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 //*creates function with parameters that are the same as its properties
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 

//*Creating Correct answer validator function that confirms thechoice selected matches the correct answer
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;

}
 

//*Create if/else function with if starting if condition is satisfied, will execute score function; otherwise, it will equate HTML question Id w/ java Element variable and the Question text of the questions' quastionIndex property specified in the array

function populate() {
    if(quiz.isEnded() || timerEl===0) {
        showScores();
    }
    else {
        // *with otherwise 'else' statement, function will equate HTML question Id w/ java Element variable and the Question text of the questions' quastionIndex property specified in the array (i.e. question is replaced in HTML)

        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        //* creates choices variable based on QuestionIndex retrieving choices Array in the questions Array (i.e. array w/in array);
        var choices = quiz.getQuestionIndex().choices;
        //* Function then loops through the choices array until going through length of choices arrray; creating element variables that is the choice + arrayiteration# as loop continues
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            //*the HTML choice element is then replaced by the content of the choice array of "i" as the loop continues
            element.innerHTML = choices[i];
            //**also executes the guess function with btn(i) and choice[i] as parameters
            guess("btn" + i, choices[i]);
        }  
    }
};
 

//* 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
 //Scoring Function
function showScores() {
    var gameOver = "Your score is: " + quiz.score + " out of 5";
    var element = document.getElementById("Score");
    element.innerHTML = gameOver;
};
 
 
// create quiz
var quiz = new Quiz(questions);
 
// Added event listener to activate and display quiz
var StartQ = document.querySelector("#startQuiz");
StartQ.addEventListener("click", function() {
populate();});


//Timer variables

var timerEl = document.getElementById('CountDownTimer');

function countdown() {
  var timeLeft = 20;

  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;

    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } 
    
    else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
  }, 1000);
}

StartQ.onclick = countdown;