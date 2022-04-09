// element
const cartBtn = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const closeBtn = document.querySelector(".close-btn");

cartBtn.addEventListener("click", () => {
  cart.classList.add("display");
});

closeBtn.addEventListener("click", () => {
  cart.classList.remove("display");
});

const openCart = () => {
  cart.classList.add("display");
};
