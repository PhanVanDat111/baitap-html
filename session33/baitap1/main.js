let click = document.getElementById('click');
let pass = document.getElementById('password');

click.addEventListener('click', function () { 
    if (pass.type === 'password') {
        pass.type = 'text';
        
    } else {
        pass.type = 'password';
      
    }
}
);