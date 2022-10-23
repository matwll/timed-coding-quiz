//variable to hook into the DOM
var test = document.querySelector('.test-button');
var testStart = document.querySelectorAll('.start');
var countdown = document.querySelector('#timer');
var highScore = document.querySelector('.table');
var questionContainer = document.getElementById('question-container');
var mainPage = document.querySelector('.intro');

//create test question variables and timer
var testQuestions = [
    {
        questionText: "Which of these will print 'Hello World' to the screen",
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
        questionText: "Which of these options can be used to select all of an element from the HTML",
        options:
            ["a: document.query()",
            "b: document.getElement()",
            "c: document.querySelectAll",
            "d: document.querySelectorAll()"],
        correctAnswer: 3,
    },
    // {
    //     questionText: "",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: ""
    // },
    // {
    //     questionText: "",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: ""
    // },
    // {
    //     questionText: "",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: ""
    // },
    // {
    //     questionText: "",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: ""
    // },
    // {
    //     questionText: "",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: ""
    // },
    // {
    //     questionText: "",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: ""
    // },
    // {
    //     questionText: "",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: ""
    // },
];
var timer = 60;
var currentQuestion = 0;
var timeLeft;
var score = 0;


//event listener to start the quiz when button is clicked
test.addEventListener('click', runTest);

//main function to run the test
function runTest(){

    mainPage.classList.add('hidden');
    document.querySelector('.table').classList.add('hidden');

    timeLeft = setInterval(function(){
        timer--;
        countdown.textContent = timer;

            //if out of time end test and pop up for initials and HS entry
        if (timer < 0){

            clearInterval(timeLeft);
            countdown.textContent = 0;
            usersInitials = prompt('Enter your initials');

            //add initials and score to high score table and local storage
            function scoreAdd(){}

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


//function to stop timer, display main page, and hide quiz questions
function endQuiz (){
    questionContainer.classList.add('hidden');
    mainPage.classList.remove('hidden');
    document.querySelector('.table').classList.remove('hidden');
    clearInterval(timeLeft);
}