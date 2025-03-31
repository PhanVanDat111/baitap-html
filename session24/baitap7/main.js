let array = prompt("Mời bạn nhập vào chuỗi").split(" ")
const upCase = () => alert(array.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(" "))
upCase()