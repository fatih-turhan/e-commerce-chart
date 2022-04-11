import { openCart } from "./cartToggle.js";
import { getLocalStorage, setLocalStorage } from "../localStorage.js";
import { findProduct } from "../filterData.js";
// import { filterData } from "../filterData.js";
import setCartDom from "./setCartDom.js";

// elements
const amount = document.querySelector(".cart-amount-icon");
const priceAmount = document.querySelector(".finish-amounth");

let cart = getLocalStorage("cart");

export const setCart = async (id) => {
  const item = cart.find((item) => item.id === id);
  if (!item) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    setCartDom(product);
  } else {
    // update
  }
  // show totals
  showProductItemsCount();
  showPriceTotal();
  // update local storage
  setLocalStorage("cart", cart);
  // open cart
  openCart();
};

function showProductItemsCount() {
  console.log("showcount");
  const itemsCount = cart.reduce((total, chartItem) => {
    return (total += chartItem.amount);
  }, 0);
  amount.textContent = itemsCount;
}
function showPriceTotal() {
  const priceTotal = cart.reduce((total, chartItem) => {
    console.log(chartItem);
    return (total += chartItem.amount * chartItem.price);
  }, 0);
  console.log(priceTotal);
  priceAmount.textContent = `Total : ${priceTotal / 100}`;
}
function addCartsToDom() {
  cart.forEach((item) => {
    setCartDom(item);
  });
}

const init = () => {
  // update total
  showProductItemsCount();
  showPriceTotal();
  // update cart dom
  addCartsToDom();
};

window.addEventListener("DOMContentLoaded", () => {
  init();
});
