//Scans for Unchecked and Checked...sets overlays accordingly
function toggleSet() {
    var toggleOn = document.getElementsByClassName('layerToggle');
    for (var i = 0; i < toggleOn.length; i++) {
        if (toggleOn[i].checked) {
            document.getElementById(toggleOn[i].id + 'Show').click();

        } else {
            document.getElementById(toggleOn[i].id + 'Hide').click();
        }
    };
};

//Scans for Unchecked and Checked...sets overlays accordingly
function radioSet() {
    var radioToggleOn = document.getElementsByClassName('radioToggle');
    var hideElems = document.getElementsByClassName("hidelink");
    for (var i = 0; i < hideElems.length; i++) { hideElems[i].click(); }
    for (var i = 0; i < radioToggleOn.length; i++) {
        if (radioToggleOn[i].checked) {
            document.getElementById(radioToggleOn[i].id + 'Show').click();
        }
    };
    toggleSet();
};

function radioToggleSet() {
    var radioToggleOn = document.getElementsByClassName('radioToggle');
    for (var i = 0; i < radioToggleOn.length; i++) {
        if (radioToggleOn[i].checked) {
            radioToggleOn[i].click();
        }
        radioSet();
    };
};
//Toggle Buttons Eventlistern class=layerToggle
var toggleClick = document.getElementsByClassName("layerToggle");

for (var i = 0; i < toggleClick.length; i++) {
    toggleClick[i].addEventListener('click', toggleSet, false);
};

//Radio Button Eventlistern class=radioToggle
var radioToggleClick = document.getElementsByClassName("radioToggle");

for (var i = 0; i < radioToggleClick.length; i++) {
    radioToggleClick[i].addEventListener('click', radioToggleSet, false);
};

//Carousel script
//simple carousel script
var slideIndex = 1;
var slideClass = document.getElementsByClassName('slideshow-container');
if (slideClass.length > 0) {
    showSlides(slideIndex);


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
    //Plus Carousel Eventlistern class=plusSlidesClass
    var plusSlidesClass = document.getElementsByClassName("plusSlidesClass");
    for (var i = 0; i < plusSlidesClass.length; i++) {
        plusSlidesClass[i].addEventListener('click', function () {
            plusSlides(1);
        }, false);
    };
    //Minus Carousel Eventlistern class=minusSlidesClass
    var minusSlidesClass = document.getElementsByClassName("minusSlidesClass");
    for (var i = 0; i < minusSlidesClass.length; i++) {
        minusSlidesClass[i].addEventListener('click', function () {
            plusSlides(-1);
        }, false);
    };
};
//End Carousel Functions

