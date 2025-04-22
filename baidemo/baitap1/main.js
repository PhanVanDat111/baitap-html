let btn = document.getElementById("btn");
let savename = localStorage.getItem("name")
let nameInput = document.getElementById("name");

btn.addEventListener("click", function() {
    let name = nameInput.value.trim();
    if (name === "") {
        alert("Vui lòng nhập tên!");
        return;
    }
    localStorage.setItem("name", name);
    savename = name;
    location.href = "page.html";
    renderName();
});

function renderName() {
    let namelist = document.getElementById("tenhienthi");
    console.log(namelist);
    
    namelist.innerText = `Xin chào ${savename}`;
}



