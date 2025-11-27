const carousel = document.querySelector(".starterCarousel ul");
const naarRechts = document.querySelector(".button_knoppen button:last-of-type");
const naarLinks = document.querySelector(".button_knoppen button:first-of-type");

let index = 0;

naarRechts.addEventListener("click", () => {
    index = Math.min(index + 1, carousel.children.length - 1);
    carousel.style.transform ='translateX(-' + (index * 100) + 'vw)';
});

naarLinks.addEventListener("click", () => {
    index = Math.max(index - 1, 0);
    carousel.style.transform = 'translateX(-' + (index * 100) + 'vw)';
});
