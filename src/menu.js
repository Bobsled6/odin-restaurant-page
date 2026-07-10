const content = document.getElementById("content");

class menuItem {
    
    constructor (item,price, description) {
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
    new menuItem("pizza","2.00")
    new menuItem("wings","10.00")
}
