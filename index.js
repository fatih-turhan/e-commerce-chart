import "./src/cart/setCart.js";
// import fetchProducts from "./src/fecth.js";
import { filterData } from "./src/filterData.js";
import showItems from "./src/showItems.js";
import "./src/getItemId.js";

// const url = "https://course-api.com/javascript-store-products";

window.addEventListener("DOMContentLoaded", async () => {
  const data = await filterData();
  showItems(data);
});
