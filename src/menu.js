const content = document.getElementById("content");


const toppings = {
    pizzaToppings: ["Pepperoni", "Ham", "Sausage", "Broccoli", "Green Pepper", "Red Pepper", "Banana Pepper", "Jalapeno Pepper", "Red Pepper","Green Olives", "Black Olives", "Onion", "Mushroom"],
    wingFlavors: ["Hot Buffalo", "Mild Buffalo", "BBQ", "Honey BBQ", "Lemon Pepper", "Teriyaki"],
    burgerToppings: ["Lettuce", "Tomato", "Onion", "Pickle"],
    condiments: ["Ketchup", "Mustard", "Mayonnaise", "Relish", "Onion", "Hot Sauce", "BBQ Sauce", "Melted Cheddar"],
};
        
class menuItem {
    
    constructor (item,price,category) {
        const menuItemDiv = document.createElement("div");
        const itemDiv = document.createElement("div");
        const priceDiv = document.createElement("div");
        const menuCat = document.getElementById(category);



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

        menuCat.appendChild(menuItemDiv);
    
    };

    
}

class menuCategory {

    constructor(name,toppingsCat, description) {

        const descriptionP = document.createElement("p");
        descriptionP.classList.add("description");
        descriptionP.innerHTML = description;

        const menuCat = document.createElement("div");
        menuCat.id = (name);
        
        const menuCatHead = document.createElement("h2");
        menuCatHead.innerHTML = name;
        menuCat.appendChild(menuCatHead);

        if(toppingsCat != "null"){
            const toppingList = document.createElement("ul");
            toppings[toppingsCat].forEach((item) => {
                let li = document.createElement("li");
                li.innerHTML = item;
                toppingList.appendChild(li);
                menuCat.appendChild(toppingList);
            })
        
        }
    
       menuCat.appendChild(descriptionP);
       content.appendChild(menuCat);

    }

    static subCat(name, parentCat){
        const parentCatDiv = document.getElementById(parentCat);
        const subDiv = document.createElement("div");
        const subHeader = document.createElement("h3");

        subDiv.classList.add("subCat");
        subDiv.id = name;
        subHeader.innerHTML = name;
        subDiv.appendChild(subHeader);
        parentCatDiv.appendChild(subDiv);
    }
}



export function menu() {
    
    const condDiv = document.createElement("div");
    const condHead = document.createElement("h2")
    const condList = document.createElement("ul");
    const menuHeader = document.createElement("h1");

    menuHeader.innerHTML = "Menu";
    content.appendChild(menuHeader);
    
    new menuCategory("Pizza", "pizzaToppings","Available in slices (Cheese or Pepperoni), Small(12 in.), or Large(18 in.). Extra toppings $1.00 each");
    
    new menuCategory("Wings", "wingFlavors", "Available in bone-in or boneless, served with side of celery and choice of ranch or blue cheese dipping sauce");
    new menuCategory("Burgers", "burgerToppings", "Served with choice of toppings and condiments on a brioche bun. Cheeseburgers made with American Cheese. Provolone and Cheddar available at request. Make it a double for $4.00 more");
    new menuCategory("French Fries", "null", "Salted Crispy Thin cut French Fries, available in regular or family sized portions");
    new menuCategory("Hot Dogs", "null", "Grilled Hot Dogs available in standard or foot long size, served with choice of condiments");
    new menuCategory("Snacks and Treats", "null", "Tasty snacks when you just need a bite to make it through");
    new menuCategory("Beverages","null","");
    new menuCategory("Condiments", "condiments", "Free with purchase, Melted Cheddar limited to 1 serving per customer");

    menuCategory.subCat("Classic Bone-In", "Wings");
    menuCategory.subCat("Boneless", "Wings");

    new menuItem("Slice","2", "Pizza");
    new menuItem("Small", "10", "Pizza");
    new menuItem("Large","15", "Pizza");

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
    new menuItem("Nachos w/ Cheese", "5", "Snacks and Treats");

    new menuItem("Water", "0", "Beverages");
    new menuItem("Soda", "2", "Beverages");
    new menuItem("Beer", "4", "Beverages");
    new menuItem("Mixed Drinks", "6", "Beverages");

    

    
}
