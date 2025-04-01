const numbers = [2, 5, 10];


function binhphuongNumber (numbers) {
    if (Array.isArray(numbers) == false) {
        return ('dữ liệu không hợp lệ')
    }
    if (numbers.length === 0) {
        return ('mảng rỗng');
    }
    const roots = numbers.map((num) => Math.pow(num,2));
    const result = roots.filter((so) => so % 2 == 0); 
    return result;
}
alert(binhphuongNumber(numbers));