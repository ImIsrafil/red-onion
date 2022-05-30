function setDataToDB(clientCart) {
  const id = clientCart.foodId;
  const exists = getDB();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = clientCart.quantity;
  } else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      let newCount = shopping_cart[id] + clientCart.quantity;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = clientCart.quantity;
    }
  }
  updateDB(shopping_cart);
}

function getDB() {
  return localStorage.getItem("shopping_cart");
}

function updateDB(cart) {
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
}

function removeFromDB(clientCart) {
  const id = clientCart.foodId;
  const exists = getDB();
  if (!exists) {
  } else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateDB(shopping_cart);
  }
}

function getStoredCart() {
  const exists = getDB();
  return exists ? JSON.parse(exists) : {};
}

function clearTheCart() {
  localStorage.removeItem("shopping_cart");
}

export {
  setDataToDB,
  removeFromDB as deleteFromDB,
  getStoredCart,
  clearTheCart,
};
