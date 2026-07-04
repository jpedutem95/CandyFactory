document.addEventListener("DOMContentLoaded", initHome);

const languageBtn = document.getElementById("languageBtn");
const languageMenu = document.getElementById("languageMenu");

languageBtn.addEventListener("click", function () {
    languageMenu.classList.toggle("show");
});

// Close when clicking outside
document.addEventListener("click", function (event) {

    if (
        !languageBtn.contains(event.target) &&
        !languageMenu.contains(event.target)
    ) {
        languageMenu.classList.remove("show");
    }

});




// Promo rightColumn
function initHome() {

    console.log("initHome running");

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    console.log(slides);
    console.log(nextBtn);
    console.log(prevBtn);

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(function(slide) {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    nextBtn.addEventListener("click", function () {
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });

    prevBtn.addEventListener("click", function () {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    });

    setInterval(function () {
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }, 5000);
}
