const words = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
function locword(words) {

    if (Array.isArray(words) == false) {
        return ('dữ liệu không hợp lệ')
    };
    // Expected output: true

    if (words.length === 0) {
        return ('mảng rỗng');
    }
    

    const result = words.filter((word) => word.includes('@')&& !word.includes(" ") );
    
     return result;

}
alert(locword(words))    