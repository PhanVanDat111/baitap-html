let namLam = Number(prompt('nhập số năm làm của nhân viên: '));
if (namLam<0) {
    document.writeln("không được nhập số năm là số âm");
} else
if (namLam <= 1) {
    document.writeln("Mới vào nghề")
} else if (namLam <= 3) {
    document.writeln("Nhân viên có kinh nghiệm");
} else if (namLam <= 6 ){
    document.writeln(" Chuyên viên")
} else{
    document.writeln("Quản lý");
}
