let array = [1,2,3,4,5,6,7,8,9];
function primenumer (numbers) {
    if (Numbers < 2) {
        return false;
    }
    for (let i = 2 ; i < numbers ; i++){
        if (numbers % i== 0) {
            return false;
        }     
    }
    return true;
}
function checknumer(array) {
    return array.filter((num)=primenumer(num));
}
 alert(checknumer(array));