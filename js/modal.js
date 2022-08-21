// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open")
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();
// шаблон кінець

(() => {
  const refs = {
    openModalBtn: document.querySelector("[dataModalOpen--gform]"),
    closeModalBtn: document.querySelector("[dataModalClose--gform]"),
    modal: document.querySelector("[dataModal--gform]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[dataModalOpen--gform2]"),
    closeModalBtn: document.querySelector("[dataModalClose--gform2]"),
    modal: document.querySelector("[dataModal--gform2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[dataModalOpen--localform]"),
    closeModalBtn: document.querySelector("[dataModalClose--localform]"),
    modal: document.querySelector("[dataModal--localform]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// // кнопка Buy-now
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open--buy]"),
//     openModalBtnMob: document.querySelector("[data-modal-open--buy-mob]"),
//     closeModalBtn: document.querySelector("[data-modal-close--buy]"),
//     modal: document.querySelector("[data-modal--buy]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.openModalBtnMob.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open")
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// // кнопка Read more
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open--read]"),
//     closeModalBtn: document.querySelector("[data-modal-close--read]"),
//     closeModalBtnAdd: document.querySelector("[data-modal-read--close]"),
//     modal: document.querySelector("[data-modal--read]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtnAdd.addEventListener("click", toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open")
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// // кнопка Our locations
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open--locations]"),
//     closeModalBtn: document.querySelector("[data-modal-close--locations]"),
//     modal: document.querySelector("[data-modal--locations]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open")
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// // кнопка franchise
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open--franchise]"),
//     closeModalBtn: document.querySelector("[data-modal-close--franchise]"),
//     modal: document.querySelector("[data-modal--franchise]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open")
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();
