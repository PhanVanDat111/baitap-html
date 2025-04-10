let click = document.getElementById('click');

click.addEventListener('click', function () {
    let luachon = document.getElementById('menu').value;
    let danhsach = document.querySelectorAll('#productList li');

    danhsach.forEach(element => {
        if (element.getAttribute('data-category') === luachon) {
            element.style.display = 'list-item';
        }
        else {
            element.style.display = 'none';
        }
    });
});


