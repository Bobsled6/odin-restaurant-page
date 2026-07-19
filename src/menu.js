const content = document.getElementById("content");
import Pizza from "./images/Pizza.jpg";
import Wings from "./images/Wings.jpg";
import Burgers from "./images/Burgers.jpg";
import Condiments from "./images/Condiments.jpg";
import Beverages from "./images/Beverages.jpg";
import FrenchFries from "./images/FrenchFries.jpg";
import HotDogs from "./images/HotDogs.jpg";
import SnacksAndTreats from "./images/SnacksAndTreats.jpg";



const toppings = {
    pizzaToppings: ["Pepperoni", "Sausage", "Red Pepper", "Banana Pepper", "Green Olives", "Broccoli", "Ham","Onion","Green Pepper", "Jalapeno Pepper","Black Olives", "Mushroom"],
    wingFlavors: ["Hot Buffalo", "Mild Buffalo", "BBQ", "Honey BBQ", "Lemon Pepper", "Teriyaki"],
    burgerToppings: ["Lettuce", "Tomato", "Onion", "Pickle"],
    condiments: ["Ketchup", "Mustard", "Honey Mustard", "Mayonnaise", "Relish", "Onion", "Hot Sauce", "BBQ Sauce", "Salsa", "Melted Cheddar"],
};

const images = {
    Pizza: [Pizza],
    PizzaSrc: ["Alan Hardman unsplash.com/@alanakition"],
    Wings: [Wings],
    WingsSrc:["Chad Montano unsplash.com/@briewilly"],
    Burgers: [Burgers],
    BurgersSrc:["Adam Bartoszewicz unsplash.com/@bartoshevicz"],
    FrenchFries:[FrenchFries],
    FrenchFriesSrc:["Jay unsplash.com/@ja024"],
    HotDogs:[HotDogs],
    HotDogsSrc:["Ball Park Brand unsplash.com/@ballparkbrand"],
    SnacksandTreats:[SnacksAndTreats],
    SnacksandTreatsSrc:["David Todd McCarty unsplash.com/@davidtoddmccarty"],
    Beverages:[Beverages],
    BeveragesSrc:["Giorgio Trovato unsplash.com/@giorgiotrovato"],
    Condiments:[Condiments],
    CondimentsSrc:["Max Tokarev unsplash.com/@matokarev"],
};
        
class menuItem {
    
    constructor (item,price,category) {
        const itemDiv = document.createElement("div");
        const priceDiv = document.createElement("div");
        const menuItemDiv = document.createElement("div");
        const menuCat = document.getElementById(category);
        const itemListingDiv = document.getElementById(category + "listingsDiv");

        this.item = item;
        this.price = price;

        menuItemDiv.id = (item);
        menuItemDiv.classList.add("menuItem");
        
        itemDiv.classList.add("foodItem");
        itemDiv.innerHTML = item;
       
        priceDiv.classList.add("price");
        priceDiv.innerHTML = '$' + price + ".00";
        
        menuItemDiv.appendChild(itemDiv);
        menuItemDiv.appendChild(priceDiv);

        itemListingDiv.appendChild(menuItemDiv);

    };

    
}

class menuCategory {

    constructor(name,toppingsCat,options, description,subCat) {
        let nameString = name.toString();
        nameString = nameString.replaceAll(' ', '');

        const descriptionP = document.createElement("p");
        descriptionP.classList.add("description");
        descriptionP.innerHTML = description;

        const menuCat = document.createElement("div");
        menuCat.id = (name);
        menuCat.classList.add("menuCategory");
        
        const menuCatHead = document.createElement("h2");
        menuCatHead.innerHTML = name;
        menuCatHead.classList.add("menuCatHead");
        menuCat.appendChild(menuCatHead);


        if(options !== "null" ) {
            const optionsFig = document.createElement("figure");
            const toppingList = document.createElement("ul");
            const optionsHead = document.createElement("h3");
            
            optionsFig.classList.add("optionsFig");
            optionsFig.id = name + "optionsFig";
            
          
            optionsHead.innerHTML = options;
            optionsFig.appendChild(optionsHead);


           toppings[toppingsCat].forEach((item) => {
                let li = document.createElement("li");
                li.innerHTML = item;
                toppingList.appendChild(li);
            })

            optionsFig.appendChild(toppingList);
            menuCat.appendChild(optionsFig);

        }

        const imgFigure = document.createElement("figure");

        if(toppingsCat !== "null" && options === "null"){
            const toppingList = document.createElement("ul");
            const toppingCatDiv = document.createElement("div");
            imgFigure.classList.add("imgFigureNoOpt");

           toppings[toppingsCat].forEach((item) => {
                let li = document.createElement("li");
                li.innerHTML = item;
                toppingList.appendChild(li);
            })
            
            toppingCatDiv.appendChild(toppingList);
            toppingCatDiv.classList.add("toppingCatNoItems")
            menuCat.appendChild(toppingCatDiv);
        
        }

        const catImg = document.createElement("img");
        const catImageSrc = document.createElement("figcaption");

        catImg.src = images[nameString];
        catImageSrc.innerHTML = "Photo by " + images[nameString + 'Src'];
        catImageSrc.classList.add("catImgCap");
        catImg.classList.add("catImg");
        imgFigure.appendChild(catImg);
        imgFigure.appendChild(catImageSrc);
        imgFigure.classList.add("catImgFigure");
        menuCat.appendChild(imgFigure);
    
        if(description != "null"){menuCat.appendChild(descriptionP)};
        content.appendChild(menuCat);
        
        const itemListingDiv = document.createElement("div");
        itemListingDiv.id = name + "listingsDiv";
        itemListingDiv.classList.add("listingsDiv");
        menuCat.appendChild(itemListingDiv);
        if(toppingsCat === "null" && options === "null") {
            itemListingDiv.classList.add("itemDivNoOpt");
            imgFigure.classList.add("imgFigureNoOpt");
        }

        if (subCat === "yes") {
            const subCatDiv = document.createElement("div");
            subCatDiv.classList.add("subCatDiv");
            subCatDiv.id = name + "subCatDiv";
            menuCat.appendChild(subCatDiv);
        }
        

    }

