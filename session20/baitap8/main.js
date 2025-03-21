let num = Number(prompt('nhập số mà bạn muốn kiểm tra'))
if (num <= 1) {
    document.writeln('vui lòng nhập lại giá trị')
} else {
    let count = 0;
    let numrun = 2;
    while (count < num) {
        let flag = 1;
        for (let i = 2; i <= Math.sqrt(numrun); i++) {
            if (numrun % i == 0) {
                flag = 0;
                break;
            }
        }
        if (flag===1) {
            count++;
            document.writeln(numrun)
            numrun++;
            
        } else {
            numrun++;
        }
    }
}
