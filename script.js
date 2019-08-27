var index = 0, quiz, titre, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["", "", "", "", ""], // index 1 question
    ["", "", "", "", ""],//index 1, 2 et 3 = choix
    ["", "", "", "", ""],// index 4 solution
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

function game(x) {
    return document.getElementById(x);
}
function renderQuestion() { //rendu des reponses correctes avec fin du quiz
    quest = game("quiz");
    while(index >= questions.length && correct >=3) {
        quest.innerHTML = "<h2> Tu as " + correct + " réponses correctes sur " + questions.length + "  questions : <br>Good Job</h2>";
        game("titre").innerHTML = "<h2> Quiz terminé </h2>";
        game('quiz').style.textAlign = 'center'; //centre le renvoi 
        index = 0;
        correct = 0;
        return false;
        
    }if(index >= questions.length && correct <2) {
        quest.innerHTML = "<h2> Tu as " + correct + " réponses correctes sur " + questions.length + "  questions : </br>Bad Job</h2>";
        game("titre").innerHTML ="<h2> Quiz terminé </h2>";
        game('quiz').style.textAlign = 'center'; //centre le renvoi
        index = 0;
        correct = 0;
        return false;
    }

    game("titre").innerHTML = "Questions  " + (index + 1) + "  sur  " + questions.length; //n° de la question en cours
    question = questions[index][0];
    chA = questions[index][1];
    chB = questions[index][2];                                                            //edition des choix multiples et ccs/js
    chC = questions[index][3];
    quest.innerHTML = "<h3>  " + question + "</h3>";
    quest.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    quest.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    quest.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
    quest.innerHTML += "<button  onclick='checkAnswer()' > Suivant ! </button>";
    quest.style.fontSize = '40px';

}

function checkAnswer() {                                                     //avancement du process avec calcul des bonnes réponses
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice === questions[index][4]) {
        correct++;
    }
    index++;
    renderQuestion();        //renvoi à la prochaine question (renderQuestion avec avec verif qui terminé or not)
    choice = 0;  //init de choice pr eviter d'enregistrer le dernier resultat courant 
}

window.addEventListener("load", renderQuestion, false);


