var iconHamburger =document.querySelector(".icon-hamburger");
var nav=document.querySelector(".navbar-menu");
iconHamburger.addEventListener('click', function(){
    nav.classList.toggle('active');
})