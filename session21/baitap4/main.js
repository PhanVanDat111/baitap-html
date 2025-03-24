 let a,b,c;
 for ( let i = 0 ; i < 3 ; i++ ){
    if (i===0) {
     a = Number(prompt('nhập vào số a'));
    } else if (i===1) {
     b = Number(prompt('nhập vào số b'));
    } else if (i===2) {
     c = Number(prompt('nhập vào số c'));
    }
}
let bBinh = Math.pow(b,2);
// tinh delta cho bai
 let delta = bBinh - 4 * a * c;
 if (delta < 0) {
    document.writeln('phương trình vô nghiệm');
 } else if (delta===0) {
    let x3 = (-b) / (2*a);
    document.writeln('phương trình có nghiệm kép X1 = X2 =' + x3 );
 } else if (delta > 0 ) {
     let x1 = (-b + Math.sqrt(delta))/( 2*a );
     let x2 = (-b - Math.sqrt(delta))/ ( 2*a );
    document.writeln('nghiệm của phương trình : x1 =' + x1 + ' và ' + ' x2 = ' + x2 );
 }