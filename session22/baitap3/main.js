let num = prompt('nhập 5 số bất kì ');

if (isNaN(num)) {
    document.writeln('nhap sai')
} else {
    let arr = num.split("");

let ketQua = arr.reverse();

document.writeln(ketQua);
}