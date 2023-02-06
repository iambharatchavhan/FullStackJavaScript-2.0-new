let statNum = document.getElementsByClassName('stat')
let statValue = document.getElementsByClassName('stat-value')




function allClasses (className){
    for(i=0 ; i < className.length; i++){
        className[i].style.color = "#ffffff";
    }
}
allClasses(statNum);
allClasses(statValue);

//& background color 

const giant = document.getElementsByClassName("clash-card__unit-stats--barbarian")[0];

giant.style.backgroundColor = "#A57512"

//^---------

const archer = document.getElementsByClassName("clash-card__unit-stats--archer")[0];

archer.style.backgroundColor = "#C43A7C"


//^---------
const theGient = document.getElementsByClassName("clash-card__unit-stats--giant")[0];

theGient.style.backgroundColor = "#F6901A"

//^---------

const goblin = document.getElementsByClassName("clash-card__unit-stats--goblin")[0];

goblin.style.backgroundColor = "#99CC3A"

//^---------
const wizard = document.getElementsByClassName("clash-card__unit-stats--wizard")[0];

wizard.style.backgroundColor = "#63A2DC"

//^---------
