const content = document.getElementById("content");


const toppings = {
    pizzaToppings: ["Pepperoni", "Ham", "Sausage", "Chicken", "Broccoli", "Green Pepper", "Red Pepper", "Banana Pepper", "Jalapeno Pepper", "Red Pepper","Green Olives", "Black Olives", "Onion", "Mushroom"],
    pizzaSauce: ["Traditional", "Ranch", "Buffalo", "BBQ"],
    wingFlavors: ["Hot Buffalo", "Mild Buffalo", "BBQ", "Honey BBQ", "Lemon Pepper", "Teriyaki"],
    wingSauce: ["Ranch", "Blue Cheese"],
    burgerToppings: ["Bacon", "Lettuce", "Tomato", "Onion", "Pickle"],
    cheeseTypes: ["Provolone", "American", "Cheddar", "Pepper Jack"],
    condiments: ["Ketchup", "Mustard", "Mayonnaise", "Relish", "Hot Sauce", "BBQ Sauce", "Melted Cheddar"],
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
        priceDiv.innerHTML = '$' + price;
        
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

        const toppingList = document.createElement("ul");
        toppings[toppingsCat].forEach((item) => {
            let li = document.createElement("li");
            li.innerHTML = item;
            toppingList.appendChild(li);
        })

        console.log(menuCat);
    
       menuCat.appendChild(toppingList);
       menuCat.appendChild(descriptionP);
       content.appendChild(menuCat);

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
    new menuCategory("Condiments", "condiments", "")
    
    new menuItem("Slice","2.00", "Pizza")
    new menuItem("Small", "10", "Pizza")
    new menuItem("Large","15", "Pizza")

    
}
