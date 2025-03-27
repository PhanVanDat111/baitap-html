let arr = Number(prompt('nhập vào 10 sô nguyên '));
 let count = 0;

 for ( let i = 0 ; i < arr.length ; i++){
    if (arr[i] >= 10 ) {
        document.writeln(arr[i]);
        count++;
    } 
    if (count===0) {
        document.writeln('không có số nào lớn hơn 10')
    }
    
 }