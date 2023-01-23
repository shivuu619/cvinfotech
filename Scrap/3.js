/////////////////////  Navigation Bar PC & Mobile - Start  /////////////////////
$(document).ready(function () {
    $('#about').mouseenter(function () {
        $('#aboutDrop').slideDown('fast');
    })
    $('#about').mouseleave(function () {
        $('#aboutDrop').slideUp('fast');
    })
    $('#service').mouseenter(function () {
        $('#serviceDrop').slideDown('fast');
    })
    $('#service').mouseleave(function () {
        $('#serviceDrop').slideUp('fast');
    })

    $('#navMobileAbout').click(function () {
        $('#navMobileAboutDrop').slideToggle('fast');
    })
    $('#navMobileService').click(function () {
        $('#navMobileServiceDrop').slideToggle('fast');
    })
})
function showMobileMenu(){
    document.getElementById('MobileMenu').style.display = 'block';
}
function hideMobileMenu(){
    document.getElementById('MobileMenu').style.display = 'none';
}
/////////////////////  Navigation Bar PC & Mobile - End  /////////////////////



/////////////////////  Only for Slider - Start  /////////////////////
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
/////////////////////  Only for Slider - End    /////////////////////