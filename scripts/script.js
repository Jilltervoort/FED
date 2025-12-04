const starterCarousel = document.querySelector(".starterCarousel ul");
const populairCarousel = document.querySelector(".carousel_populair");
const magazinesCarousel = document.querySelector(".carousel_magazines");

const starter_naarRechts = document.querySelector(".starter_knoppen button:last-of-type");
const starter_naarLinks = document.querySelector(".starter_knoppen button:first-of-type");

const populair_naarRechts = document.querySelector(".populair_knoppen button:last-of-type");
const populair_naarLinks = document.querySelector(".populair_knoppen button:first-of-type");

const magazines_naarRechts = document.querySelector(".magazines_knoppen button:last-of-type");
const magazines_naarLinks = document.querySelector(".magazines_knoppen button:first-of-type");

let starterIndex = 0;
let populairIndex = 0;
let magazinesIndex = 0;



function getArtikelWidth_Populair() {
    const artikel = populairCarousel.querySelector("article");
    const style = window.getComputedStyle(populairCarousel);
    const gap = parseInt(style.columnGap || style.gap || 0);
    return artikel.offsetWidth + gap;
}

function getArtikelWidth_Magazines() {
    const artikel = magazinesCarousel.querySelector("li");
    const style = window.getComputedStyle(magazinesCarousel);
    const gap = parseInt(style.columnGap || style.gap || 0);
    return artikel.offsetWidth + gap;
}


// ------- starterCarousel ------- //
starter_naarRechts.addEventListener("click", () => {
    starterIndex = Math.min(starterIndex + 1, starterCarousel.children.length - 1);
    starterCarousel.style.transform = `translateX(-${starterIndex * 100}vw)`;
});

starter_naarLinks.addEventListener("click", () => {
    starterIndex = Math.max(starterIndex - 1, 0);
    starterCarousel.style.transform = `translateX(-${starterIndex * 100}vw)`;
});

// ------- populairCarousel ------- //

populair_naarRechts.addEventListener("click", () => {
    const maxIndex = populairCarousel.children.length - 1;
    populairIndex = Math.min(populairIndex + 1, maxIndex);
    populairCarousel.scrollTo({
        left: populairIndex * getArtikelWidth_Populair(),
        behavior: "smooth"
    });
});

populair_naarLinks.addEventListener("click", () => {
    populairIndex = Math.max(populairIndex - 1, 0);
    populairCarousel.scrollTo({
        left: populairIndex * getArtikelWidth_Populair(),
        behavior: "smooth"
    });
});

// ------- magazinesCarousel ------- //

magazines_naarRechts.addEventListener("click", () => {
    const maxIndex = magazinesCarousel.children.length - 1;
    magazinesIndex = Math.min(magazinesIndex + 1, maxIndex);
    magazinesCarousel.scrollTo({
        left: magazinesIndex * getArtikelWidth_Magazines(),
        behavior: "smooth"
    });
});

magazines_naarLinks.addEventListener("click", () => {
    magazinesIndex = Math.max(magazinesIndex - 1, 0);
    magazinesCarousel.scrollTo({
        left: magazinesIndex * getArtikelWidth_Magazines(),
        behavior: "smooth"
    });
});

