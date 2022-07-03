const refs = {
  menu: document.querySelector(".menu"),
  btn: document.querySelector(".button"),
};

refs.btn.addEventListener("click", onMenuOpen);

function onMenuOpen() {
  refs.menu.classList.toggle("is-open");
}
