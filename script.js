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

// const words = [
//     "Fresh Food",
//     "Best Taste",
//     "Fast Delivery"
// ];

// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// let text = document.getElementById("text");

// function typeEffect() {

//     let currentWord = words[wordIndex];

//     if (!isDeleting) {
//         text.textContent =
//             currentWord.substring(0, charIndex + 1);

//         charIndex++;

//         if (charIndex === currentWord.length) {
//             isDeleting = true;
//             setTimeout(typeEffect, 1500);
//             return;
//         }

//     } else {

//         text.textContent =
//             currentWord.substring(0, charIndex - 1);

//         charIndex--;

//         if (charIndex === 0) {
//             isDeleting = false;
//             wordIndex = (wordIndex + 1) % words.length;
//         }
//     }

//     setTimeout(typeEffect, isDeleting ? 80 : 120);
// }

// typeEffect();


let words = ["Fresh Food", "Best Teste", "Fast Delivery"];
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

