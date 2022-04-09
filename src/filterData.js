import fetchProducts from "./fecth.js";

let data = [];
const filterData = async () => {
  data = await fetchProducts();
  const newData = data.map((item) => {
    const {
      id,
      fields: { name, price, image },
    } = item;
    const img = image[0].thumbnails.large.url;
    return { id, name, price, img };
  });
  return newData;
};

export default filterData;
