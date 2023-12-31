window.addEventListener("scroll", reveal);

function reveal(){
    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
}
const scrollBtn = document.querySelector(".scrollToTop-btn");
 
window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop =0;
});
window.addEventListener("DOMContentLoaded", () =>{
    const loader = document.querySelector(".spinner-wrapper");
    setTimeout(function () {
        loader.style.opacity = "0";
        setTimeout(function (){
            loader.style.display = "none";
        },2000);
    },6000);  
});