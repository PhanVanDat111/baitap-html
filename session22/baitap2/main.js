let numbers = [2,4,5,6,7,8];

let num = Number(prompt('nhập vào một số bất kì'));

let flag = 0;

for ( let i = 0 ; i< numbers.length ; i++){
    if (num === numbers[i]) {
        flag = 1 ;
        break;
    } 
}

if (flag===1) {
    document.writeln('bingo')
} else {
    document.writeln('chúc bạn may mắn lần sau ')
}