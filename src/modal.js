// modal header
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
// modal geo
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-geo-open]"),
    closeModalBtn: document.querySelector("[data-geo-close]"),
    modal: document.querySelector("[geo-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
// modal franchise
(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-franchise-open]"),
    closeModalBtn: document.querySelector("[modal-franchise-close]"),
    modal: document.querySelector("[franchise-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
// franchise JS
// $(".name").focus(function(){
//   $(".name-help").slideDown(500);
// }).blur(function(){
//   $(".name-help").slideUp(500);
// });

// $(".email").focus(function(){
//   $(".email-help").slideDown(500);
// }).blur(function(){
//   $(".email-help").slideUp(500);
// });
