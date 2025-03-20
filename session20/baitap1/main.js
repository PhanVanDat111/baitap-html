let num = Number(prompt('nhập một số :'));

if ( isNaN(num) || num <= 0 ) {
    document.writeln('dữ liệu nhập vào không hợp lệ.');
} else {
    let nums = 0;
    for (let i = 1 ; i <= num; i++) {
        nums += i;
    }
    document.writeln(nums)
}