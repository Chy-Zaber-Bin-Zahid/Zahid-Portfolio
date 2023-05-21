window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", this.window.scrollY > 0);
});

const date = new Date();
document.querySelector(
  ".footer__span"
).textContent = `${date.getFullYear()}`;
