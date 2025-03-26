let numbers = [ 2 , 5 , 4 , 1 , 6 , 8 , 2 , 5 , 7];

let N = Number(prompt('nhập vào một số bất kì'));

let count = 0;
if (isNaN(N)) {
    document.writeln('bạn đã nhập sai giá trị')
} else {
    for ( let i =0 ; i < numbers.length ; i++){
        if (N === numbers[i]) {
            count++;
        }
    }
    if (count !== 0) {
        document.writeln( 'so' + N + ' lap lai ' + count +' lan ')
    } else {
        document.writeln('so ' + N + ' khong xuat hien ' )
    }
}