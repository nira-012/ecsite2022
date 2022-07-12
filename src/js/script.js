console.log("dflksflks");


let soldOut = document.querySelectorAll(".items__out");
console.log(soldOut[0].alt)
for (let i = 0; i < soldOut.length; i++) {
    if (soldOut[i].alt == "TRUE") {
        soldOut[i].setAttribute("style", "opacity:0");
    }
}