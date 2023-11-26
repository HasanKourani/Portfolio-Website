//typewriter function start
var typed = new Typed("#element", {
  strings: ["MOHAMMAD HASAN KOURANI"],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true,
});

var typed = new Typed("#element1", {
  strings: ["FULL-STACK WEB DEVELOPER"],
  typeSpeed: 130,
  backSpeed: 50,
  loop: true,
});
//typewriter function end

//footer date start
document.getElementById("year").innerHTML = new Date().getFullYear();
//footer date end

//slideshow start
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let projects = document.getElementsByClassName("myProjects");
  let dots = document.getElementsByClassName("dot");
  if (n > projects.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = projects.length;
  }
  for (i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  projects[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//slideshow end

//menu button
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen ? 'fa fa-close' : 'fa fa-bars'
}
