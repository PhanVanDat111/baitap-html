let mang = [];
for (let i = 0; i < 10; i++) {
    let arr = Number(prompt('nhập vào 10 sô nguyên '));
    if (isNaN(arr)) {
        document.writeln('Bạn nhập vào sai giá trị, vui lòng chạy lại chương trình!');
        break;
    } else {
        mang.push(arr);
    }
}

let vTri = 0;

let max = mang[0];

for (let i = 0; i < mang.length; i++) {
    if (max < mang[i]) {
        max = mang[i];
        vTri = i;
    }


}
document.writeln('Mảng bạn vừa nhập: ' + mang + '<br>');
document.writeln('Số lớn nhất là: ' + max + ' ở vị trí ' + vTri);