

login.addEventListener("click", () => {
    let username = document.getElementById("name");
let password = document.getElementById("password");
let login = document.getElementById("login");
    if (username.Value === 'phanvandat' && password.Value === '123456') {
        console.log("Đăng nhập thành công!");
       
    } else {
        console.log("Đăng nhập thất bại!");
    }});