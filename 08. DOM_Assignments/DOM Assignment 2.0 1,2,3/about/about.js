let accordian = document.querySelectorAll(".accordian h3");

accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


// ----------------------1st---------------
//^ const ps = Array.from(document.getElementsByTagName('p'))
const allH3 = Array.from(document.querySelectorAll('.accordian>h3'))

allH3.forEach(h3 => {
  h3.style.backgroundColor = "#dadaf8";
  let para = h3.nextElementSibling;

  //When page loads below accordians will be open
  if (["Achievement", "Hobbies"].includes(h3.innerText)) {
      para.style.display = "block";
  } else {
      para.style.display = "none";
  }
})


// -------------------2nd---------------------

const wrapperParent = document.querySelector(".accordian-wrapper");
// console.log(wrapperParent);
const skillDiv = document.createElement('div');
skillDiv.classList.add('accordian');

const skillParent = wrapperParent.appendChild(skillDiv);

const h3 = document.createElement('h3');
h3.innerText = "Skills"
skillParent.appendChild(h3);

const skillPara = document.createElement('p');
skillPara.innerText = 'I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over GitHub';
skillParent.appendChild(skillPara);


const allH3sec = Array.from(document.querySelectorAll('.accordian>h3'))

allH3sec.forEach(h3 => {
  h3.style.backgroundColor = "#dadaf8";
  let para = h3.nextElementSibling;

  //When page loads below accordians will be open
  if (["Skills"].includes(h3.innerText)) {
      para.style.display = "block";
  } else {
      para.style.display = "none";
  }
})

allH3sec.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});




