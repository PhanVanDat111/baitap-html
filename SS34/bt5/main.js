let btn = document.getElementById("click");
let tbody = document.getElementById("tbody");
let stt = 0;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let namer = document.getElementById("tennhanvien").value;
    let chucvu = document.getElementById("chucvu").value;

    if(localStorage.getItem("name") == null ){
    localStorage.setItem("name", "[]");
    }
    if (localStorage.getItem("chucvu") == null) {
        localStorage.setItem("chucvu", "[]");
    }
    if (localStorage.getItem("stt") == null) {
        localStorage.setItem("stt", "[]");
    }

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${++stt}</td>
        <td>${namer}</td>
        <td>${chucvu}</td>           
    `;
    tbody.appendChild(row);

    let namelocal = JSON.parse(localStorage.getItem("name"));
    namelocal.push(namer);
    let chucvulocal = JSON.parse(localStorage.getItem("chucvu"));
    chucvulocal.push(chucvu);
    let sttlocal = JSON.parse(localStorage.getItem("stt"));
    sttlocal.push(stt);
    localStorage.setItem("name", JSON.stringify(namelocal));
    localStorage.setItem("chucvu", JSON.stringify(chucvulocal));
    localStorage.setItem("stt", JSON.stringify(sttlocal));

});

