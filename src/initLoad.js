import foodStockPhoto from "./images/foodStockPhoto.jpg";

const image = document.createElement("img");
const imageFigure = document.createElement("figure");
const imageRef = document.createElement("figcaption");
const headline = document.createElement("h1");
const restDescription = document.createElement("p");
const content = document.getElementById("content");


export function initLoad() {
    image.src = foodStockPhoto;
    console.log(image.src);
    imageRef.innerHTML = "Photo by No Revisions unsplash.com/@norevisions"
    headline.innerHTML = "Come Down and Watch the Game at Ballgame Bar and Grill!"
    restDescription.innerHTML = "Ballgame Bar and Grill is your spot to enjoy the game and eat authentic ballpark concessions straight off the grill! Come enjoy beer, pizza, wings and more without the lines and outrageous ballpark prices. "
    imageFigure.appendChild(image);
    imageFigure.appendChild(imageRef);
    content.appendChild(imageFigure);
    content.appendChild(headline);
    content.appendChild(restDescription);
}

