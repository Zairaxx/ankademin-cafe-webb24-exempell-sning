// let title = document.getElementById("namn");

let title = document.querySelector("#namn")

title.textContent = "Ankademin Café"

let slogan = document.querySelector("#slogan");
slogan.innerText = "Stockholms no.1 coding café!"

document.body.style.background = "pink";

// let prices1 = document.getElementsByClassName("pris");

let prices = document.querySelectorAll(".pris")

prices.forEach((price) => {price.innerText = "19kr"})

// console.log(prices1);
// console.log(prices2);

let frukostMacka = document.querySelector(".produkt:nth-child(3) .pris");

frukostMacka.textContent = "15kr"
console.log(frukostMacka);

let products = document.querySelectorAll(".produkt");

products[3].innerHTML = "Pannkakor - <span class='pris'> 139kr</span>"


// Alternativ 2
// let span = document.createElement("span");
// span.classList.add("pris");
// span.innerText = "139kr"

// products[3].innerText = "Pannkakor -"
// products[3].append(span);

