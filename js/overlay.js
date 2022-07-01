const refs = {
  btnFirst: document.querySelector(".propositions__button--first"),
  btnSecond: document.querySelector(".propositions__button--second"),
  btnThird: document.querySelector(".propositions__button--third"),
  modalFirst: document.querySelector(".card__container--first"),
  modalSecond: document.querySelector(".card__container--second"),
  modalThird: document.querySelector(".card__container--third"),
};

refs.btnFirst.addEventListener("click", onOpenOverlayFirst);
refs.btnSecond.addEventListener("click", onOpenOverlaySecond);
refs.btnThird.addEventListener("click", onOpenOverlayThird);

function onOpenOverlayFirst() {
  refs.modalFirst.classList.toggle("is-open");
}
function onOpenOverlaySecond() {
  refs.modalSecond.classList.toggle("is-open");
}
function onOpenOverlayThird() {
  refs.modalThird.classList.toggle("is-open");
}
