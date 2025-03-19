let a = Number(prompt('nhập số a:'));
let b = Number(prompt('nhập só b:'));

let phepTinh = prompt('nhập các phép tính (+;-;*;/)');

switch (phepTinh) {
    case '+':
        c = a + b
        document.writeln("a + b =" + c)
        break;
    case '-':
        c = a - b
        document.writeln("a - b =" + c)
        break;
    case '*':
        c = a * b
        document.writeln("a * b =" + c)
        break;
    case '/':
        c = a - b
        document.writeln("a / b =" + c)
        break;
    default:
    document.writeln('bạn đã nhập sai phép tính.');
}