console.log("dflksflks");


let soldOut = document.querySelectorAll(".items__out");
console.log(soldOut[0].alt)
for (let i = 0; i < soldOut.length; i++) {
    if (soldOut[i].alt == "TRUE") {
        soldOut[i].setAttribute("style", "opacity:0");
    }
}

let item = document.querySelectorAll(".items__link");
for (let i = 0; i < item.length; i++) {
    item[i].setAttribute("style", "display:none");
}

for (let i = 0; i < 9; i++) {
    item[i].setAttribute("style", "display:block");
}


let more = document.querySelector(".items__more");
more.addEventListener("click", function () {
    if (more.innerText == "MORE") {
        for (let i = 0; i < item.length; i++) {
            item[i].setAttribute("style", "display:block");
        }
        more.innerText = "CLOSE";
    }

    else {
        for (let i = 0; i < item.length; i++) {
            item[i].setAttribute("style", "display:none");
        }
        for (let i = 0; i < 9; i++) {
            item[i].setAttribute("style", "display:block");
        }
        more.innerText = "MORE";
    }

})