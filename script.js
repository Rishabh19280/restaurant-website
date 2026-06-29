let toggle = document.querySelector(".navbar #toggle");
let navMenu = document.querySelector(".navbar .nav-menu");
let closeBtn = document.querySelector(".navbar .nav-menu #close")
let body = document.querySelector("body")


toggle.addEventListener("click", () =>{
    navMenu.classList.add("active");
})
closeBtn.addEventListener("click", () =>{
    navMenu.classList.remove("active");
})