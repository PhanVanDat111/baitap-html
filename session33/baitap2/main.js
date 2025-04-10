let kiemtra = document.getElementById('click');
let texts = document.getElementById('text') ;
let dem = document.getElementById('dem') ;

kiemtra.addEventListener('click', function () {
    dem.innerHTML = texts.value.length + " ký tự";
});
 
