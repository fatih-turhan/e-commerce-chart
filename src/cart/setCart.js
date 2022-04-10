import { openCart } from "./cartToggle.js";
import { getLocalStorage, setLocalStorage } from "../localStorage.js";

let cart = getLocalStorage("cart");

export const setCart = (id) => {
  const item = cart.filter((item) => item.id === id);
  if (!item) {
    // add
  } else {
    // update
  }
  // console.log(id);
  openCart();
};

// console.log(cart);
