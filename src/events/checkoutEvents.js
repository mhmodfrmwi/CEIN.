import { clearCart, getCartCount } from "../store/cart";
import { UpdateCartUI } from "../components/cartUI";
import { showToast } from "./cartEvents";

/**
 * Handles checkout page interactions:
 *  - Payment method tab switching
 *  - Card number formatting
 *  - Expiry date formatting
 *  - Place order button
 *  - Promo code
 */
export function checkoutEventsHandler(event) {
  const target = event.target;

  // ── Payment method tabs ──
  const paymentTab = target.closest(".payment-tab");
  if (paymentTab) {
    const method = paymentTab.dataset.method;

    // Update tab styles
    document.querySelectorAll(".payment-tab").forEach((tab) => {
      tab.classList.remove("bg-white", "dark:bg-neutral-900", "text-gray-900", "dark:text-white", "shadow-sm");
      tab.classList.add("text-gray-500", "dark:text-neutral-400");
    });
    paymentTab.classList.remove("text-gray-500", "dark:text-neutral-400");
    paymentTab.classList.add("bg-white", "dark:bg-neutral-900", "text-gray-900", "dark:text-white", "shadow-sm");

    // Show/hide forms
    ["card", "paypal", "cod"].forEach((m) => {
      const form = document.getElementById(`payment-${m}-form`);
      if (form) {
        form.classList.toggle("hidden", m !== method);
      }
    });
    return;
  }

  // ── Place order ──
  if (target.closest("#place-order-btn")) {
    const cartCount = getCartCount();
    if (cartCount === 0) {
      showToast("Your cart is empty.");
      return;
    }

    // Basic validation
    const email = document.getElementById("checkout-email");
    const fname = document.getElementById("checkout-fname");
    const address = document.getElementById("checkout-address");

    if (email && !email.value.trim()) {
      email.focus();
      email.classList.add("ring-2", "ring-red-500");
      showToast("Please enter your email address.");
      setTimeout(() => email.classList.remove("ring-2", "ring-red-500"), 3000);
      return;
    }
    if (fname && !fname.value.trim()) {
      fname.focus();
      fname.classList.add("ring-2", "ring-red-500");
      showToast("Please enter your first name.");
      setTimeout(() => fname.classList.remove("ring-2", "ring-red-500"), 3000);
      return;
    }
    if (address && !address.value.trim()) {
      address.focus();
      address.classList.add("ring-2", "ring-red-500");
      showToast("Please enter your shipping address.");
      setTimeout(() => address.classList.remove("ring-2", "ring-red-500"), 3000);
      return;
    }

    // Generate order number
    const orderNumber = "LUM-" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();

    clearCart();
    UpdateCartUI();

    // Navigate to confirmation
    window.location.hash = `#/order-confirmation/${orderNumber}`;
    return;
  }

  // ── Promo code ──
  if (target.closest("#apply-promo-btn")) {
    const promoInput = document.getElementById("checkout-promo");
    if (promoInput && promoInput.value.trim()) {
      showToast("Promo code is not valid.");
    } else {
      showToast("Please enter a promo code.");
    }
    return;
  }
}

// ── Input formatting (card number & expiry) ──
function checkoutInputHandler(event) {
  const target = event.target;

  // Format card number: add spaces every 4 digits
  if (target.id === "checkout-card-number") {
    let val = target.value.replace(/\D/g, "").substring(0, 16);
    target.value = val.replace(/(\d{4})(?=\d)/g, "$1 ");
    return;
  }

  // Format expiry: MM / YY
  if (target.id === "checkout-card-expiry") {
    let val = target.value.replace(/\D/g, "").substring(0, 4);
    if (val.length >= 3) {
      target.value = val.substring(0, 2) + " / " + val.substring(2);
    } else {
      target.value = val;
    }
    return;
  }

  // CVC: digits only
  if (target.id === "checkout-card-cvc") {
    target.value = target.value.replace(/\D/g, "").substring(0, 4);
    return;
  }
}

export function bindCheckoutEvents() {
  document.body.addEventListener("click", checkoutEventsHandler);
  document.body.addEventListener("input", checkoutInputHandler);
}
