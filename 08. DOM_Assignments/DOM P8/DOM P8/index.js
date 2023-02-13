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
