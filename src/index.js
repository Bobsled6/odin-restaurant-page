import "./styles.css"

import stockRestImage from "./images/stockRestPhoto.jpg";

const image = document.createElement("img");
image.src = stockRestImage;

document.getElementById("content").appendChild(image);