let users = []
let email = prompt(" mời bạn nhập vào tài khoản bạn muốn đăng kí")
const checkEmail = () => /^[^\s@]+@[^\s@]+\.(com|vn)$/.test(email);


if (!checkEmail()) {
    console.log("Email không hợp lệ!");
    return;
}

if (users.includes(email)) {

    console.log("Tài khoản đã tồn tại!");
} else {
    users.push(email);

    console.log("Đăng ký thành công!");
}