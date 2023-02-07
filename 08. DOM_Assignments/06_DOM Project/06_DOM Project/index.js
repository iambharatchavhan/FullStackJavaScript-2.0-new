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
