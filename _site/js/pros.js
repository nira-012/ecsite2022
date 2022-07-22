console.log("ffjod");

let miniImg = document.querySelectorAll(".pros__miniimg");
let mainImg = document.querySelector(".pros__mainimg");

for (let i = 0; i < miniImg.length; i++) {
    miniImg[i].addEventListener("click", function () {
        mainImg.setAttribute("src", miniImg[i].src);
    })
}