let num = Number(prompt('nhập vào một số nguyên bất kì'));
if (num < 2) {
    document.writeln('bạn đã nhập sai giá trị');
} else {
    let redflag = 1;
    for ( let  i = 2 ; i < num ; i++){
    if (num % i == 0) {
        redflag = 0;
    }
}
if (redflag) {
    document.writeln( num + ' là số nguyên tố')
} else {
    document.writeln( num + ' không phải là sô nguyên tố')
}
}