let mang = [2,"a",8,1,9]
function minNumbers( mang ) {
    for( let i = 0 ; i < mang.length ; i++ ){
        if (mang.length==0) {
            alert('mảng rỗng')
        } else if (isNaN(mang[i])) {
            return "giá trị không hợp lệ"
        }
    }
    let min = mang[0];
    for (let i = 0 ; i < mang.length ; i++){
        if (mang[i] < min) {
            min = mang[i];
        }
    }
    return min ;
}
alert(minNumbers(mang));