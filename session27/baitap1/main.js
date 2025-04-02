let a = Number(prompt('nhập vào số a'));
let b = Number(prompt('nhập vào số b'));
// xây luồng điều hướng menu
while (true) {
    alert(`---------------Menu----------------
                1.Cộng hai số.
                2.Trừ hai số.
                3.Nhân hai số.
                4.Chia hai số.
                5.Thoát.
     ------------------------------------`);
    let choice = Number(prompt("Nhập lựa chọn"))
    switch (choice) {
        case 1:
            sumtwoNumber(a,b);
            break;
        case 2:
            minustwonumbers(a,b);
            break;
        case 3:
            multinumber(a,b);
            break;
        case 4:
            chiatwonumber(a,b);

            break;
        case 5:
            // Thoát
            break;
        default:
            alert("Vui lòng nhập số từ 1 đến 7");
            break;
    }
    if (choice >= 6) {
        alert('dữ liệu nhập vào chưa hợp lệ')
    }
}

function sumtwoNumber (a,b) {
    let sum = a + b;
    alert(sum);
    return;
}
function minustwonumbers( a,b ) {
    let minus = a - b ;
    alert (minus);
    return;
}
function multinumber (a,b) {
    let multi = a*b;
    alert(multi);
    return;
}
function chiatwonumber (a,b ) {
    let chia = a - b;
    alert(chia);
    return;
}