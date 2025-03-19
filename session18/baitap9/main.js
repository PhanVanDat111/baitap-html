let gio = Number(prompt('nhập giờ (0-23) :'));
let phut = Number(prompt('nhập phút (0-59) :'));
let giay = Number(prompt('nhập giây (0-59) :'));

phut = phut < 10 ? "0" + phut : phut;
giay = giay < 10 ? "0" + giay : giay;
if (gio > 12 ) {
    gioPM = gio -12;
    document.writeln(gioPM  + ":" + phut + ":" + giay + "pm" )
} else if( gio === 0) {
    gioAM = gio + 12
    document.writeln( gioAM  + ":" + phut + ":" + giay + "am" )
} else if (gio > 12) {
    document.writeln(gio  + ":" + phut + ":" + giay + "am" )
}