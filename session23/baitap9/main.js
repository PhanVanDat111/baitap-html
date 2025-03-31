let studentNameArray = ["Phan Trung Kiên", "Hồ Lê Anh Đào", "Phan Đình Nghị"];
// xây luồng điều hướng menu
while (true) {
    alert(`---------------Menu----------------
            1. Nhập mảng
            2. Hiển thị mảng
            3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
            4. Tính tổng các phần tử trong mảng
            5. Tìm số lần xuất hiện của một phần tử trong mảng
            6. Sắp xếp mảng tăng dần
            7. Thoát chương trình 
            ------------------------------------`);
    let choice = Number(prompt("Nhập lựa chọn"))
    switch (choice) {
        case 1:
            // hiển thị

            break;
        case 2:
            // Thêm mới

            break;
        case 3:
            // Cập nhật

            break;
        case 4:
            // Xóa

            break;
        case 5:
            // tìm kiếm

            break;
        case 6:
            // Sắp xếp

            break;
        case 7:
            // Thoát
            break;
        default:
            alert("Vui lòng nhập số từ 1 đến 7");
            break;
    }
    if (choice == 7) {
        break;
    }
}
