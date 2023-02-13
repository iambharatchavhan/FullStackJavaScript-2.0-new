# DOM Assignments Answers

## 1 2 3 
```javascript
const ul = document.getElementsByTagName("ul")[0];

//* 1st
const li = document.createElement('li');
li.innerText = "Hire Me";
ul.appendChild(li);
```

## (1 2 3)2nd
```javascript
//* 2nd
const input = document.getElementsByTagName("input")[0];
input.placeholder= "Search My Projects"

//* 2nd (b)
const socialIcons = document.querySelectorAll("ul")[1]
socialIcons.style.display = "none"


```
## (1 2 3) 3rd
```javascript
//* 3rd
const spanTwo = document.getElementsByTagName("span")[2];
const spanThree = document.getElementsByTagName("span")[3];

socialIcons.style.display = "flex"

spanTwo.innerText = "an Employee";
spanThree.innerText = "iNeuron Intelligence Pvt Ltd";

```
## (1 2 3) 4th
```javascript
//*4th

const heroImg = document.querySelector(".hero-right-section > img")
heroImg.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

```
## (1 2 3)5th
```javascript
//* 5th
const btnparent = document.querySelector(".hero-right-section-btns");

const btnSupporMe = document.createElement("button");
btnSupporMe.innerText = "Support Me";

btnparent.appendChild(btnSupporMe);

```


## 4th 
```javascript
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


```
## 5th
```javascript

const theHeaderElParent = document.getElementsByClassName("nav-center")[0];
const theParentDiv = document.getElementsByClassName("recipe-gallery")[0];
const the7nthDiv = document.getElementsByTagName("div")[7]

console.log(the7nthDiv);

// console.log(theParentDiv);
const rightBtn = document.createElement("div");
const rightBtnParent = theHeaderElParent.appendChild(rightBtn);

const aLinkBtn = document.createElement('a');
aLinkBtn.classList.add("btn");

aLinkBtn.innerText = "Pro Subscription"
rightBtnParent.appendChild(aLinkBtn)


const the6thEl = document.createElement("div");

the6thEl.classList.add("btn");
theParentDiv.appendChild(the6thEl);
the6thEl.innerText ="Added 6th Card"
the6thEl.style.color = "#000"
the6thEl.style.backgroundColor = "#fff"

const chinese = document.createElement("a");
chinese.innerText = "Chinese (7)";
the7nthDiv.appendChild(chinese)


//^ ---------all elements added ---------


//* colored all text elements of the recipes
const allText =Array.from(document.getElementsByClassName("recipe-text")) ;

allText.forEach(element => {
   element.style.color = "blueviolet"
});




```
## 6th
```javascript
const logo = document.querySelectorAll(".logo")[0]
// console.log(logo);
logo.src = "./assets/ineuron-logo.png"

//* 2nd ------
const price = document.querySelectorAll(".app_price > span")[0];
price.innerText = "10$"

//* 3rd ------

const iconsParent = document.getElementsByClassName('footer_social')[0];

// console.log(iconsParent);
const linkedinCreateDiv = document.createElement("div");
linkedinCreateDiv.classList.add("footer_social_ico");

const linkedinDiv = iconsParent.appendChild(linkedinCreateDiv);

const linkedinIcon = document.createElement("li");
linkedinIcon.classList.add("fa-brands")
linkedinIcon.classList.add("fa-linkedin")

linkedinDiv.appendChild(linkedinIcon);

// console.log(linkedinDiv);


```
## 7th
```javascript
let aTags = Array.from(document.getElementsByTagName("a"));
const mainLanguages = document.getElementsByClassName("main__languages")[0]
const input = document.getElementsByTagName("input")[0];
const submitBtn = document.getElementsByTagName("button")[2]
submitBtn.removeAttribute("disabled");
input.removeAttribute("disabled");

aTags.forEach(ele => {
    if (ele.innerText.includes("2.0")){
        mainLanguages.removeChild(ele)
    }
})

let inputStore = localStorage.getItem("inputs")
if (inputStore){
    inputStore = JSON.parse(localStorage.getItem("inputs"))
} else {
    inputStore = []
}

submitBtn.addEventListener("click", () => {
    inputStore.push(input.value)
    localStorage.setItem("inputs", JSON.stringify(inputStore))
    appendInput(input.value);
    
})

const appendInput = (inputTaken) => {
    const aTag = document.createElement("a")
    aTag.href = 'https://www.ineuron.ai';    
    aTag.target = '_blank';
    aTag.innerText = inputTaken
    mainLanguages.appendChild(aTag)
    console.log(aTag);
}

const getInput = JSON.parse(localStorage.getItem("inputs"));
getInput.forEach((note) => {
appendInput(note);
});


```
## 8th
```javascript
//01
const sideBar = document.getElementsByTagName("aside")[0];
sideBar.style.border = "4px solid red";
sideBar.style.overflowY = "scroll";

const horizontalLine = document.createElement("hr");
horizontalLine.className = "hr-line";
sideBar.appendChild(horizontalLine);

const heading = document.createElement("h2");
const para = document.createElement("p");
heading.textContent = "This is my custom heading";
para.textContent = "This is my custom paragraph.";
sideBar.appendChild(heading);
sideBar.appendChild(para);
heading.className = "new-head";
para.className = "new-p";

//02
document.body.style.backgroundImage = "none";

//03
const navbarToggle = document.querySelector(".navbar-toggler");
const collapseNavbar = document.getElementsByClassName('collapse')[0];

navbarToggle.addEventListener("click", ()=>{
    collapseNavbar.style.display = "flex";
    navbarToggle.addEventListener("click", () =>{
        collapseNavbar.style.display = "none";
    })
})


```
## 9th
```javascript
const button = document.getElementsByTagName("button")[0]
button.style.backgroundColor = "red"
button.style.cursor = "pointer"

```


> -------------------------------------The end ------------------------