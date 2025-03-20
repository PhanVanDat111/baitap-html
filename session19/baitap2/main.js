let input1 =  prompt('nhập ký tự mà bạn muốn :');

if ( isNaN(input1) && input1.length === 1){
    document.writeln(input1 + 'là chữ cái')
} else {
    document.writeln( input1 + 'không phải là chữ cái')
}