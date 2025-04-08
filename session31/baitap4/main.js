let clickcolor = document.getElementById("click");
let text = document.getElementById("text");
let x = document.getElementById("x");
clickcolor.addEventListener("click", () => {

    document.body.style.backgroundColor = "#999999";
    document.body.style.transition = "1s";
    text.style.textAlign = "center";
    text.style.display = "block";
    x.style.display = "block";
});
x.addEventListener("click", () => {
    text.style.display = "none";
    x.style.display = "none";
    document.body.style.backgroundColor = "white";
    document.body.style.transition = "1s";    
});