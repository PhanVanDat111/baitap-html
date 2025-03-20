let thang = Number(prompt('nhập số tháng :'));

if (thang ===1 || thang ===3|| thang === 5|| thang === 7 || thang === 8|| thang ===10|| thang ===12||) {
    document.writeln( 'tháng' + thang + ' có 31 ngày')
} else if ( thang === 2) {
    document.writeln('tháng' + thang + ' có 28 hoặc 29 ngày nếu như là năm nhuận ')
}  else if (thang ===2 || thang ===4|| thang === 6|| thang === 9 || thang === 8|| thang ===11 ) {
    document.writeln( 'tháng' + thang + ' có 30 ngày') 
} else{
    document.writeln('tháng không hợp lệ.')
}                
