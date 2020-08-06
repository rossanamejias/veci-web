window.addEventListener('scroll', function(e) {
    navbarScroll();
});

window.addEventListener('load', function(e) {
    navbarScroll();
});

function navbarScroll(){
    const scrollBody = document.body.scrollTop;
    const scrollElement= document.documentElement.scrollTop;

    const element = document.querySelector(".bg-navbar");
    const element1 = document.querySelectorAll(".nav-link");
    const element2 = document.querySelector(".navbar-brand");

    element.classList.toggle("scrolled", scrollBody > 80 || scrollElement > 80);
    
    element1.forEach(elements => {
        elements.classList.toggle("text-white", scrollBody > 80 || scrollElement > 80);
    });
    
    element2.classList.toggle("text-white", scrollBody > 80 || scrollElement > 80);
}