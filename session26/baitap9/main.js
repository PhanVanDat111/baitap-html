

const words = [1,3,4,5,6,7,8,9]

const result = words.filter((word) => word % 2 !== 0 );
let chanso = words.filter((word) => word % 2 == 0 );



console.log(result);
console.log(chanso);
// Expected output: Array ["exuberant", "destruction", "present"]