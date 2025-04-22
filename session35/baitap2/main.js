let user = JSON.parse(localStorage.getItem("user")) || [];
let trangbatdau = 0;
let soluongmoitrang = 3;

// hàm dùng làm tròn số trang
function tongsotrang() {
    return Math.ceil(user.length / soluongmoitrang);
}

function phantrangsanpham(trang) {
    let batdau = trang * soluongmoitrang;
    let ketthuc = batdau + soluongmoitrang;
    return user.slice(batdau, ketthuc);
}

function themnhanvienchucvu(danhsachphantrang) {
    const tbody = document.getElementById("tbody");
    let html = "";
    danhsachphantrang.forEach(function(item, index) {
      html += `
        <tr>
          <td>${index + 1 + currentPage * productCountPerPage}</td>
          <td>${item.tennhanvien}</td>
          <td>${item.chucvu}</td>
        </tr>`;
    });
    tbody.innerHTML = html;
    showphantrang();
  }
