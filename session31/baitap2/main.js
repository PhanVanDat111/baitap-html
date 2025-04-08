
let blackbackground = document.getElementById("toggle");

blackbackground.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.style.transition = "1s";
    }



});