let soTienGui = Number(prompt('nhập số tiền bạn muốn gửi'));
 
let Lai = soTienGui*(1/100);
let tienLai= 0;
let soThang = Number(prompt('nhập vào số tháng bạn muốn gửi '));
for ( let i = 0 ; i < soThang ; i++){
    tienLai += Lai;
}
document.writeln( 'tiền lãi của bạn là ' + tienLai + '<br>');  
let tongTien = soTienGui + tienLai;
document.writeln( 'Tổng tiền của bạn nhận đc là :' +(tongTien.toFixed(100/10) ));