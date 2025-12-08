
const starterCarousel = document.querySelector(".starterCarousel ul");
const populairCarousel = document.querySelector(".carousel_populair");
const magazinesCarousel = document.querySelector(".carousel_magazines");

const starter_naarRechts = document.querySelector(".starter_knoppen button:last-of-type");
const starter_naarLinks = document.querySelector(".starter_knoppen button:first-of-type");
const populair_naarRechts = document.querySelector(".populair_knoppen button:last-of-type");
const populair_naarLinks = document.querySelector(".populair_knoppen button:first-of-type");
const magazines_naarRechts = document.querySelector(".magazines_knoppen button:last-of-type");
const magazines_naarLinks = document.querySelector(".magazines_knoppen button:first-of-type");

const shopButtonAantal = document.querySelector('.shopButton_aantal');
const aantal = shopButtonAantal?.querySelector('p');
const minButton = shopButtonAantal?.querySelector('button:first-of-type');
const plusButton = shopButtonAantal?.querySelector('button:last-of-type');


var openButton = document.querySelector('.menu-open');
var sluitButton = document.querySelector('.menu-sluit');


let starterIndex = 0;
let populairIndex = 0;
let magazinesIndex = 0;


// BRON: ChatGPT, prompt: de section populairDezeWeek is een carousel met artikelen waar je doorheen kan swipen, nou staan hieronder ook twee buttons die ik werkend wil gaan maken. het is de bedoeling dat wanneer je op de button klikt, je een artikel opschuift en een volgende te zien krijg. hoe kan ik dit het gemakkelijkste maken?

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

// BRON: week 5: Dé JS 3-stap oefening 2 - Hamburger menu

function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}


// ------- Starter Carousel ------- //
// BRON: ChatGPT, prompt: ik ben de website &C aan het namaken. aan het begin van de website staat een carousel. je kunt door deze carousel niet scrollen, maar door op de pijltjes te klikken ga je naar het volgende artikel/list item. hoe zorg ik ervoor dat het listitem van de carousel het hele beeldscherm vult?

if (starterCarousel) {
    starter_naarRechts?.addEventListener("click", () => {
        starterIndex = Math.min(starterIndex + 1, starterCarousel.children.length - 1);
        starterCarousel.style.transform = `translateX(-${starterIndex * 100}vw)`;
    });

    starter_naarLinks?.addEventListener("click", () => {
        starterIndex = Math.max(starterIndex - 1, 0);
        starterCarousel.style.transform = `translateX(-${starterIndex * 100}vw)`;
    });
}


// ------- Populair Carousel ------- //
if (populairCarousel) {
    populair_naarRechts?.addEventListener("click", () => {
        const maxIndex = populairCarousel.children.length - 1;
        populairIndex = Math.min(populairIndex + 1, maxIndex);
        populairCarousel.scrollTo({
            left: populairIndex * getArtikelWidth_Populair(),
            behavior: "smooth"
        });
    });

    populair_naarLinks?.addEventListener("click", () => {
        populairIndex = Math.max(populairIndex - 1, 0);
        populairCarousel.scrollTo({
            left: populairIndex * getArtikelWidth_Populair(),
            behavior: "smooth"
        });
    });
}


// ------- Magazines Carousel ------- //
if (magazinesCarousel) {
    magazines_naarRechts?.addEventListener("click", () => {
        const maxIndex = magazinesCarousel.children.length - 1;
        magazinesIndex = Math.min(magazinesIndex + 1, maxIndex);
        magazinesCarousel.scrollTo({
            left: magazinesIndex * getArtikelWidth_Magazines(),
            behavior: "smooth"
        });
    });

    magazines_naarLinks?.addEventListener("click", () => {
        magazinesIndex = Math.max(magazinesIndex - 1, 0);
        magazinesCarousel.scrollTo({
            left: magazinesIndex * getArtikelWidth_Magazines(),
            behavior: "smooth"
        });
    });
}


openButton.addEventListener("click", openMenu);
sluitButton.addEventListener("click", sluitMenu);

if (shopButtonAantal) {

    minButton.addEventListener("click", () => {
        const value = parseInt(aantal.textContent);
        if (value > 1) {
            aantal.textContent = value - 1;
        }
    });

    plusButton.addEventListener("click", () => {
        const value = parseInt(aantal.textContent);
        aantal.textContent = value + 1;
    });
}