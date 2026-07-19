import foodStockPhoto from "./images/foodStockPhoto.jpg";

const image = document.createElement("img");
const imageFigure = document.createElement("figure");
const imageRef = document.createElement("figcaption");
const headline = document.createElement("h1");
const restDescription = document.createElement("p");
const nav = document.querySelector("nav");
const content = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");


export function initLoad() {
    homeButton.style.boxShadow = "inset 0px 0px 50px 0px #29CFFF, 0px 26px 9px -7px #185370";
    menuButton.style.boxShadow = "none";
    aboutButton.style.boxShadow = "none";
    image.src = foodStockPhoto;
    imageRef.innerHTML = "Photo by Edward Franklin unsplash.com/@eddie2oh";
    image.id  = "homeImage";
    imageFigure.id = "homeImageFig";
    headline.id = "homeHeadline";
    headline.innerHTML = "Come Down and Watch the Game at Ballgame Bar and Grill!";
    restDescription.innerHTML = "Ballgame Bar and Grill is your spot to enjoy the game and eat authentic ballpark concessions straight off the grill! Come enjoy beer, pizza, wings and more without the lines and outrageous ballpark prices! ";
    restDescription.id = "restDescription";
    imageFigure.appendChild(image);
    imageFigure.appendChild(imageRef);
    content.appendChild(headline);
    content.appendChild(restDescription);
    content.appendChild(imageFigure);
}

