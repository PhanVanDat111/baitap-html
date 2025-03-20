let N = Number(prompt('nhập số lượng bản muốn kiểm tra '));
if ( isNaN(N) || N <= 0 ) {
    document.writeln('dữ liệu nhập vào không hợp lệ.');
} else {
    for (let i = 1; i <= N ; i++){
        if (i % 5 ==0) {     
            document.writeln(i);
        }    
    }
   
}