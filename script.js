"use strict";

for (let i = 1; i <= 4; i++) {
    let div = document.createElement("div");
    div.classList.add(`schema${i}`);
    document.querySelector("#colorBox").prepend(div);
    div.innerHTML = `<div id="n1"></div>
    <div id="n2"></div>
    <div class="ord" id="n3"> SCHEME ${i} </div>
    <div id="n4"></div>
    <div id="n5"></div>`;
};

// skapa alla färger i färgschemat
for (let schema = 1; schema <= 4; schema++) {
    for (let index = 1; index <= 5; index++) {
        document.querySelector(`.schema${schema} #n${index}`).style.backgroundColor = getColor(schema, index);
    };
};


// Så att knapparna gör sin sak
document.getElementById("bigger").addEventListener("click", function(){
    document.documentElement.style.setProperty("--szSymbol", "400px");
});
document.getElementById("smaller").addEventListener("click", function() {
    document.documentElement.style.setProperty("--szSymbol", "70px");
});
document.getElementById("stop").addEventListener("mouseup", function(){
    let stop = getComputedStyle(document.querySelector("#box1")).getPropertyValue("height");
    document.documentElement.style.setProperty("--szSymbol", stop);
});

let playground = document.querySelector("#playground");

document.querySelector("#colorBox > div").addEventListener("click", function() {
    playground.style.backgroundColor = getColor(4, 5);
    removeClassFromElement(document.querySelector(".selected"), "selected");
    document.querySelector("#colorBox > div").classList.add("selected");

    for (let i = 1; i <= 5; i++) {
        document.querySelector(`#box${i}`).style.backgroundColor = getColor(4, i);
    };
});

document.querySelector("#colorBox > div").nextSibling.addEventListener("click", function() {
    playground.style.backgroundColor = getColor(3, 5);
    removeClassFromElement(document.querySelector(".selected"), "selected");
    document.querySelector("#colorBox > div").nextSibling.classList.add("selected");

    for (let i = 1; i <= 5; i++) {
        document.querySelector(`#box${i}`).style.backgroundColor = getColor(3, i);
    };
});

document.querySelector("#colorBox > div").nextSibling.nextSibling.addEventListener("click", function() {
    playground.style.backgroundColor = getColor(2, 5);
    removeClassFromElement(document.querySelector(".selected"), "selected");
    document.querySelector("#colorBox > div").nextSibling.nextSibling.classList.add("selected");

    for (let i = 1; i <= 5; i++) {
        document.querySelector(`#box${i}`).style.backgroundColor = getColor(2, i);
    };
});

document.querySelector("#colorBox > div").nextSibling.nextSibling.nextSibling.addEventListener("click", function() {
    playground.style.backgroundColor = getColor(1, 5);
    removeClassFromElement(document.querySelector(".selected"), "selected");
    document.querySelector("#colorBox > div").nextSibling.nextSibling.nextSibling.classList.add("selected");

    for (let i = 1; i <= 5; i++) {
        document.querySelector(`#box${i}`).style.backgroundColor = getColor(1, i);
    };
});

// För det ska finnas något på browsen när man öppnar det
playground.style.backgroundColor = getColor(1, 5);
removeClassFromElement(document.querySelector(".selected"), "selected");
document.querySelector("#colorBox > div").nextSibling.nextSibling.nextSibling.classList.add("selected");

for (let i = 1; i <= 5; i++) {
    document.querySelector(`#box${i}`).style.backgroundColor = getColor(1, i);
};