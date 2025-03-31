let mang = [1,2,3,4,5,6,-1];
count = 0;
function countSonguyen(mang) {
    for ( let i = 0 ; i < mang.length ; i++){
          if (isNaN(mang)) {
       return('Bạn nhập vào sai giá trị, vui lòng chạy lại chương trình!');
    }
    }
    
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] > 0 && Number.isInteger(mang[i])) {
            count++;
        }
    }
    if (count === 0) {
        return('có ' + count + ' số dương trong mảng') 
    } else {
        return('có ' + count + ' số dương trong mảng') 
}
}
alert(countSonguyen(mang))
