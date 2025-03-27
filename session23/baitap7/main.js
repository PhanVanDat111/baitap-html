let array1 = [8, 8,8, 5];
array1.sort((a, b) => a - b);
let mangKhacNhau = [...new Set(array1)];
document.writeln(mangKhacNhau[mangKhacNhau.length-2]);
