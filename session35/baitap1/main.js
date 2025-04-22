let clickadd = document.getElementById("click");
const inputCongViec = document.getElementById("congviec");

clickadd.addEventListener("click", (e) => {
    e.preventDefault();

    const congViec = inputCongViec.value.trim();
    if (congViec === "") {
        alert("Vui lòng nhập công việc!");
        return; }
  
});
  