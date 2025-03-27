let mang = [];
count = 0;
for (let i = 0; i < 5; i++) {
    let arr = Number(prompt('nhập vào 5 so ')); 
        mang.push(arr);
    }

 let  result = mang.filter((num) => !isNaN(num));
 let ketqua =  0;
 for (let i = 0; i < result.length; i++) {
    ketqua += result[i];
 }

 document.writeln(ketqua);