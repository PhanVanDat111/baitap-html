
let login = document.getElementById("login");
login.addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.getElementById("name");
    let password = document.getElementById("password");
    if (username.value === 'phanvandat' && password.value === '123456') {
        console.log("Đăng nhập thành công!");

    } else {
        console.log("Đăng nhập thất bại!");
    }
});