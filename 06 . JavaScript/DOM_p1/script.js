// Dom manipulation 

document.querySelector("#headingTwo").innerHTML = "This heading are coming from javascript ";

document.querySelector(".paraOne").innerHTML = "Paragraph was written from javascript";


document.querySelector(".paraTwo").innerHTML = "Paragraph was written from javascript also";

// creating and adding html element in javascript it self
let parentDiv = document.querySelector("#parent");

let paraThree = document.createElement('p')
paraThree.textContent =" The element was created in javascript and added to the web page";

parentDiv.appendChild(paraThree);


let firstHeading = document.querySelector("#headingOne");

let headingThree = document.createElement("h1");

headingThree.textContent = "This heading was created in  javascript ";

let next = parentDiv.appendChild(headingThree);





// const first = document.querySelector('#headingOne');
// const second = first.nextElementSibling;
// consol.log(second);
