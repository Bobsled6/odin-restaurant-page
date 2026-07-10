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
    
    constructor (item,price,description) {
        const menuItemDiv = document.createElement("div");
        const itemDiv = document.createElement("div");
        const priceDiv = document.createElement("div");
        const descriptionP = document.createElement("p");

        this.item = item;
        this.price = price;
        this.description = description;

        menuItemDiv.id = (item);
        menuItemDiv.classList.add("menuItem");
        
        itemDiv.classList.add("foodItem");
        itemDiv.innerHTML = item;
       
        priceDiv.classList.add("price");
        priceDiv.innerHTML = '$' + price;
        
        descriptionP.classList.add("description");
        descriptionP.innerHTML = description;

        
        menuItemDiv.appendChild(itemDiv);
        menuItemDiv.appendChild(priceDiv);
        menuItemDiv.appendChild(descriptionP);
        content.appendChild(menuItemDiv);
        console.log(menuItemDiv);
        

    };

    
}

export function menu() {
    
    const condDiv = document.createElement("div");
    const condHead = document.createElement("h1")
    const condList = document.createElement("ul");
    
    condHead.innerHTML = "Condiments";


    toppings.condiments.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = item;
        condList.appendChild(li);
    })
    
    condDiv.appendChild(condHead);
    condDiv.appendChild(condList);
    content.appendChild(condDiv);
    
    
    new menuItem("pizza","2.00","")
    new menuItem("wings","10.00")
}
