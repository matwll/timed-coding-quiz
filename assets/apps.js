//variable to hook into the DOM
var test = document.querySelector('.test-button');
var testStart = document.querySelectorAll('.start');
var countdown = document.querySelector('#timer');
var highScore = document.querySelector('.table');

//create test question variables and timer
// var testQuestions = [
//     {
//         questionText: "Which of these will print 'Hello World' to the screen",
//         options:
//         ["a: alert('Hello World')",
//         "b: print('Hello World')",
//         "c: console.log('Hello World')",
//         "d: none of the above"],
//         correctAnswer: a,
//     },
//     {
//         questionText: "Which element tag is used to link an external Javacript page?",
//         options: 
//         ["a: <head>",
//         "b: <h1>",
//         "c: <script>",
//         "d: <link>"],
//         correctAnswer: c
//     },
//     {
//         questionText: "Which of these options can be used to select all of an element from the HTML",
//         options:
//             ["a: document.query()",
//             "b: document.getElement()",
//             "c: document.querySelectAll",
//             "d: document.querySelectorAll()"],
//         correctAnswer: d
//     },
//     {
//         questionText: "",
//         a: "",
//         b: "",
//         c: "",
//         d: ""
//     },
//     {
//         questionText: "",
//         a: "",
//         b: "",
//         c: "",
//         d: ""
//     },
//     {
//         questionText: "",
//         a: "",
//         b: "",
//         c: "",
//         d: ""
//     },
//     {
//         questionText: "",
//         a: "",
//         b: "",
//         c: "",
//         d: ""
//     },
//     {
//         questionText: "",
//         a: "",
//         b: "",
//         c: "",
//         d: ""
//     },
//     {
//         questionText: "",
//         a: "",
//         b: "",
//         c: "",
//         d: ""
//     },
//     {
//         questionText: "",
//         a: "",
//         b: "",
//         c: "",
//         d: ""
//     },
// ];
var timer = 2;

//event listener to start the quiz when button is clicked
test.addEventListener('click', runTest);

//main function to run the test
function runTest(){

    var timeLeft = setInterval(function(){
        timer--;
        countdown.textContent = timer;

            //if out of time end test and pop up for initials and HS entry
        if (timer === 0){
            clearInterval(timeLeft);
            usersInitials = prompt('Enter your initials');
        }
    }, 1000);


}