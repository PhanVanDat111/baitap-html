let array = [1,22,10,9,8];
function locNUmbers(array) {
    let count = 0;
    for ( let i = 0 ; i < array.length ; i++ ){
        if (array[i] > 9) {
           alert(array[i])
           count ++;
        } 
    }
    if (count===0) {
        return('không có số nào lớn hơn 10 ')
    }
    return(array[i]);
}
alert(locNUmbers(array));