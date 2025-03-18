let tenDangnhap = prompt('Hãy nhập nhập tên đăng nhập: ');
if (tenDangnhap == 'ADmin') {
    let password = prompt('hãy nhập mật khẩu: ');
    if (password == 'TheMaster') {
        document.writeln("Welcome.")
    } else if (password == null) {
        document.writeln("Cancelled.")
    } else {
        document.writeln("Wrong password.")
    }
} else if (tenDangnhap == null) {
    document.writeln("Cancelled")
}else{
    document.writeln("“I Don’t know you”")
}
