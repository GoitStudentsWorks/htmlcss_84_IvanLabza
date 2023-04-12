(() => {
  const refs = {
    openModalBtn: document.querySelector("[buy-modal-open]"),
    closeModalBtn: document.querySelector("[buy-modal-close]"),
    modal: document.querySelector("[buy-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();