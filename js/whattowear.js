//Display Formal Wear
let slideIndex = 0;
function displayFormal(){
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) { slideIndex = 1 }
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
setTimeout(displayFormal, 5000); // Change image every 2 seconds 
} 


//Display Casual Wear
function displayCasual(){
let i;
let slides = document.getElementsByClassName("casualSlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) { slideIndex = 1 }
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
setTimeout(displayCasual, 5000); // Change image every 2 seconds 
} 


//Display Sports Wear
function displaySports(){
let i;
let slides = document.getElementsByClassName("sportsSlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) { slideIndex = 1 }
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
setTimeout(displaySports, 5000); // Change image every 2 seconds 
} 


//Display Wardrobe
function displayWardrobe(){
let i;
let slides = document.getElementsByClassName("wardrobeSlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) { slideIndex = 1 }
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
setTimeout(displaySports, 10000); // Change image every 2 seconds 
} 