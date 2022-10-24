//variable to hook into the DOM
var test = document.querySelector('.test-button');
var testStart = document.querySelectorAll('.start');
var countdown = document.querySelector('#timer');
var highScore = document.querySelector('.table');
var questionContainer = document.getElementById('question-container');
var mainPage = document.querySelector('.intro');
var infoEl = document.querySelector('.info');

//variables to store values from the functions as well as the list of test questions and answers
var testQuestions = [
    {
        questionText: "Which of these will print 'Hello World' to the screen?",
        options:
        ["a: alert('Hello World')",
        "b: print('Hello World')",
        "c: console.log('Hello World')",
        "d: none of the above"],
        correctAnswer: 0,
    },
    {
        questionText: "Which element tag is used to link an external Javacript page?",
        options: 
        ["a: <head>",
        "b: <h1>",
        "c: <script>",
        "d: <link>"],
        correctAnswer: 2,
    },
    {
        questionText: "Which of these options can be used to select all of an element from the HTML?",
        options:
            ["a: document.query()",
            "b: document.getElement()",
            "c: document.querySelectAll",
            "d: document.querySelectorAll()"],
        correctAnswer: 3,
    },
    {
        questionText: "To create a div and add it to the document. You would use which of the following?",
        options:
        ["a: var divEl = document.createElement(div) , and body.appendChild(divEl)",
        "b: var divEl = document.createElement('div') , and body.appendChild(divEl)",
        "c: document.createElement('div').appendChild('body');",
        "d: divEl = document.createElement('div') , and body.appendChild(divEl)"],
        correctAnswer: 1,
    },
    {
        questionText: "True or False. Is javascript primarily used to adjust your webpages display?",
        options:
        ["a: True",
        "b: False"],
        correctAnswer: 0,
    },
    {
        questionText: "Which type of declared variable takes precendence if they have the same name?",
        options:
        ["a: global variable",
        "b: local variable",
        "c: both are the same",
        "d: none of the above"],
        correctAnswer: 1,
    },
    {
        questionText: "What is the first value in an array?",
        options:
        ["a: -1",
        "b: 1",
        "c: 0",
        "d: None of the above"],
        correctAnswer: 2,
    },
    {
        questionText: "True or False. To use an event it must be named event?",
        options:
        ["a: True",
        "b: False"],
        correctAnswer: 1,
    },
    {
        questionText: "Which of these methods will add an item to the beginning of an array?",
        options:
        ["a: shift",
        "b: unshift",
        "c: pop",
        "d: push"],
        correctAnswer: 1,
    },
];
var timer = 60;
var currentQuestion = 0;
var timeLeft;
var score = 0;
var initials;

//event listener to start the quiz when button is clicked
test.addEventListener('click', runTest);

//main function to run the test probably should have named it init.
function runTest(){
    //need something here to act like a reset


    //hide main page
    mainPage.classList.add('hidden');
    highScore.classList.add('hidden');

    timeLeft = setInterval(function(){
        timer--;
        countdown.textContent = timer;

            //if out of time end test and display prompt for initials and HS entry
        if (timer < 0){
            clearInterval(timeLeft);
            countdown.textContent = 0;
        }
    }, 1000);
    displayQuestion();
}

function displayQuestion(){
    questionContainer.innerHTML = "";
    var q = testQuestions[currentQuestion]
    var pEl = document.createElement('p');
    pEl.textContent = q.questionText;
    questionContainer.appendChild(pEl);

    for (var i = 0; i < q.options.length; i++){
        var testBtn = document.createElement('button');
        testBtn.dataset.choice = i;
        testBtn.innerText = q.options[i];
        testBtn.classList.add('test', 'col-12');
        testBtn.addEventListener('click', (event)=>{
            //check if choice matches answer
            if(event.target.dataset.choice == q.correctAnswer){
                score++;
            }else{
                timer -= 10;
                if(timer <= 0){
                  endQuiz();  
                }
            }
            //move on to next question
            currentQuestion++;
            if(currentQuestion >= testQuestions.length){
                endQuiz();
            }else {
                displayQuestion();
            }
        })
        questionContainer.appendChild(testBtn)
    }
}

function storeHs(){
    //create and display the score and initials
    var initialsEl = document.createElement('th')
    initialsEl.textContent = initials;
    document.querySelector('.score').appendChild(initialsEl);
    var scoreEl = document.createElement('th')
    scoreEl.textContent = score;
    document.querySelector('.score').appendChild(scoreEl);

    //save scores and initials to local storage
    localStorage.setItem('initials', initials);
    localStorage.setItem('score', score);
}

//function to stop timer, display main page, and hide quiz questions
function endQuiz (){
    questionContainer.classList.add('hidden');
    infoEl.classList.remove('hidden');
    clearInterval(timeLeft);
    var userInitials = document.getElementById('user-initials').value;
    initials = userInitials.toUpperCase();

    infoEl.addEventListener('submit', function(event){
        event.preventDefault();
        mainPage.classList.remove('hidden');
        infoEl.classList.add('hidden');
        document.querySelector('.table').classList.remove('hidden');
    })
    storeHs();
}