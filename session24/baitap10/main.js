let mang = [];
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
            nhapMang();
            break;
        case 2:
            hienThiMang();
            break;
        case 3:
            timsolonnhatvasonhonhat();
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

function nhapMang() {
    let n = parseInt(prompt("Nhập số phần tử của mảng:"));
    for(let i = 0; i < n; i++) {
        let giaTri = parseInt(prompt(`Nhập phần tử thứ ${i + 1} :`));
        mang.push(giaTri);
    }
    alert("Mảng vừa nhập:"+ mang);
    return mang;
}
function hienThiMang () {
    if (mang.length === 0) {
        alert('Mảng rỗng')
    } else {
        alert('Mảng hiện tại của bạn là : ' + mang.join( ", ") ); 
    }
}
function timsolonnhatvasonhonhat () {
    if (mang.length===0) {
        alert('mảng rỗng');
    }

     let solonnhat = mang[0];
    let sonhonhat = mang[0];

    for ( let i = 0 ; i < mang.length ; i++){
        if (mang[i] > solonnhat) {
            solonnhat = mang[i];
        }
        if (mang[i] < sonhonhat) {
            sonhonhat = mang[i];
        }
    }
    alert('số lớn nhất: ' + solonnhat );
    alert('số nhỏ nhất: ' + sonhonhat );
   
}