let a = Number(prompt('nhập số điểm:'));

if (a>=8) {
    document.writeln("loại giỏi");
} else if( a >= 6.5 ) {
    document.writeln("loại khá");
} else if (a >= 5) {
    document.writeln("loại trung bình");
} else {
    document.writeln("loại yếu");
}