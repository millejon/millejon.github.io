// Initialize the slideIndex and timer variables and call slidesSelector.
var slideIndex = 1;
var slides = document.getElementsByClassName("slideshow");
var selectors = document.getElementsByClassName("slideSelector");
var timer = null;
slidesSelector(slideIndex);

// This function will change the slides when the forward or back arrows are 
// clicked.
function changeSlides(x) {
    clearTimeout(timer);
    slidesSelector(slideIndex += x);
}

// This function will change the slides when the buttons on the bottom of the 
// carousel are clicked.
function chooseSlide(x) {
    clearTimeout(timer);
    slidesSelector(slideIndex = x);
}

// This function will either automatically loop through the slides or change 
// slides based on user input.
function slidesSelector(x) {
    var lastSlide = slides.length;

    // If the function is called automatically, increase slide index by 1.
    if (x == undefined) {
        slideIndex += 1;
    }

    // If slideIndex goes out of bounds, reset it to the first slide.
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // If manually going left through the slide show, hitting the left arrow on 
    // the first slide will take you to the last slide.
    if (x < 1) {
        slideIndex = lastSlide;
    }

    for (var count = 0; count < lastSlide; count++) {
        slides[count].style.display = "none";
    }
    for (var button = 0; button < selectors.length; button++) {
        selectors[button].className = selectors[button].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    selectors[slideIndex - 1].className += " active";

    // This will automatically scroll through the slides.
    timer = setTimeout(slidesSelector, 4000);
}