
document.querySelector('.response').style.display= 'none'; // question/reponse hidden

var index = 0, quiz, titre, question, choice, choices, chA, chB, chC, correct = 0; // declaration des variables utilisées
var questions = [
    ["Quel célèbre dictateur dirigea l’URSS du milieu des années 1920 à 1953 ?", "Staline", "Lénine", "Trotski", "A"], // index 0 question
    ["Dans quel pays peut-on trouver la Catalogne, l’Andalousie et la Castille ?", "La France", "L'Espagne", "La Hongrie", "B"],//index 1, 2 et 3 = choix
    ["Qui a dit “ Le sort en est jeté” 'Alea jacta est'? ", "Napoléon", "Hitler", "Jules César", "C"],// index 4 solution
    ["Quel cinéaste a réalisé “Parle avec elle” et “Volver” ? ", "Pablo Trapero", "Pedro Almodovar", "Woody Allen", "B"],
    ["Quel pays a remporté la coupe du monde de football en 2014 ? ", "L'Allemagne", "La France", "Le Brésil", "A"],
    ["Dans quelle ville italienne se situe l’action de la pièce de Shakespeare “Roméo et Juliette” ?", "Verone", "Rome", "Venise", "A"],
    ["Par quel mot désigne-t-on une belle-mère cruelle ?", "Une marâtre", "Une godiche ", "Une miratre", "A"],
    ["Qui était le dieu de la guerre dans la mythologie grecque ? ", "Hermès", "Arès", "Appolon", "B"],
    ["Parmi les animaux suivants, lequel peut se déplacer le plus rapidement ? ", "Le guépard", "Le springbok", "Le léopard", "A"],
    ["Quel est l’impératif du verbe feindre à la première personne du pluriel ?", "Feigniez !", "Feins !", "Feignons !", "C"],
    ["Quel roi de France proclama l’Édit de Nantes ?", "Henri IV", "François Ier", "Louis XIV ", "A"],
    ["À quel écrivain attribue-t-on la rédaction de l’Illiade et l’Odyssée ?", "Homère", "Euripide ", "Sophocle", "A"],
    ["Qui s’est déclaré “premier flic de France” ?", "Georges Clemenceau ", "Charles de Gaulle", "Manuel Valls ", "A"],
    ["Quel acteur américain incarne le héros du film de Christopher Nolan de 2014 “Interstellar” ?", "Brad Pitt", "Léonardo di Caprio", "Matthew MacConaughey", "C"],
    ["Quel est le plus long fleuve en France ?", "La Loire", "Le Rhône", "La Seine", "A"],
    ["Le drapeau russe est blanc, bleu et…?", "Rouge", "Vert", "Blanc", "A"],
    ["Quel journal a été attaqué par des terroristes islamistes en janvier 2015 ?", "Charlie Hebdo", "Le Monde", "Le Figaro", "A"],
    ["Quel animal andin de la famille des camélidés est élevé pour sa laine ?", "Le Yak", "La lama", "Le buffle", "B"],
    ["Quelle est la date de la signature de l’armistice de la Première Guerre mondiale ?", "8 mai 1918", "11 novembre 1919", "11 novembre 1918", "C"],
    ["À qui doit-on la chanson “ I Shot the Sheriff” ? ", "Bob Marley", "Eric Clapton", "UB40", "A"]
];

function game(x) {
    return document.getElementById(x);
}

function renderQuestion() { //rendu des reponses correctes avec fin du quiz
    quest = game("quiz");
    while(index >= questions.length && correct >=13) {
        quest.innerHTML = "<h2> Tu as " + correct + " réponses correctes sur " + questions.length + "  questions : <br>Bien joué l'ami</h2>"; //Gagné
        result();
        return false;
        
    }if(index >= questions.length && correct <13 && correct >=8) {
        quest.innerHTML = "<h2> Tu as " + correct + " réponses correctes sur " + questions.length + "  questions : </br>Encore un peu de travail  à faire</h2>"; // Perdu
        result();
        return false;
    }if(index >= questions.length && correct <8) {
        quest.innerHTML = "<h2> Tu as " + correct + " réponses correctes sur " + questions.length + "  questions : </br>La librairie la plus proche est ta meilleure amie</h2>"; // Perdu
        result();
        return false;
    }

    game("titre").innerHTML = "Questions  " + (index + 1) + "  sur  " + questions.length; //n° de la question en cours
    question = questions[index][0];
    chA = questions[index][1];
    chB = questions[index][2];                                                            //edition des choix multiples et ccs/js
    chC = questions[index][3];
    quest.innerHTML = "<h3>  " + question + "</h3>";
    quest.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    quest.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";  // choix multiples
    quest.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
    quest.innerHTML += "<button  onclick='checkAnswer()' > Question suivante ! </button>";
    quest.style.fontSize = '22px';
}

function checkAnswer() {      //avancement du process avec calcul des bonnes réponses
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    } if (choice === questions[index][4]) {
        correct++;
    }
    index++;
    renderQuestion();        //renvoi à la prochaine question (renderQuestion avec avec verif qui terminé or not)
    choice = 0;              //init de choice pr eviter d'enregistrer le dernier resultat courant 
}

function result(){
    game("titre").innerHTML ="<h2> Quiz terminé </h2>";
    game('quiz').style.textAlign = 'center'; //centre le renvoi
    document.querySelector('.response').style.display= 'block';
    document.querySelector('.response').style.color= 'red';
    document.querySelector('.response').style.fontSize= '22px';
    index = 0;
    correct = 0;
    
}
window.addEventListener("load", renderQuestion, false);


