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


let words = ["Fresh Food", "Best Taste", "Fast Delivery", "Created by rishabh"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let text = document.getElementById("text");

function typeEffect()
{
    let currentWord = words[wordIndex];

    if(!isDeleting)
    {
        text.textContent = currentWord.substring(0, charIndex+1)

        charIndex++;

        if(charIndex === currentWord.length)
        {
            isDeleting = true;
            setTimeout(typeEffect,1500);
            return;
        }
    }
    else
    {
        text.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;
        if(charIndex === 0)
        {
            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;           
        }
        
    }
    setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect()

const slider = document.querySelector(".why-features");
const cards = document.querySelectorAll(".feature");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

// Slider Update Function
function updateSlider() {

    // Desktop par slider nahi chalega
    if (window.innerWidth > 768) {
        slider.style.transform = "translateX(0)";
        return;
    }

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next Button
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    updateSlider();
});

// Previous Button
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }

    updateSlider();
});

// Auto Slide
setInterval(() => {

    if (window.innerWidth <= 768) {

        currentIndex++;

        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }

        updateSlider();
    }

}, 3000);

// Window Resize
window.addEventListener("resize", updateSlider);

// Page Load
window.addEventListener("load", updateSlider);
const dots = document.querySelectorAll(".dot");

function updateSlider() {

    if (window.innerWidth > 768) {
        slider.style.transform = "translateX(0)";
        return;
    }

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}