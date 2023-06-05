var questionBank= [
    {question: 'Q1.  Who is the president of Nigeria?',
        option: ['Muhammadu Buhari', 'Bola Tinubu', 'Winner Michael', 'Goodluck Jonathan'],
        answer: 'Bola Tinubu'
    },
    {question: 'Q2. Who owns Tesla?',
       option: ['Elon Musk', 'Bill Gates', 'Louis Vuitton', 'Joe Biden'],
       answer: 'Elon Musk'
    },
    {question: 'Q3. Rukia from BLEACH is a/an?',
        option: ['Arrancar', 'Quincy', 'Shinigami','Espada'],
        answer: 'Shinigami'
    },
    {question: 'Q4. What sport does Lebron James play?',
        option: ['Basketball', 'Football', 'Volleyball', 'Lawn Tennis'],
        answer: 'Basketball'
    },
    {question: 'Q5. Israel Adesanya is the current _______ champion?',
        option: ['Featherweight', 'Heavyweight', 'Lightweight', 'Middleweight'],
        answer: 'Middleweight'
    }
    
]
var question = document.querySelector('.question');
var quizContainer = document.querySelector('.quizContainer');
var opt = document.querySelector('.opt');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('points');
var score = 0;
var i = 0;
var btn = document.querySelector('.btn');
var prev = document.querySelector('.prev')
var body = document.getElementById('body')
var change = document.querySelector('.change')
var scoreboard = document.querySelector('.scoreboard')
var span = document.querySelectorAll('span')
var backToQuiz = document.getElementById('score-btn')
var checkAnswer= document.getElementById('check-answer')
var stat= document.getElementById('stat')


function displayQuestion(){
    for(var a=0; a<span.length; a++){
        span[a].style.background = 'none'
    }
    stat.innerHTML = "Question" + " " + (i+1) + " of"+ " " +questionBank.length
question.innerHTML = questionBank[i].question
option0.innerHTML= questionBank[i].option[0]
option1.innerHTML= questionBank[i].option[1]
option2.innerHTML= questionBank[i].option[2]
option3.innerHTML= questionBank[i].option[3]
}
const darkMode = () =>{
    body.classList.toggle('darkmode')
}
change.addEventListener('click', darkMode)
function prevQ(){
    if (i <=questionBank.length){
        i--
        displayQuestion()
    }
}
prev.addEventListener('click', prevQ)

function nextQ(){
    if (i < questionBank.length-1 ){
    i= i+1
    displayQuestion()
}
else{
    quizContainer.style.display= 'none'
    scoreboard.style.display= 'block'
    points.innerHTML= score+ '/' + questionBank.length
}
}
btn.addEventListener('click', nextQ)

question.innerHTML = 'Q '+ (i+1)+ ' ' + questionBank;
// dark.addEventListener('click', function(){
//     h1.classList.add('.darkmode')
// })
function calcScore(w){
    if(w.innerHTML === questionBank[i].answer && score<questionBank.length)
    {
        score = score +1
        document.getElementById(w.id).style.background = 'crimson'
    }
    else{
        document.getElementById(w.id).style.background= 'black'
    }
    setTimeout(nextQ,300);
}

function backtoQuiz(){
    location.reload();
}
backToQuiz.addEventListener('click', backtoQuiz)

function checkAnswerz(){
    var answerBank = document.getElementById('answerBank')
    var answers = document.getElementById('answers')
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a= 0; a<questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
  }  
  
  }
  



checkAnswer.addEventListener('click', checkAnswerz)



























displayQuestion()