    static subCat(name, parentCat){
        const subCatDiv = document.getElementById(parentCat + "subCatDiv");
        const subDiv = document.createElement("div");
        const subHeader = document.createElement("h3");
        const itemListingDiv = document.createElement("div");

        itemListingDiv.id = name + "listingsDiv";
        itemListingDiv.classList.add("listingsDiv");

        subDiv.classList.add("subCat");
        subDiv.id = name;
        subHeader.innerHTML = name;
        subHeader.classList.add("subHeader");
        subDiv.appendChild(subHeader);
        subDiv.appendChild(itemListingDiv);
        subCatDiv.appendChild(subDiv);

    }
}



export function menu() {
    
    const condDiv = document.createElement("div");
    const condHead = document.createElement("h2")
    const condList = document.createElement("ul");
    const menuHeader = document.createElement("h1");

    menuHeader.innerHTML = "Menu";
    content.appendChild(menuHeader);
    
    new menuCategory("Pizza", "pizzaToppings","Toppings", "Available in slices (Cheese or Pepperoni) or full pies with choice of toppings. Extra toppings $1.00 each");
    new menuCategory("Wings", "wingFlavors","Sauce", "Available in bone-in or boneless, served with side of celery and choice of ranch or blue cheese dipping sauce", "yes");
    new menuCategory("Burgers", "burgerToppings","Toppings", "Served with choice of toppings and condiments on a brioche bun. Cheeseburgers made with American Cheese. Provolone and Cheddar available at request. Make it a double for $4.00 more");
    new menuCategory("French Fries", "null","null", "Salted Crispy Thin cut French Fries, available in regular or family sized portions");
    new menuCategory("Hot Dogs", "null","null", "Grilled Hot Dogs available in standard or foot long size, served with choice of condiments");
    new menuCategory("Snacks and Treats", "null","null", "Tasty snacks when you just need a bite to make it through");
    new menuCategory("Beverages","null","null","Ice Cold, served in glass. Lemon / Lime available at request.");
    new menuCategory("Condiments", "condiments","null", "Free with purchase, Melted Cheddar limited to 1 serving per customer");

    menuCategory.subCat("Classic Bone-In", "Wings");
    menuCategory.subCat("Boneless", "Wings");

    new menuItem("Slice","2", "Pizza");
    new menuItem("Small (12 in.)", "10", "Pizza");
    new menuItem("Large (18 in.)","15", "Pizza");

    new menuItem("6 Ct","12", "Classic Bone-In");
    new menuItem("12 Ct", "21", "Classic Bone-In");
    new menuItem("20 Ct.", "30", "Classic Bone-In");

    new menuItem("6 Ct","9", "Boneless");
    new menuItem("12 Ct", "16", "Boneless");
    new menuItem("20 Ct.", "23", "Boneless");
    
    new menuItem("Hamburger", "7","Burgers");
    new menuItem("Cheeseburger", "8", "Burgers");
    new menuItem("Bacon Hamburger", "9", "Burgers");
    new menuItem("Bacon Cheeseburger", "10","Burgers")

    new menuItem("Regular","5","French Fries");
    new menuItem("Family-Sized", "12", "French Fries");

    new menuItem("Hot Dog", "6", "Hot Dogs");
    new menuItem("Chili Dog", "7", "Hot Dogs");
    new menuItem("Footlong", "8", "Hot Dogs");
    new menuItem("Footlong Chili", "9", "Hot Dogs");

    new menuItem("Cup of Boiled Peanuts", "3", "Snacks and Treats");
    new menuItem("Bag of Cracker Jack", "4", "Snacks and Treats");
    new menuItem("Salted Soft Pretzel", "3", "Snacks and Treats");
    new menuItem("Nachos w/ Cheese or Salsa", "5", "Snacks and Treats");
    new menuItem("Beef Nachos w/ Cheese or Salsa", "6", "Snacks and Treats");

    new menuItem(" Ice Water", "0", "Beverages");
    new menuItem("Soda", "2", "Beverages");
    new menuItem("Beer", "4", "Beverages");
    new menuItem("Mixed Drinks", "6", "Beverages");

}
