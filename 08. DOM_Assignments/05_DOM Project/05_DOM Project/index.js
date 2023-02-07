
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





