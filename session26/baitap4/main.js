let array = [1,2,3,4,5,6,7,8,9,10];
function primenumbers (numbers) {
    if (numbers<2) {
        return false;
    }
    for ( let i = 2 ; i < numbers ; i++){
        if (numbers % i == 0) {
            return false;
        }
     }
        return true;
 
}
function checkprime (array) {
    return array.filter((num)=> primenumbers(num));
}
alert(checkprime(array))