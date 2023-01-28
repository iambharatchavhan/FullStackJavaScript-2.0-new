// Dom manipulation 

document.querySelector("#headingTwo").innerHTML = "This heading are coming from javascript ";

document.querySelector(".paraOne").innerHTML = "Paragraph was written from javascript";


document.querySelector(".paraTwo").innerHTML = "Paragraph was written from javascript also";

// creating and adding html element in javascript it self
let parentDiv = document.querySelector("#parent");

let paraThree = document.createElement('p')
paraThree.textContent =" The element was created in javascript and added to the web page";

parentDiv.appendChild(paraThree);



let headingThree = document.createElement("h1");

headingThree.textContent = "This heading was created in  javascript ";

 parentDiv.appendChild(headingThree);


// created ul and inside li in pure js
// doc.create
// add text content 
// then append with the parent 

 let newUl = document.createElement("ul")
 parentDiv.appendChild(newUl);

 let li = document.createElement('li');
 li.textContent= "list item1 by js";

 newUl.appendChild(li);

 let li2 = document.createElement('li');
 li2.textContent= "list item2 by js";

 newUl.appendChild(li2);

 //**************************** */

 //^ css using js

 let firstHeading = document.querySelector("#headingOne");

 const theCSS = firstHeading.style;

 theCSS.color = "RED"
 theCSS.fontSize = "70px"
 theCSS.fontWeight = "300";

firstHeading.textContent= "Changed by js";











 



// const first = document.querySelector('#headingOne');
// const second = first.nextElementSibling;
// consol.log(second);
