const container = document.querySelector(".products-center");
const showItems = (arr) => {
  container.innerHTML = arr
    .map((item) => {
      const { id, name, price, img } = item;
      return ` <article class="product">
              <img src=${img} alt="" />
              <h3>${name}</h3>
              <h3>${price / 100}</h3>
              <button data-id="${id}" class="btn">add to cart</button>
            </article>`;
    })
    .join("");
};

export default showItems;
