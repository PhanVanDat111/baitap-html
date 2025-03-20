let kyTu = prompt('nhập chuỗi bạn muốn kiểm tra: ');

if (kyTu.includes(" ") === kyTu) {
    document.writeln('có chứa dấu cách')
} else {
    document.writeln('không chưa dấu cách')
}