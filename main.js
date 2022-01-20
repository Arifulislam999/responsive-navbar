let x = document.querySelector(".alrt");
let bt = document.querySelector(".bt");
bt.addEventListener("click", () => {
    bt.style.display = "none";
    x.style.display = "inline";
});
x.style.display = "none";