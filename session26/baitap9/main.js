

let words = [1,2,3,4,5,6,7,8,9];

function sumchanle(words) {
    sumle = 0;
    let sole = words.filter((word) => word % 2 !== 0 );
for ( let i = 0 ; i < sole.length ; i++){
    sumle +=sole[i]
}
    let chanso = words.filter((word) => word % 2 == 0 );
    let sumchan = 0;
    for ( let i = 0 ; i < chanso.length ; i++){
        sumchan +=chanso[i]}

    return "tong chan = " + sumchan + "tong le = " + sumle
}



alert(sumchanle(words));