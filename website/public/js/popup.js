/* var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
  overlay = document.getElementById("overlay"),
  popupRegister = document.getElementById("popup-register"),
  btnCerrarPopup = document.getElementById("btn-cerrar-popup");

btnAbrirPopup.addEventListener("click", function () {
  overlay.classList.add("active");
  popupRegister.classList.add("active");
});

btnCerrarPopup.addEventListener("click", function () {
  overlay.classList.remove("active");
  popupRegister.classList.remove("active");
}); */
/* Abrir el modal */
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.getElementById('close-modal');
const seguirComprandoBtn = document.getElementById('seguir-comprando-btn');

cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === cartModal) {
     cartModal.style.display = 'none';
  }
});

seguirComprandoBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

//Funcion En la vista products el boton de agragar al carrito abre el modal

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartModal = document.getElementById('cart-modal');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          cartModal.style.display = 'block';
      });
  });
});

// 

