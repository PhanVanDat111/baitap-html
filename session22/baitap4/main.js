let num = prompt('nhập 5 số bất kì ');

if (isNaN(num)) {
    document.writeln('nhap sai')
} else {
    let arr = num.split("");
    arr = arr.map(Number)
     let max =0;
    for( let i = 0 ; i < arr.length ; i++){        
        if (max < arr[i]) {
            max = arr[i];
        }   
    }
    document.writeln(max)
}
