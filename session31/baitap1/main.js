let hidetext = document.getElementById("hide");
let showtext = document.getElementById("show");
let text = document.getElementById("text");

hidetext.addEventListener("click", () => {
    text.style.display = 'none';
});
showtext.addEventListener("click", () => {
    text.style.display = 'block';
});
