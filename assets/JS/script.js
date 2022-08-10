//timer/message
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

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

    window.onload = function () {
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
    
        strtTime(fiveMinutes, display);
    };
    //countdown function
    

    //when timer reaches last 10 sec
    var message
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
    

}


//when timer reaches last 10 seconds

//quuesitons/answers
var questions = [
    {
        question: "Which one isn't a type of selector?",
        answers: {
            a:"class",
            b: "id",
            c: "body",
            d: "element",
        },
        crctA: "c"
    },
    {
        question: "What should you not do when starting a project?",
        answers: {
        a: "brainstorm",
        b: "make a roughdraft",
        c: "look through past notes",
        d: "have a meltdown",
        },
        crctA: "d"
    },
    {
        question: "When was html language invented?",
        answers: {
        a: "1969",
        b: "1921",
        c: "1991",
        d: "1975",
        },
        crctA: "c"
    },
    {
        question: "What does HTML stand for?",
        answers: {
        a: "Hyper Tech Markup Language",
        b: "High Tech Mobile Language",
        c: " Hypertext Markup Language",
        d: "Hyper Text Mobile Language",
        },
        crctA: "c"
    },
    {
        question: "Which unit of time do we use for JS?",
        answers: {
        a: "Milliseconds",
        b: "Minutes",
        c: "Seconds",
        d: "All of the above",
        },
        crctA: "a"
    },
    {
        question: "Who created CSS?",
        answers: {
        a: "George R.R. Martin",
        b: "Echiro Oda",
        c: "Magnus Carter",
        d: "Hakon Wium Lie",
        },
        crctA: "d"
    },
    {
        question: "What belongs first when creating HTML codebase?",
        answers: {
        a: "<html>",
        b: "<head>",
        c: "<!DOCTYPE html>",
        d: "An idea",
        },
        crctA: "c"
    },
    {
        question: "Which git input command opens vs code from gitbash?",
        answers: {
        a: "node .",
        b: "git vs.code",
        c: "code .",
        d: "git <folder> open",
        },
        crctA: "c"
    },
    {
        question: "Who has the most expensive coding boot camp in San Antonio, Tx?",
        answers: {
        a: "UTSA",
        b: "Lamson Institute",
        c: "Codeup",
        d: "B & C",
        },
        crctA: "d"
    },
    {
        question: "How many lick does it take to get to the center of a tootsie pop?",
        answers: {
        a: "364",
        b: "421",
        c: "665",
        d: "832",
        },
        crctA: "a"
    },
]
//quuesitons/answers
var quizContainer = document.getElementById('quiz');


function quiz(){

    var output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {

            var answers = [];

            for (letter in currentQuestion.answers){

                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

questions.forEach( (currentQuestion, questionNumber) => {
    var answers = [];

    for(letter in currentQuestion.answers) {

        answers.push (
            `<label>
                <input type="radio" name="questions${questionNumber}" value = "${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
        );
    }

    `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join('')}</div>`
});



//start button
var startEl = document.querySelector('#strt');

    startEl.addEventListener('click', function(){
        questions;
        console.log(questions);

        //countdown function//


    

});
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



//<p id="demo"></p>

//timer/message

//questions/answers
//were going to use dataquerys for variables
//var amserA = documrny.get element by id (' andwera')
//var quesIndex = questions.length-1;
//var for
