    let clickadd = document.getElementById("addBtn");
    let tbody = document.getElementById("bookList");
    let searchBtn = document.getElementById("searchBtn");

    clickadd.addEventListener("click", (e) => {
        e.preventDefault();
        let tensach = document.getElementById("tensach").value;
        let tacgia = document.getElementById("tacgia").value;
        let namxuatban = document.getElementById("namxuatban").value;
        let theloai = document.getElementById("theloai").value;
        if (tensach === "" || tacgia === "" || namxuatban === "" || theloai === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${tensach}</td>
            <td>${tacgia}</td>
            <td>${namxuatban}</td> 
            <td>${theloai}</td> 
            <td><button class="deleteBtn">Xóa</button> <button class="editBtn">Sửa</button></td>

        `;
        tbody.appendChild(row);
    row.querySelector(".deleteBtn").addEventListener("click", () => {
        row.remove();
    });
    });
searchInput.addEventListener("input", () => {
    let keyword = searchInput.value.toLowerCase();
    let rows = tbody.querySelectorAll("tr");

    rows.forEach(row => {
        let tensach = row.querySelector("td").innerText.toLowerCase();
        if (tensach.includes(keyword)) {
            row.style.display = ""; // Hiện dòng
        } else {
            row.style.display = "none"; // Ẩn dòng
        }
    });
});

