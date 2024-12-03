/* const hamburger = document.querySelector('.hamburger-menu');
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
} */
/*    const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-menu");

  hamburgerMenu.addEventListener("click", () => {
      navMenu.classList.toggle("hide");
  }); */
  var count = 1 ;
 if(count == 1)
 {
  function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');

    document.getElementById("down").style.marginTop = "220px";

}
 }else if(count == 0)
 {


    document.getElementById("down").style.marginTop = "10px";
}


 
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for reaching out! We'll get back to you soon.");
      form.reset();
  });