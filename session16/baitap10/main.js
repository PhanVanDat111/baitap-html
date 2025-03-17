let physics  = Number(prompt(" nhập điểm toán:"));
let math  = Number(prompt(" nhập điểm lý:"));
  
let random = Math.random() * (math - physics) + physics;

document.writeln(random);