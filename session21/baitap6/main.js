let N = Number(prompt('nhập một số nguyên bất ki'));

for ( let i = 1 ; i <= N ; i++){
    if ( N % i ==0) {
        document.writeln(i);
    }
}