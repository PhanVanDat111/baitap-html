let tongCacsole = 0;

for ( let i = 0 ; i < 5; i++ ){
    let num = Number(prompt('nhập các số nguyên : '));
    if (num <=0) {
        document.writeln('bạn đã nhập sai giá trị yêu cầu');
        break;
    } else if (num %2 !== 0) {
        tongCacsole += num
    }
}
document.writeln('Tổng giá trị các số lẻ  là :' + tongCacsole); 