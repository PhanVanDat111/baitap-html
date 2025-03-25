
let width = 25;
let height = 10;

document.writeln('<pre>');


let topLine = '';
for (let i = 0; i < width; i++) {
    topLine += '*';
}
document.writeln(topLine);


for (let i = 0; i < height - 2; i++) {
    let middleLine = '*';
    for (let j = 0; j < width - 2; j++) {
        middleLine += ' ';
    }
    middleLine += '*';
    document.writeln(middleLine );
}


if (height > 1) {
    let bottomLine = '';
    for (let i = 0; i < width; i++) {
        bottomLine += '*';
    }
    document.writeln(bottomLine);
}


document.writeln('</pre>');