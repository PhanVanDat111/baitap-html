let a = Number(prompt('nhập số a:'));
let b = Number(prompt('nhập só b:'));
let c = Number(prompt('nhập só c:'));

if (a===b&&c===a&&b===c ) {
    document.writeln('tam giác đều')
} else if (a===b||c===a||b===c ){
   document.writeln('tam giác cân')
} else if (c === Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) || b === Math.sqrt(Math.pow(a,2) + Math.pow(c,2)) || a === Math.sqrt(Math.pow(b,2) + Math.pow(c,2))  ) {
    document.writeln('tam giác vuông')
} else if (a + b > c || a + c > b || b + c > a) {
    document.writeln('Tam giác thường')         
}