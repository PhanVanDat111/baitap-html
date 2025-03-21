let num = Number(prompt('nhập số mà bạn muốn kiểm tra'))

if (num <= 1 ) {
    document.writeln('vui lòng nhập lại giá trị')
} else {

    let flag = 0; // đặt biến cờ là 0 khi số nhập vào là số nguyên tố

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            flag = 1;
            break;
        }
    }
    if (flag === 0 ) {
        document.writeln(num + ' là số nguyên tố')
    } else {
        document.writeln(num + ' không là số nguyên tố')
    }

}