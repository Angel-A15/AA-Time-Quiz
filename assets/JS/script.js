//timer/message
var startButton = document.querySelector('#strt');
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

//countdown timer function

//sets the timer
function strtTime(duration, display){
        
        
    var timer = duration, minutes, seconds;
    
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
    
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
    
       display.textContent = minutes + ":" + seconds;
    
        if (--timer < 0) {
            timer=duration;
        }
    }, 1000);
       
}

window.onload = function () {
    
    var fiveMinutes = 60 * 2,
        display = document.querySelector('#time');
    
    strtTime(fiveMinutes, display);
    
    
};

function countdown() {


    //sets event at 10 secs
    var message
        'The test is over!';
    var words = message;


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
//countdown timer function


//when timer reaches last 10 sec
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
//when timer reaches last 10 seconds




//quesitons/answers variable
var questions = [
    {
        question: "Which one isn't a type of selector?",
        answers: [
            "class", "id", "body", "element",
        ],
        crctA: "c"
    },
    {
        question: "What should you not do when starting a project?",
        answers: [
            "brainstorm","make a roughdraft", "look through past notes", "have a meltdown",
        ],
        crctA: "d"
    },
    {
        question: "When was html language invented?",
        answers: [
            "1969", "1921", "1991", "1975",
        ],
        crctA: "c"
    },
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Tech Markup Language", "High Tech Mobile Language", " Hypertext Markup Language", "Hyper Text Mobile Language",
        ],
        crctA: "c"
    },
    {
        question: "Which unit of time do we use for JS?",
        answers: [
            "Milliseconds", "Minutes", "Seconds", "All of the above",
        ],
        crctA: "a"
    },
    {
        question: "Who created CSS?",
        answers: ["George R.R. Martin","Echiro Oda","Magnus Carter","Hakon Wium Lie",
        ],
        crctA: "d"
    },
    {
        question: "Which git input command opens vs code from gitbash?",
        answers:[
            "node .", "git vs.code", "code .", "git <folder> open",
        ],
        crctA: "c"
    },
    {
        question: "Who has the most expensive coding boot camp in San Antonio, Tx?",
        answers: [
            "UTSA", "Lamson Institute", "Codeup", "B & C",
        ],
        crctA: "d"
    },
]
//questions/answers variable


//question/answer loop function
function renderQuestion(data) {
    //clears existing data
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    //for loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
      
    }
}

function checkAnswers(){
    answersDiv.innerHTML = "";
    liCreate.innerHTML = "";
    for(var i=0; i < answers.length; i++){

    }

}
//question/answer loop function



function startQuiz(){
    startButton.setAttribute("class", "hidden")
    strtTime();
}

startButton.addEventListener('click', startQuiz())
 
