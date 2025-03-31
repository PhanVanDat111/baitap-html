let a = Number(prompt('nhập vào số a'));
let b = Number(prompt('nhập vào số b'));


function sumNumbers(a , b) {
    if (isNaN(a)|| isNaN(b)) {
        return 'giá trị không hợp lệ';
    }
     let sum = a + b;
    return sum;
}
alert(sumNumbers(a,b));