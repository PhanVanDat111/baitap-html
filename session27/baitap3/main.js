let r = Number(prompt('nhập vào số r'));
let a = Number(prompt('nhập vào số a'));
let b = Number(prompt('nhập vào số b'));
// xây luồng điều hướng menu
while (true) {
alert(`---------------Menu----------------
            1.Tính diện tích hình tròn.
            2.Tính chu vi hình tròn.
            3.Tính diện tích hình chữ nhật.
            4.Tính chu vi hình chữ nhật.
            5.Thoát.
       ------------------------------------`);
    let choice = Number(prompt("Nhập lựa chọn"))
    switch (choice) {
        case 1:
            dienTichHt(r);
            break;
        case 2:
            chuVihinhtron(r);
            break;
        case 3:
            dientichhcn(a,b);
            break;
        case 4:
            chuvihcn(a,b);

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
function dienTichHt( r ) {
    let dientich = Math.PI * Math.pow(r,2);
    alert ( dientich);
    return ;
}
function chuVihinhtron(r) {
    let chuvi = 2*Math.PI*r
    alert(chuvi);
    return;
}
function dientichhcn(a,b ) {
    let dientich = a*b;
    alert(dientich);
    return;
}
function chuvihcn (a,b ) {
    let chuvi = (a + b) * 2;
    alert(chuvi);
    return;
}