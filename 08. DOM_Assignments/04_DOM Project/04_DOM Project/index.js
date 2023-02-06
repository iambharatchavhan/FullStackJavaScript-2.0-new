let statNum = document.getElementsByClassName('stat')
let statValue = document.getElementsByClassName('stat-value')



function allClasses (className){
    for( i=0 ; i < className.length; i++){
        className[i].style.color = "#ffffff";
    }
}
allClasses(statNum);
allClasses(statValue);


let cards = Array.from((document.getElementsByClassName('clearfix')))

const colors = ["#A57512","#C43A7C","#F6901A","#99CC3A","#63A2DC"]

for(let i=0; i < cards.length; i++ ){
    cards[i].style.backgroundColor = colors[i];
}


//& background color 
