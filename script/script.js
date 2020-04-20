$(document).ready(function () {
    console.log('Hi');  
});

function openMenu() {
    document.getElementById('mobile-menu').classList.remove('inactive'); 
    document.getElementById('mobile-menu').classList.add('active'); 
    document.body.classList.add('locked');
}

function closeMenu() {
    document.getElementById('mobile-menu').classList.remove('active'); 
    document.getElementById('mobile-menu').classList.add('inactive'); 
    document.body.classList.remove('locked');
}
