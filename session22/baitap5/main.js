let arr = [1,2,3,5,6];
let soLe = 0;
let soChan = 0;
let ketqua = 0;
for ( let i = 0 ; i < arr.length ; i++){
    if (arr[i] % 2 ==0 ) {
     soChan += arr[i];
    } else {
        soLe += arr[i]; 
    }
}
document.writeln(soChan)
document.writeln(soLe)
