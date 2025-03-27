let mang = [];
count = 0;
for (let i = 0; i < 5; i++) {
    let arr = Number(prompt('nhập vào 5 so ')); 
        mang.push(arr);
    }

 let  result = mang.filter((num) => !isNaN(num));

 document.writeln(result.join(' '));