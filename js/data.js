const refs = {
  form: document.querySelector(".form"),
  options: document.querySelector(".form__select"),
  backdrop: document.querySelector(".backdrop"),
  btnOpen: document.querySelector(".form__button"),
};

refs.btnOpen.addEventListener("click", onOpenModal);

function onOpenModal() {
  refs.form.addEventListener("submit", onFormData);
  function onFormData(event) {
    event.preventDefault();

    const choice = refs.options.value;
    const name = event.currentTarget.elements.name.value;
    const tel = event.currentTarget.elements.phone.value;

    if (name === "" || tel === "") {
      alert("Все поля должны быть заполнены");
    } else {
      const formData = {
        choice,
        name,
        tel,
      };

      refs.backdrop.classList.toggle("is-hidden");

      console.log(formData);
    }
    return refs.form.reset();
  }
}
