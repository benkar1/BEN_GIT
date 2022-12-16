var questionBank= [
    {
        question: 'i ___ a pupil',
        option:['am','is','are','an'],
        answer: 'am'
    },
    {
        question: 'what has four legs',
        option:['fly','tiger','fish','snake'],
        answer: 'tiger'
    },
    {
        question: 'what is not a color',
        option:['red','green','black','car'],
        answer: 'car'
    },
    {
        question: 'select the animal',
        option:['red','cat','train','door'],
        answer: 'cat'
    },
    {
        question: 'select the definition of red',
        option:['סגול','כחול','ירוק','אדום'],
        answer: 'אדום'
    },
    {
        question: 'what can i find on a dinner table',
        option:['chair','ball','fork','hippo'],
        answer: 'fork'
    },
    {
        question: 'select the odd one',
        option:['car','train','ball','bus'],
        answer: 'ball'
    }
]

var question= document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var answersbutton = document.getElementById('check-answer');
var scoreboard= document.getElementById('scoreboard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelectorAll('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i = 0;
var score = 0;



displayQuestion();

//display the questions
function displayQuestion(){
    for (var a=0; a<span.length; a++){
        span[a].style.background='none';
    }
    question.innerHTML = 'Question- ' + (i+1)+': ' + questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question " + (i+1) + " out of " + questionBank.length;

}
//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length){
        score +=1;
        document.getElementById(e.id).style.background= 'limegreen';
    }else{
        document.getElementById(e.id).style.background= 'red';
    }
    setTimeout(nextQuestion,300);
}
//
//// set image for the scoreboard
// function getImage(){
//     const img = document.getElementById('score-img');
//
//     if(score < 3){
//         return 'url("../ICONS/sorry")';
//     }else if(score < 5){
//         img.style.backgroundImage = url('../ICONS/sorry');
//     }else if(score < 7){
//         img.style.backgroundImage = url('../ICONS/goodjob');
//     }else if(score === 7){
//         img.style.backgroundImage = url('../ICONS/excellent');
//     }
// }

//function to display next question
function nextQuestion(){
    if(i<questionBank.length - 1){
        i+=1;
        displayQuestion();
    }else{
        points.innerHTML= score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display= 'block';
    }
}

//function to check answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'block';
    answersbutton.style.display= 'none';
    for (var a = 0; a<questionBank.length; a++){
        var list= document.createElement('li');
        list.innerHTML=questionBank[a].question + ': ' + questionBank[a].answer;
        answers.appendChild(list);
    }
}

//click event to show next question
next.addEventListener('click', nextQuestion);



document.addEventListener("DOMContentLoaded", () => {
});
