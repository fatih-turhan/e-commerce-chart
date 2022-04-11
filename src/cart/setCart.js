import { openCart } from "./cartToggle.js";
import { getLocalStorage, setLocalStorage } from "../localStorage.js";
import { findProduct } from "../filterData.js";
// import { filterData } from "../filterData.js";
import setCartDom from "./setCartDom.js";

// elements
const amount = document.querySelector(".cart-amount-icon");
const priceAmount = document.querySelector(".finish-amounth");
const cartContainer = document.querySelector(".cart");
const cartParent = document.querySelector(".cart-center");

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
    const amount = updateAmount(id);
    const singleItem = [...document.querySelectorAll(".amount")];
    const newAmount = singleItem.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
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
  const itemsCount = cart.reduce((total, chartItem) => {
    return (total += chartItem.amount);
  }, 0);
  amount.textContent = itemsCount;
}
function showPriceTotal() {
  const priceTotal = cart.reduce((total, chartItem) => {
    return (total += chartItem.amount * chartItem.price);
  }, 0);
  priceAmount.textContent = `Total : ${priceTotal / 100}$`;
}
function addCartsToDom() {
  cart.forEach((item) => {
    setCartDom(item);
  });
}

function clearItem(id) {
  cart = cart.filter((chartItem) => {
    chartItem.id !== id;
  });
  console.log(id);
}

function updateAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}
function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function setUpCartFunct() {
  cartContainer.addEventListener("click", (e) => {
    const target = e.target;
    const targetId = e.target.dataset.id;
    const targetParent = e.target.parentElement;
    const targetParentId = e.target.parentElement.dataset.id;
    // remove
    if (target.classList.contains("clear-btn")) {
      clearItem(targetId);
      target.parentElement.parentElement.remove();
    }
    // increase
    if (targetParent.classList.contains("inc-btn")) {
      const newAmount = updateAmount(targetParentId);
      targetParent.nextElementSibling.textContent = newAmount;
    }
    // decrease
    if (targetParent.classList.contains("dec-btn")) {
      const newAmount = decreaseAmount(targetParentId);
      if (newAmount === 0) {
        clearItem(targetParentId);
        targetParent.parentElement.parentElement.remove();
      } else {
        targetParent.previousElementSibling.textContent = newAmount;
      }
    }
    if (target.classList.contains("remove-all-btn")) {
      cart = [];
      console.log(cart);
      const children = [...cartParent.children];
      children.forEach((child) => {
        child.remove();
      });
    }
    showPriceTotal();
    showProductItemsCount();
    setLocalStorage("cart", cart);
  });
}

const init = () => {
  // update total
  showProductItemsCount();
  showPriceTotal();
  // update cart dom
  addCartsToDom();
  // inc/dec/remove
  setUpCartFunct();
};

window.addEventListener("DOMContentLoaded", () => {
  init();
});
