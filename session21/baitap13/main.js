for ( let i = 0 ; i < 10 ; i++){
    for( let j = 0 ; j < i ; j++){
        document.writeln('*')
    }
    document.writeln('<br>')
}
document.writeln('<br>')

let pos = 10;

for ( let i = 0; i <10; i++){
    for (let j = 0; j < pos; j++)  {
        document.writeln('*')
    }
    document.writeln('<br>')
    pos--;
}
document.writeln('<br>')


console.log("\nHình c:");
for (let i = 1; i <= 10; i++) {
    let line = "";
   
    for (let j = 1; j <= 10 - i; j++) {
        line += " ";
    }
   
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}


console.log("\nHình d:");
for (let i = 10; i >= 1; i--) {
    let line = "";
    
    for (let j = 1; j <= 10 - i; j++) {
        line += " ";
    }
    
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}