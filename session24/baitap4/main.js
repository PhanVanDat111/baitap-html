let a = Number(prompt('nhập vào số a'));

function primeNumbers (a) {
    if (isNaN(a)) {
        return ('bạn đã nhập sai giá trị')
    }
    let flag = 0 ;
    for ( let i = 2 ; i < a ; i++){
        if (a % i == 0) {
            flag = 1;
        }
    }
    if (flag === 0) {
        return ('số nguyên tố')
        
    } else {
        return ('khong phai la so nguyen to')
    }
    
}
alert(primeNumbers(a));