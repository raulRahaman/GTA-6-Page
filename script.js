const overlay = document.querySelector('.overlay');
const msg = document.querySelector('.preorder-msg')
const preorderBtn = document.querySelector('.btn');
const closeMsg = document.querySelector('.close-msg');

preorderBtn.addEventListener('click', function(e){
  e.preventDefault();
  msg.classList.remove('hidden');
  overlay.classList.remove('hidden');
})

closeMsg.addEventListener('click', function(){
  msg.classList.add('hidden');
  overlay.classList.add('hidden');
})





document.querySelector(".nav__links").addEventListener("click", function (el) {
  el.preventDefault();

  if (el.target.classList.contains("nav__link")) {
    el.target.style.backgroundColor = "var(--color-fifth)";
    console.log(el.target.closest('.slogan'));
  }
});
