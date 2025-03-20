let soTien = Number(prompt('nhập số tiền mà bạn muốn đổi: '));
let loaiTien = prompt('nhập đơn vị tiền muốn đổi:');

if (loaiTien=== 'USD') {
    tienVND = soTien * 23000
    document.writeln( tienVND + 'VND')
} else if (loaiTien==='VND') {
    tienUSD = soTien / 23000
    document.writeln(tienUSD + 'USD')
} else{
    document.writeln('Bạn đã nhập sai loại tiền muốn đổi.')
}

