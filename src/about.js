const content = document.getElementById("content");
const contactDiv = document.createElement("div");

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
    

    aboutHeader.innerHTML = "About Us";
    contactHeader.innerHTML = "Contact Us";
    aboutDesc.innerHTML = "Family owned since 1973. Ballbark Bar and Grill has continued to strive to serve the community and remain a positive place for the whole family."
    
    content.appendChild(aboutHeader);
    content.appendChild(aboutDesc);
    contactDiv.appendChild(contactHeader);
    content.appendChild(contactDiv);

    

    new contactPair("Phone Number", "(555) 555-5555");
    new contactPair("E-mail", "example@example.com");
    new contactPair("Location", "91910 McCullough Parkway, Waltonhaven, Maine");
    new contactPair("Hours","Monday - Saturday, 11 a.m. - 11 p.m.");
}