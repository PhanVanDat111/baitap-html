let a = Number(prompt('Nhập số a:'));
let b = Number(prompt('Nhập số b:'));
let c = Number(prompt('Nhập số cc:'));
let bBinhPhuong = Math.pow(b, 2);


let delta = bBinhPhuong - 4 * a * c;

document.writeln("delta là :" + delta + "<br>");


if (delta < 0) {

    document.writeln("phương trình vô nghiệm");

} else if (delta > 0 ) {

    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.writeln("X1 = " + x1 + "<br>");
    document.writeln("X2 = " + x2);
    
} else if (delta===0) {

    x = (-b) / 2*a

    document.writeln('x1 = x2 ='+ x)
}
