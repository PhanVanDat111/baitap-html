let strg = prompt('nhập một một chuỗi bất kì:');
let search = prompt('nhập ký tự mà bạn muốn kiểm tra ')

if (search.length !== 1 ) {
    document.writeln('chuỗi kí tự của bạn nhập vào phải có độ dài là 1 ')
} else if (strg.length <= 1 ) {
    document.writeln('hãy nhập vào một chuỗi ký tự có độ dài ít nhất là 1')
} else {
    let redflag = 0 ;

    for (let i = 0; i < strg.length; i++) {
       if ( search === strg[i]) {
        redflag = 1 ;
        break;
       }   
    }
    if (redflag === 1  ) {
        document.writeln('tồn tại từ mà bạn cần tìm kiếm')
    } else {
        document.writeln(' ko tồn tại từ mà bạn cần tìm kiếm')
    }
}