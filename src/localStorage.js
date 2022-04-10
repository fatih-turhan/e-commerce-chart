const setLocalStorage = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const getLocalStorage = (name) => {
  let localItem = localStorage.getItem(name);
  if (localItem) {
    localItem = JSON.parse(localStorage.getItem(name));
  } else {
    localItem = [];
  }
  return localItem;
};

export { setLocalStorage, getLocalStorage };
