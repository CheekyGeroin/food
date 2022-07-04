const refs = {
  backdrop: document.querySelector(".backdrop"),
  btnOpen: document.querySelector(".form__button"),
};

refs.btnOpen.addEventListener("click", onOpenModal);

function onOpenModal() {
  refs.backdrop.classList.toggle("is-hidden");
}
