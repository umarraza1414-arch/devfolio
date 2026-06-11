const hamburger = document.getElementById("hamburger");
const slidebar = document.getElementById("slidebar");

hamburger.addEventListener("click",() =>{
    slidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (
        !slidebar.contains(e.target) &&
        !hamburger.contains(e.target)
    )  {
        slidebar.classList.remove("active");
    }
});
