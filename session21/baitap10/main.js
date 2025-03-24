let N = Number(prompt('nhập vào một số nguyên bất kì'));
 
if (N < 2) {
    document.writeln('vui lòng nhập lại giá trị ')
} else {
     let count = 0 ;
    let num = 2;
    while (count < N ) {
        let redflag = 1;
        for ( let i = 2 ; i < num ; i++){
            if (num % i == 0) {
                redflag = 0;
                break;
            }
        }
        if (redflag === 1) {
            count ++;
            document.writeln(num)
            num ++;
        } else {
            num++;
        }
    }
}