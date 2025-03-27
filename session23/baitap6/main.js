let mang = [ '', false, 0, 5, 10, 'Hello world!' ];
let mangLoc = [];
for (let i = 0; i < mang.length; i++) {
    if ( mang[i]) {
        mangLoc.push(mang[i]);
    }
}
document.writeln( mangLoc.join(' '));