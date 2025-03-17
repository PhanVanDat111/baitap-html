let math  = Number(prompt(" nhập điểm toán:"));
let physics  = Number(prompt(" nhập điểm lý:"));
let chemistry = Number(prompt(" nhập điểm hóa:"));


// if (math>physics|| math>chemistry) {
//     document.writeln("Toán có điểm lớn nhất: " + math )
// }else if (physics>math|| physics> chemistry) {
//     document.writeln(" lý có điểm lớn nhất: " + physics )
// }else if(chemistry> math || chemistry> physics){
//     document.writeln("hóa có điểm lớn nhất: " + chemistry)
// }else {
//     document.writeln(" 3 điểm bằng nhau")
// }
 
Math.max(math, physics,chemistry)