document.querySelector(".nav__links").addEventListener("click", function (el) {
  el.preventDefault();

  if (el.target.classList.contains("nav__link")) {
    el.target.style.backgroundColor = "var(--color-fifth)";
    console.log(el.target);
  }
});
