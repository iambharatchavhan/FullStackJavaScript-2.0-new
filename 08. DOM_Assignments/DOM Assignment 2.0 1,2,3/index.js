const ul = document.getElementsByTagName("ul")[0];

//* 1st
const li = document.createElement('li');
li.innerText = "Hire Me";
ul.appendChild(li);

//* 2nd
const input = document.getElementsByTagName("input")[0];
input.placeholder= "Search My Projects"

//* 2nd (b)
const socialIcons = document.querySelectorAll("ul")[1]
socialIcons.style.display = "none"

//* 3rd
const spanTwo = document.getElementsByTagName("span")[2];
const spanThree = document.getElementsByTagName("span")[3];

socialIcons.style.display = "flex"

spanTwo.innerText = "an Employee";
spanThree.innerText = "iNeuron Intelligence Pvt Ltd";

//*4th

const heroImg = document.querySelector(".hero-right-section > img")
heroImg.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

//* 5th
const btnparent = document.querySelector(".hero-right-section-btns");

const btnSupporMe = document.createElement("button");
btnSupporMe.innerText = "Support Me";

btnparent.appendChild(btnSupporMe);









