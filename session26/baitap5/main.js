let array1 = [1, 4, 9, 16];
function maxnumbers (array1) {
// Pass a function to map
const map1 = Math.max(...array1);
let indexnumber =array1.indexOf(map1)
 return " max  = " + map1  + " và " + "position = " + indexnumber
}
alert(maxnumbers(array1))