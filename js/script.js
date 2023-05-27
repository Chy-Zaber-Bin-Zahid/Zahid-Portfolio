// nav
window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});

// on scroll reveal
window.addEventListener("scroll", () => {
  let reveal = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveal.length; i++) {
    let windowHight = window.innerHeight;
    let revealTop = reveal[i].getBoundingClientRect().top;
    let revealPoint = 0;

    if (revealTop < windowHight - revealPoint) {
      reveal[i].classList.add("active");
    }
    
  }
});

// footer
const date = new Date();
document.querySelector(".footer__span").textContent = `${date.getFullYear()}`;
