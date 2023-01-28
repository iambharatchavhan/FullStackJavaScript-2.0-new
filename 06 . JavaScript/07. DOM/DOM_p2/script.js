const parent = document.querySelector("#parent");
// grabed h2 tag
let headingByJs = document.querySelector("h2");

// added class to the element by js
headingByJs.classList.add("headingTwo");

// grab that element by using the created class on js
headingTwo = document.querySelector(".headingTwo");

// using that class  added text to the h2 tag
headingTwo.textContent = "hello World";

// headingTwo.innerHTML = "Hello world inner html";

// lets create a div and and class and create in inside ul and li in it

// ^ parent created

//selected body tag to add child node
const body = document.querySelector("body");

//div created inside body--------
const div = document.createElement("div");
body.appendChild(div);
//added class to the created div------
div.classList.add("parentTwo");

//selected parentTwo for crete elements inside 
const parentTwo = document.querySelector(".parentTwo");
// created ul
let unorderedList = document.createElement("ul")
parentTwo.appendChild(unorderedList);  
// added class
unorderedList.classList.add("list");
let list = document.querySelector(".list");
// created li
let li = document.createElement("li");
list.appendChild(li);
// added text to li 
li.textContent="I am the list item in side ul which is inside a div which created in js only";

// you can remove existing class .remove("className") 


//* add element before or after any element

let mainHeading = document.querySelector("#parentHeading");
let secHeading = document.createElement("h3");
secHeading.innerHTML = "I was added after the h1 added ";

mainHeading.insertAdjacentElement("beforebegin",secHeading);

// more to learn but need to move













