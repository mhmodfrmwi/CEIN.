export const addToCart = (product) => {
  const cart = getCartItems();
  const productCount =
    cart.find((item) => item.id === product.id)?.quantity || 0;
  let updatedCart;
  if (productCount > 0) {
    updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  } else {
    updatedCart = [...cart, { ...product, quantity: 1 }];
  }
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const getCartTotal = () => {
  const cart = getCartItems();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};
export const getCartCount = () => {
  const cart = getCartItems();
  return cart.reduce((count, item) => count + item.quantity, 0);
};
export const clearCart = () => {
  localStorage.removeItem("cart");
};

export const removeFromCart = (productId) => {
  const cart = getCartItems();
  const updatedCart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
export const increaseQuantity = (productId) => {
  const cart = getCartItems();
  const updatedCart = cart.map((item) => {
    if (item.id === productId) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
export const decreaseQuantity = (productId) => {
  const cart = getCartItems();
  const existingItem = cart.find((item) => item.id === productId);
  
  if (existingItem && existingItem.quantity === 1) {
    removeFromCart(productId);
    return;
  }

  const updatedCart = cart.map((item) => {
    if (item.id === productId) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

