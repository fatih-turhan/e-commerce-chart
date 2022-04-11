import fetchProducts from "./fecth.js";

let data = [];

const filterData = async () => {
  data = await fetchProducts();
  data = data.map((item) => {
    const {
      id,
      fields: { name, price, image },
    } = item;
    const img = image[0].thumbnails.large.url;
    return { id, name, price, img };
  });
  return data;
};

const findProduct = (id) => {
  const product = data.find((item) => item.id === id);
  return product;
};

export { filterData, findProduct };
