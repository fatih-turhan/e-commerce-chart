const setCartDom = ({ id, name, price, img, amount }) => {
  const container = document.querySelector(".cart-center");
  const article = document.createElement("article");
  article.classList.add("chart-product");
  article.setAttribute("data-id", id);
  article.innerHTML = `
         <img src=${img}alt="" />
            <!-- name-clear -->
            <div>
              <p class="product-name">${name}</p>
              <button data-id="${id}" class="clear-btn">clear item</button>
            </div>
            <!-- inc-dec -->
            <div class="amounts">
              <button data-id="${id}" class="cart-btn inc-btn">
                <i class="fas fa-plus"></i>
              </button>
              <p data-id="${id}" class="amount">${amount}</p>
              <button data-id="${id}" class="cart-btn dec-btn">
                <i class="fas fa-minus"></i>
              </button>
            </div>
  `;
  container.appendChild(article);
};

export default setCartDom;
