function scrollToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
function FixNav(){
    var nav = document.getElementById('nav');
    if(window.pageYOffset > 100){
        nav.style.position = "fixed";
        nav.style.top = 0;
    } else {
        nav.style.position = "absolute";
        nav.style.top = 100;
    }
}