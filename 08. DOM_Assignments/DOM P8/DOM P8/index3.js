const navbarToggle = document.querySelector(".navbar-toggler");
const collapseNavbar = document.getElementsByClassName('collapse')[0];

navbarToggle.addEventListener("click", ()=>{
    collapseNavbar.style.display = "flex";
    navbarToggle.addEventListener("click", () =>{
        collapseNavbar.style.display = "none";
    })
})