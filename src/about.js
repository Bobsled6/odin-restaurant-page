const content = document.getElementById("content");
const contactDiv = document.createElement("div");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

class contactPair {
    constructor(key,value) {
        const contactPairDiv = document.createElement("div");

        contactPairDiv.classList.add("contactPair");
        contactPairDiv.id = key;
        contactPairDiv.innerHTML = key + ": " + value;
        contactDiv.appendChild(contactPairDiv);
    }
}

export function aboutDiv() {
    const aboutHeader = document.createElement("h1");
    const aboutDesc = document.createElement("p");
    const contactHeader = document.createElement("h2");
    
    homeButton.style.boxShadow = "none";
    menuButton.style.boxShadow = "none";
    aboutButton.style.boxShadow = "inset 0px 0px 50px 0px #29CFFF, 0px 26px 9px -7px #185370";

    aboutHeader.innerHTML = "About Us";
    contactHeader.innerHTML = "Contact Us";
    aboutDesc.innerHTML = "Family owned since 1973. Ballbark Bar and Grill has continued to strive to serve the community and remain a positive place for the whole family."
    aboutDesc.id = "aboutDesc";

    contactDiv.id = "contactDiv";
    
    content.appendChild(aboutHeader);
    content.appendChild(aboutDesc);
    content.appendChild(contactHeader);
    content.appendChild(contactDiv);
    contactDiv.replaceChildren();

    

    new contactPair("Phone Number", "(555) 555-5555");
    new contactPair("E-mail", "example@example.com");
    new contactPair("Location", "91910 McCullough Parkway, Waltonhaven, Maine");
    new contactPair("Hours","Monday - Saturday, 11 a.m. - 11 p.m.");
}