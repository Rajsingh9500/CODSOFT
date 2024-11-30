const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});


function myFunction() {
  var x = document.getElementById("card");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}