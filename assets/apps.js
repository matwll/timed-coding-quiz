//variable to hook into the DOM
var test = document.querySelector('.test-button');
var testStart = document.querySelectorAll('.start');
var countdown = document.querySelector('#timer');
var highScore = document.querySelector('.table');
var questionContainer = document.getElementById('question-container');

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
var timer = 5;
var currentQuestion = 0;
var timeLeft;


//event listener to start the quiz when button is clicked
test.addEventListener('click', runTest);

//main function to run the test
function runTest(){

    timeLeft = setInterval(function(){
        timer--;
        countdown.textContent = timer;

            //if out of time end test and pop up for initials and HS entry
        if (timer < 0){

            clearInterval(timeLeft);
            countdown.textContent = 0;
            usersInitials = prompt('Enter your initials');

            //add initials and score to high score table and local storage
            // var table = document.createElement('tr');
            // var  = document.createElement('th');

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
        testBtn.addEventListener('click', (event)=>{
            //check if choice matches answer
            if(event.target.dataset.choice == q.correctAnswer){
                console.log('correct');
            }else{
                console.log('wrong');
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

function endQuiz (){
    questionContainer.innerHTML = "finished";
    clearInterval(timeLeft);
}