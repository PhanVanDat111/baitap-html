let mang = [2,4,8,1,9]
function leNumbers( mang ) {
    for( let i = 0 ; i < mang.length ; i++ ){
        if (mang.length==0) {
            alert('mảng rỗng')
        } else if (isNaN(mang[i])) {
            return "giá trị không hợp lệ"
        }
    }
    let sole;
    for ( i = 0 ; i < mang.length ; i++){
        if (mang[i] % 2 == 0) {
             sole.push(mang[i])
        }
    }
    return sole;
}
alert(leNumbers(mang))