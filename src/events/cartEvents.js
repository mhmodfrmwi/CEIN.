import { UpdateCartUI } from "../components/cartUI";
import { dummyProducts } from "../data/dummyData";
import {
  addToCart,
  getCartCount,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../store/cart";

export const showToast = (message) => {
  const toast = document.createElement("div");
  toast.className = "fixed bottom-5 right-5 bg-black text-white px-6 py-3 rounded-lg shadow-2xl transform transition-all duration-300 translate-y-10 opacity-0 z-[100] dark:bg-white dark:text-black font-semibold text-sm tracking-wide";
  toast.innerText = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.remove("translate-y-10", "opacity-0");
  }, 10);
  
  setTimeout(() => {
    toast.classList.add("translate-y-10", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

export const cartEventsHandler = (event) => {
  if (event.target.closest(".add-to-cart-btn")) {
    const productId = parseInt(
      event.target.closest(".add-to-cart-btn").dataset.id,
    );
    const product = dummyProducts.find((p) => p.id === productId);

    if (product) {
      addToCart(product);
      showToast(`${product.title} has been added to your cart!`);
    }
    UpdateCartUI();
  }

  const increaseBtn = event.target.closest(".increase-qty");
  if (increaseBtn) {
    const productId = parseInt(increaseBtn.dataset.id);
    increaseQuantity(productId);
    UpdateCartUI();
  }

  const decreaseBtn = event.target.closest(".decrease-qty");
  if (decreaseBtn) {
    const productId = parseInt(decreaseBtn.dataset.id);
    decreaseQuantity(productId);
    UpdateCartUI();
  }

  const removeBtn = event.target.closest(".remove-item");
  if (removeBtn) {
    const productId = parseInt(removeBtn.dataset.id);
    removeFromCart(productId);
    UpdateCartUI();
  }

  const checkoutBtn = event.target.closest("#checkout-btn");
  if (checkoutBtn) {
    const cartCount = getCartCount();
    if (cartCount === 0) {
      showToast("Your cart is already empty.");
      return;
    }
    clearCart();
    UpdateCartUI();
    showToast("Purchase completed successfully! Thank you.");
    const closeBtn = document.querySelector("#close-cart-btn");
    if (closeBtn) closeBtn.click();
  }
};
