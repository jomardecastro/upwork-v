
var downloadLinks = document.querySelectorAll(".downloadLink");

for (var i = 0; i < downloadLinks.length; i++) {
    downloadLinks[i].addEventListener("click", function (event) {
        event.preventDefault();
        var fileURL = this.getAttribute("data-file");
        var fileName = fileURL.substring(fileURL.lastIndexOf("/") + 1);
        var link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        link.click();
    });
}

let h_index = 0 
let v_index = 0 
let swiper_slides
let swiper_array

if ($(".slider-certificate").length > 0) 
{
    swiper_slides = $('.swiper-wrapper .swiper-slide');
    swiper_array = swiper_slides.toArray();
    setInterval(toggleActive, 4000);
}

if ($(".slider-certificate-vrtical").length > 0) 
{
    swiper_slides = $('.swiper-wrapper .swiper-slide');
    swiper_array = swiper_slides.toArray();
    setInterval(toggleActive, 4000);
}

function toggleActive()
{
    if (h_index >= swiper_slides.length) {
        h_index = 0; 
    }

    swiper_array.forEach((el) => {
        $(el).removeClass('active');
    });

    $(swiper_array[h_index]).addClass('active');
    
    h_index++;
}

// =================================================


var prevScrollPos = window.scrollY || document.documentElement.scrollTop;
var header = document.querySelector("header");

window.addEventListener("scroll", function () {
    var currentScrollPos = window.scrollY || document.documentElement.scrollTop;

    if (prevScrollPos > currentScrollPos) {
        header.classList.remove("top-100");
    } else {
        header.classList.add("top-100");
    }

    prevScrollPos = currentScrollPos;
});


$(".toggle-mob-menu").on("click", function () {
    $("#menu-header-menu").toggleClass("active");
    $(this).toggleClass("active")
})

window.onload = function () {

    setTimeout(function () {
        $('#loader').fadeOut(700)
    }, 1000); 
}

