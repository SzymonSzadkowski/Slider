const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");

let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});


nextButton.addEventListener("click", () => {
    counter++;
    checkCounter();
    showAndHideButtons()
    slider();
});

prevButton.addEventListener("click", () => {
    counter--;
    checkCounter()
    showAndHideButtons()
    slider();
});

function slider() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
};

function checkCounter() {
    if (counter < 1) {
        counter = 0;
    } else if (counter > slides.length - 1) {
        counter = slides.length - 1;
    }
};

function showAndHideButtons() {
    if (counter < 1) {
        prevButton.classList.add("btn-hide");
    } else if (counter >= slides.length - 1) {
        nextButton.classList.add("btn-hide");
    } else {
        nextButton.classList.remove("btn-hide");
        prevButton.classList.remove("btn-hide");
    }
}