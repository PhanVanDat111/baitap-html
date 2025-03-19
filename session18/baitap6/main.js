let nam = Number(prompt("nhập số năm mà bạn muốn kiểm tra: "));

if (nam % 4 === 0 && num % 100 !== 0 || nam % 400 === 0) {
    document.writeln(nam + 'là năm nhuận');
} else {
    document.writeln( nam + 'không phải là năm nhuận')
}
