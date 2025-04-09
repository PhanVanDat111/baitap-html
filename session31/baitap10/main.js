let btn = document.getElementById("click");
let tbody = document.getElementById("tbody");
let stt=1

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.getElementById("tennhanvien").value;
    let chucvu = document.getElementById("chucvu").value;
  
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${stt++}</td>
        <td>${name}</td>
        <td>${chucvu}</td>           
    `;
    tbody.appendChild(row);
});

