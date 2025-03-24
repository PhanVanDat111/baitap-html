for ( let i = 1 ;i < 101 ;i++){
    
    if (i % 3 ==0 && i % 5 ==0 ) {
        document.writeln( 'fizzbuzz')
    } else if ( i % 5==0) {
        document.writeln( 'buzz')
    } else if (i % 3 ==0 ) {
        document.writeln( ' Fizz');
    } else {
        document.writeln(i);
    }
    
}