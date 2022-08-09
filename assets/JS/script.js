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
        question: "Which one isn't a type of selector?",
        ansA: "class",
        ansB: "id",
        ansC: "body",
        ansD: "element",
        crct: "c"
    },
    {
        question: "What should you not do when starting a project?",
        ansA: "brainstorm",
        ansB: "make a roughdraft",
        ansC: "look through past notes",
        ansD: "have a meltdown",
        crct: "d"
    },
    {
        question: "When was html language invented?",
        ansA: "1969",
        ansB: "1921",
        ansC: "1991",
        ansD: "1975",
        crct: "c"
    },
    {
        question: "What does HTML stand for?",
        ansA: "Hyper Tech Markup Language",
        ansB: "High Tech Mobile Language",
        ansC: " Hypertext Markup Language",
        ansD: "Hyper Text Mobile Language",
        crct: "c"
    },
    {
        question: "Which unit of time do we use for JS?",
        ansA: "Milliseconds",
        ansB: "Minutes",
        ansC: "Seconds",
        ansD: "All of the above",
        crct: "a"
    },
    {
        question: "Who created CSS?",
        ansA: "George R.R. Martin",
        ansB: "Echiro Oda",
        ansC: "Magnus Carter",
        ansD: "Hakon Wium Lie",
        crct: "d"
    },
    {
        question: "What belongs first when creating HTML codebase?",
        ansA: "<html>",
        ansB: "<head>",
        ansC: "<!DOCTYPE html>",
        ansD: "An idea",
        crct: "c"
    },
    {
        question: "Which git input command opens vs code from gitbash?",
        ansA: "node .",
        ansB: "git vs.code",
        ansC: "code .",
        ansD: "git <folder> open",
        crct: "c"
    },
    {
        question: "Who has the most expensive coding boot camp in San Antonio, Tx?",
        ansA: "UTSA",
        ansB: "Lamson Institute",
        ansC: "Codeup",
        ansD: "B & C",
        crct: "d"
    },
    {
        question: "How many lick does it take to get to the center of a tootsie pop?",
        ansA: "364",
        ansB: "421",
        ansC: "665",
        ansD: "832",
        crct: "a"
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