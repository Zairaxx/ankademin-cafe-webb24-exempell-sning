let h1 = document.querySelector("#namn");

h1.textContent = "Ankademin Café";

document.querySelector("#slogan").textContent = "Stockholms no.1 coding café!";

// let body = document.querySelector("body");

document.body.style.background = "peachpuff";

let prices = document.querySelectorAll("span.pris");

prices.forEach(pris => {
    pris.innerText = " 19kr "
})

let frukostMackaPris = document.querySelector("ul li:nth-child(3) span.pris");
frukostMackaPris.textContent = "15kr"

let emptyProduct = document.querySelector("li.produkt:last-child");
console.log(emptyProduct);

//Alternativ 1
// emptyProduct.textContent = "Snickers - ";
// let pris = document.createElement("span")
// pris.textContent = "999kr"

// emptyProduct.append(pris);

//Alternativ 2
emptyProduct.innerHTML = "Kanelbulle - <span class='pris'>10kr</span>"

let h3 = document.createElement("h3");

h3.textContent = "Öppettider: Alla dagar kl 18-21"

let website = document.querySelector("#website");

let p = document.createElement("p");
p.textContent = "Till Ankademin Café är alla välkomna att sitta och koda och ta en mysig fika!";

website.append(h3,p);

let allParagraphs = document.querySelectorAll("p");

allParagraphs.forEach(p => {
    p.style.color = "darkred";
})