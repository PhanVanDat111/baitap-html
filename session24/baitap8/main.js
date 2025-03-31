const isStrongPassword = () => {
    if (password.length < 8) return false;
    let hasUpperCase = /[A-Z]/.test(password);
    let hasLowerCase = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber;
}
let password = "Abc123!@"
console.log(isStrongPassword())