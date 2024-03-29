import { setCart } from "./cart/setCart.js";

const container = document.querySelector(".products-center");

container.addEventListener("click", (e) => {
  const selected = e.target;
  if (selected.classList.contains("btn")) {
    const id = selected.dataset.id;
    setCart(id);
  }
});
