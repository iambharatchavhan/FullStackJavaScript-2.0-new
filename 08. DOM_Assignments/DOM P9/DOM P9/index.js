const redColor = document.getElementsByClassName('title')[1];
const btn = document.getElementsByClassName('add-to-cart')[0];
const btn2 = document.getElementsByTagName("button")[0];


redColor.style.color = '#E6425E';
btn.style.backgroundColor = "#E6425E";

btn2.addEventListener('onclick', function () {
    btn2.style.backgroundColor = "#E6425E";
})

