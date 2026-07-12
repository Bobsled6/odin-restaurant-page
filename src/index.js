import "./styles.css";
import {initLoad} from "./initLoad.js";
import {menu} from "./menu.js";
import {aboutDiv} from "./about.js";
const content = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

// initLoad();

menu()

homeButton.addEventListener("click", () => {
    content.replaceChildren();
    initLoad();
})

menuButton.addEventListener("click", () =>  {
    content.replaceChildren();
    menu();
})

aboutButton.addEventListener("click", () => {
    content.replaceChildren();
    aboutDiv();
})

