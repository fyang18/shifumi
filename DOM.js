//************************SHI-FU-MI**********************************
//
//function shifumi() {
    //Déclaration des variables
    
    // var iaChoice;
    // var playerChoice;
    // var winnerIs;
    
    //Déclaration des éléments du DOM
        
    //TODO: Fonction Jeu
      //TODO: Choix de l'IA -> iaChoice
      //TODO: récupérer le choix du joueur -> playerChoice
      //TODO: Comparer les choix (playerChoice, iaChoice)-> winnerIs
         //TODO: Si : Cas égalité
         //TODO: Sinon Si : Cas de victoire 
         //TODO: Sinon : Cas de défaite
      //TODO: Afficher les résultats
      //TODO: Afficher le choix du joueur (playerChoice)
        //TODO: Afficher le choix de l'IA (iaChoice)
        //TODO: Afficher le résultat
    //TODO: Fonction restart
    //}
    
// 
//
//
//
//      Fonction restart
//
// 



// Les Variables //
var pierre = document.getElementById("pierre");
var feuille = document.getElementById("feuille");
var ciseaux = document.getElementById("ciseaux");

var choixIA;
var choixDuIa;
var choixDuJoueur;
var choixJoueur;
var resultat;

var nouvellePartie = document.getElementById("boutonReJouer");

// ******************************************************* Faire choisir l'utilisateur et affiché sont choix //
pierre.addEventListener("click",function choixPierre() {  
    choixDuJoueur = "pierre";
    choixJoueur =0;
    document.getElementById("joueur").style.backgroundImage="url('images/caillou.png')";
    console.log(choixDuJoueur + choixJoueur);
    choixDeIa();
    comparer();
});

feuille.addEventListener("click",
function choixFeuille() {      
    choixDuJoueur = "feuille";
    choixJoueur =1;
    document.getElementById("joueur").style.backgroundImage="url('images/papier.png')";
    console.log(choixDuJoueur + choixJoueur);
    choixDeIa();
    comparer();   
});

ciseaux.addEventListener("click",
function choixCiseaux() {       
    choixDuJoueur ="ciseaux";
    choixJoueur =2;
    document.getElementById("joueur").style.backgroundImage="url('images/ciseaux.png')";
    console.log(choixDuJoueur + choixJoueur);  
    choixDeIa();
    comparer(); 
});


// ******************************************************* Faire choisir l'IA //
function choixDeIa() {
    choixIA = Math.floor(Math.random() * 3);
    choixIaResultat();
}

// ******************************************************* Faire choisir l'IA et montrer le choix //
function choixIaResultat() {
    if (choixIA == 0 ) {
        choixDuIa = "PIERRE";
        document.getElementById("afficheIa").style.backgroundImage="url('images/caillou.png')";
    }
    else if(choixIA  === 1) {
        choixDuIa= "FEUILLE";
        document.getElementById("afficheIa").style.backgroundImage="url('images/papier.png')";
    }
    else if(choixIA === 2) {
        choixDuIa = "CISEAUX";
        document.getElementById("afficheIa").style.backgroundImage="url('images/ciseaux.png')";        



    }
};
console.log(choixDuIa);

// ******************************************************* Comparer les choix //

var compteurJoueur = 0;
var compteurIa = 0;

function comparer() {
    if (choixJoueur === choixIA) {
        //console.log("Egalité");
        afficheResultat.innerHTML = "Egalité !"; 
        afficheResultat.style.color = "green";
    }
    else if ((choixJoueur==0) && (choixIA==2) || (choixJoueur==1) && (choixIA==0) || (choixJoueur==2) && (choixIA==1)){
        //console.log("Vous avez gagnez");
        afficheResultat.innerHTML = "Gagné !";
        afficheResultat.style.color = "blue";
        compteurJoueur ++;
        document.getElementById("AffichageScoreJoueur").innerHTML = compteurJoueur;
        document.getElementById("AffichageScoreJoueur").style.color = "blue";
    } else {
        //console.log("Vous avez perdus");
        afficheResultat.innerHTML = "Perdu !";
        afficheResultat.style.color = "red";
        compteurIa ++;
        document.getElementById("AffichageScoreIa").innerHTML = compteurIa;
        document.getElementById("AffichageScoreIa").style.color = "red";
    }
};

// ******************************************************* Relancer le jeu //
nouvellePartie.addEventListener("click",function(){
    window.location.reload(false);  
});

