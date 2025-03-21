
let inputss = prompt("Nhập một số nguyên:");  // Nhập từ bàn phím

if (isNaN(input)) {
    console.log("Số không hợp lệ");
} else {
    let str = input.toString();
    let len = str.length;
    let isPalindrome = true;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        console.log("Là số đối xứng");
    } else {
        console.log("Không phải số đối xứng");
    }
}
