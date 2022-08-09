//timer/message
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var strtBtn = 
//var answerchoise=document.selecter
//<button class ='answerchouce id = chise-4'> hcice 3

//var message = 
    'The test is over!';
var words = message;

function countdown() {
    var timeLeft = 10;

    var timeInterval = setInterval(function () {

        if (timeLeft > 1 ) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }

        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }

        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

function displayMessage() {
    var wordCount = 0;

    var msgInterval = setInterval(function () {

        if (words === undefined) {
            clearInterval(msgInterval);
        } else {
            // Display one word of the message
            mainEl.textContent = words;
            
          }

    }, 1000);
}

countdown();

//<p id="demo"></p>

//timer/message

//questions/answers
//were going to use dataquerys for variables
//var amserA = documrny.get element by id (' andwera')
//var quesIndex = questions.length-1;
//var for

var questions = [
    {
        question: "What ?",
        ansA: " ",
        ansB: " ",
        ansC: " ",
        ansD: " ",
        crct: " "
    },
    {
        question: "What ?",
        ansA: " ",
        ansB: " ",
        ansC: " ",
        ansD: " ",
        crct: " "
    },
    {
        question: "What ?",
        ansA: " ",
        ansB: " ",
        ansC: " ",
        ansD: " ",
        crct: " "
    },
    {
        question: "What ?",
        ansA: " ",
        ansB: " ",
        ansC: " ",
        ansD: " ",
        crct: " "
    },
    {
        question: "What ?",
        ansA: " ",
        ansB: " ",
        ansC: " ",
        ansD: " ",
        crct: " "
    },
    {
        question: "What ?",
        ansA: " ",
        ansB: " ",
        ansC: " ",
        ansD: " ",
        crct: " "
    },
    {
        question: "What ?",
        ansA: " ",
        ansB: " ",
        ansC: " ",
        ansD: " ",
        crct: " "
    },
    {
        question: "What ?",
        ansA: " ",
        ansB: " ",
        ansC: " ",
        ansD: " ",
        crct: " "
    },
    {
        question: "What ?",
        ansA: " ",
        ansB: " ",
        ansC: " ",
        ansD: " ",
        crct: " "
    },
    {
        question: "What ?",
        ansA: " ",
        ansB: " ",
        ansC: " ",
        ansD: " ",
        crct: " "
    },
]

//start button
/*function strtBtn() {
    questions();
}
//start button*/

//Individual question function on click: we have to turn each question into an object
/*function startQuiz() {
    var firstQ = (questions[0].question);
    var firstA = (questions[0].answer);

    questionText.innerHTML = (firstQ);
    answerText.innerHTML = (firstA);
}*/


//startBtn.addEventListener("click", startQuiz);
//nextBtn.addEventListener("click", next);

//function startqui( {countdown();}

//var currentquestin = 0;\fucntion updatequestion() {
//    choice1El.textContent = questions[currentquestion].answers
//}