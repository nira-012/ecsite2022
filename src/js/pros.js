console.log("ffjod");

let miniImg = document.querySelectorAll(".pros__miniimg");
let mainImg = document.querySelector(".pros__mainimg");

for (let i = 0; i < miniImg.length; i++) {
    miniImg[i].addEventListener("click", function () {
        mainImg.setAttribute("src", miniImg[i].src);
    })
}

let out = document.querySelector(".pros__out");
console.log(out.id)
if (out.id == "FALSE") {
    out.innerText = "※在庫切れ"
}

else {
    out.innerText = "";
}



let soldOut = document.querySelectorAll(".items__out");
console.log(soldOut[0].alt)
for (let i = 0; i < soldOut.length; i++) {
    if (soldOut[i].alt == "TRUE") {
        soldOut[i].setAttribute("style", "opacity:0");
    }
}
