let mang = [];
count = 0;
for (let i = 0; i < 5; i++) {
    let arr = Number(prompt('nhập vào 5 so '));
    if (isNaN(arr)) {
        document.writeln('Bạn nhập vào sai giá trị, vui lòng chạy lại chương trình!');
        break;
    } else {
        mang.push(arr);
    }
}
for (let i = 0; i < mang.length; i++) {
    if (mang[i] < 0 && Number.isInteger(mang[i])) {
        count++;
    }
}
if (count === 0) {
    document.writeln('không có số âm nào trong mảng')
} else {
    document.writeln('có ' + count + ' số âm trong mảng')
}