let N = Number(prompt('nhập vào N số nguyên tố đâu tiên'));
if (isNaN(N) && N < 0) {
    document.writeln('Bạn nhập vào sai giá trị, vui lòng chạy lại chương trình!');
} else {
    let num = 2;
    let count = 0;

    while (count < N) {
        let flag = 1;
        for (let i = 2; i < num; i++) {
            
            if (num % i == 0) {
                flag = 0;
                break;
            }
        }
        if (flag === 1) {
            count++;
            document.writeln(num);
            num++;
        } else {
            num++;
        }
    }
}