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
        else if (--timer === 0) {
            clearIntertal;
        }
    }, 1000);
       
}

function startQuiz(){
    startButton.setAttribute("class", "hidden")
    strtTime();
}


function endQuiz() {
    startQuiz();
}


startButton.onclick = function () {
    
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    
    strtTime(twoMinutes, display);
    if(--timer === 0) {
      endQuiz;
    };

};

startButton.addEventListener('click', startQuiz())
 


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


