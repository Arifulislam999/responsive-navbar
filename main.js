let btn = document.querySelector(".men");
let menu = document.querySelector(".logo-right");
let cont = document.querySelector("#con");

btn.addEventListener("click", () => {
    btn.classList.toggle("togle");

    if (btn.classList.contains("togle")) {
        menu.style.display = "inline";
        menu.style.transition = "all .4s";
        cont.style.transform = "translateY(260px)";
        cont.style.transition = "all .3s";
    } else {
        menu.style.transition = "all .4s";
        menu.style.display = "none";
        cont.style.transform = "translateY(0px)";
        cont.style.transition = "all .3s";
    }
});