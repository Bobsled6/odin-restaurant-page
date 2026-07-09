import stockRestImage from "./images/stockRestPhoto.jpg";

const image = document.createElement("img");

image.src = stockRestImage;


export function initLoad() {
    document.getElementById("content").appendChild(image);
}

