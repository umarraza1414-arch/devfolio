const hamburger = document.getElementById("hamburger");
const slidebar = document.getElementById("slidebar");

hamburger.addEventListener("click",() =>{
    slidebar.classList.toggle("active");
})