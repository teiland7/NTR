// npm install --save moduleName
// import { createRequire } from 'rotten-tomatoes';
// const require = createRequire(import.meta.url);

console.log("reading js file");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// var tomatoes = require('rotten-tomatoes');
// var movies = tomatoes('6nkt9qb3ggxbd3ejyzsjvq3x');

// movies.search('Ninja Turtles', function(err, results) {
//   results.sort(function(a, b) {
//     return b.ratings.audience_score - a.ratings.audience_score;
//   });
//   console.log('The best Ninja Turtles movies of all time');
//   console.log('=========================================');
//   results.forEach(function(movie) {
//     console.log(movie.ratings.audience_score + '\t' + movie.title + ' (' + movie.year + ')');
//   });
// });


// const button = document.querySelector('#btn-rate');
// button.addEventListener('click',function(event){
//   // const rating = Number(document.querySelector('#rating').value);
//   console.log("button clicked");
//   const resultElement = document.querySelector("#result");
//   resultElement.innerHTML = "5";
// });