let redclick = document.getElementById("box1")
let greenclick = document.getElementById("box2");  
let blueclick = document.getElementById("box3");

redclick.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
    document.body.style.transition = "1s";
});
greenclick.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
    document.body.style.transition = "1s";
});
blueclick.addEventListener("click", () => {
    document.body.style.backgroundColor = "purple";
    document.body.style.transition = "1s";    
});