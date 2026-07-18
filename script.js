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

// slider

let slider = document.querySelector(".why-features");
let cards = document.querySelectorAll(".feature");

let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

let dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Slider Update Function
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


const reviews = [
{
name:"John Smith",
role:"Food Lover",
img:"https://i.pravatar.cc/100?img=1",
text:"The best food I've ever tasted! Everything is so fresh and full of flavor."
},
{
name:"Sarah Johnson",
role:"Happy Customer",
img:"https://i.pravatar.cc/100?img=5",
text:"Amazing service and fast delivery. The staff is very friendly."
},
{
name:"David Wilson",
role:"Regular Customer",
img:"https://i.pravatar.cc/100?img=8",
text:"Beautiful ambience and delicious meals. Will definitely visit again."
},

{
name:"Emma Brown",
role:"Customer",
img:"https://i.pravatar.cc/100?img=9",
text:"Fantastic experience and wonderful staff."
},
{
name:"Michael Lee",
role:"Food Blogger",
img:"https://i.pravatar.cc/100?img=11",
text:"One of the best restaurants in town."
},
{
name:"Sophia White",
role:"Food Lover",
img:"https://i.pravatar.cc/100?img=15",
text:"Fresh ingredients and amazing presentation."
},
{
name:"James Clark",
role:"Customer",
img:"https://i.pravatar.cc/100?img=12",
text:"Loved every bite. Highly recommended."
},
{
name:"Olivia Green",
role:"Food Critic",
img:"https://i.pravatar.cc/100?img=20",
text:"Perfect balance of taste and quality."
},
{
name:"Daniel Scott",
role:"Customer",
img:"https://i.pravatar.cc/100?img=18",
text:"Quick service and great atmosphere."
},
{
name:"Emily Davis",
role:"Food Lover",
img:"https://i.pravatar.cc/100?img=23",
text:"Excellent menu and affordable prices."
},
{
name:"Chris Martin",
role:"Regular Customer",
img:"https://i.pravatar.cc/100?img=24",
text:"I keep coming back for the amazing food."
},
{
name:"Jessica Hall",
role:"Customer",
img:"https://i.pravatar.cc/100?img=25",
text:"Everything was cooked to perfection."
},
{
name:"Ryan Adams",
role:"Food Lover",
img:"https://i.pravatar.cc/100?img=26",
text:"Absolutely delicious and worth every penny."
},
{
name:"Grace Walker",
role:"Customer",
img:"https://i.pravatar.cc/100?img=27",
text:"The desserts are simply outstanding."
},
{
name:"Ethan Moore",
role:"Regular Customer",
img:"https://i.pravatar.cc/100?img=28",
text:"Friendly staff and excellent service."
},
{
name:"Mia Carter",
role:"Food Blogger",
img:"https://i.pravatar.cc/100?img=29",
text:"Loved the ambiance and quality food."
},
{
name:"Liam Turner",
role:"Customer",
img:"https://i.pravatar.cc/100?img=30",
text:"Fresh, tasty and beautifully presented."
},
{
name:"Ava Young",
role:"Happy Customer",
img:"https://i.pravatar.cc/100?img=31",
text:"A truly memorable dining experience."
}
];

const container = document.getElementById("testimonialContainer");

let currentSlide = 0;
let cardsPerSlide = getCards();

function getCards(){

    if(window.innerWidth <= 768){
        return 1;
    }

    if(window.innerWidth <= 992){
        return 2;
    }

    return 3;

}

function renderTestimonials(){

    cardsPerSlide = getCards();

    container.innerHTML="";

    const totalSlides = Math.ceil(reviews.length / cardsPerSlide);

    for(let i=0;i<cardsPerSlide;i++){

        const index = currentSlide * cardsPerSlide + i;

        if(index >= reviews.length) break;

        const review = reviews[index];

        container.innerHTML += `
        <div class="testimonial-card">

            <div class="quote">❝</div>

            <div class="stars">★★★★★</div>

            <p class="review">${review.text}</p>

            <div class="user">

                <img src="${review.img}" alt="">

                <div class="user-info">
                    <h4>${review.name}</h4>
                    <p>${review.role}</p>
                </div>

            </div>

        </div>
        `;
    }
}

renderTestimonials();

window.addEventListener("resize",()=>{

    currentSlide=0;

    renderTestimonials();

});

setInterval(()=>{

    const totalSlides=Math.ceil(reviews.length/cardsPerSlide);

    currentSlide++;

    if(currentSlide>=totalSlides){
        currentSlide=0;
    }

    renderTestimonials();

},4000);

function nextSlide() {

    const totalSlides = Math.ceil(reviews.length / cardsPerSlide);

    currentSlide++;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;   // Last ke baad first
    }

    renderTestimonials();
}

function prevSlide() {

    const totalSlides = Math.ceil(reviews.length / cardsPerSlide);

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;   // First se last
    }

    renderTestimonials();
}
let startX = 0;

container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

container.addEventListener("touchend", (e) => {

    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        nextSlide();     // Left swipe
    }

    if (endX - startX > 50) {
        prevSlide();     // Right swipe
    }

});