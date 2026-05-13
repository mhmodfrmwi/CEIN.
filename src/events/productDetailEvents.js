/**
 * Handles interactive elements on the Product Details page:
 *  - Thumbnail gallery switching
 *  - Color selector
 *  - Size selector
 *  - Quantity +/- buttons
 */

export function productDetailEventsHandler(event) {
  const target = event.target;

  // ── Thumbnail click ──
  const thumbBtn = target.closest(".pd-thumb-btn");
  if (thumbBtn) {
    const mainImg = document.getElementById("pd-main-image");
    if (mainImg) {
      mainImg.style.opacity = "0";
      setTimeout(() => {
        mainImg.src = thumbBtn.dataset.image;
        mainImg.style.opacity = "1";
      }, 200);
    }
    // Update thumbnail borders
    document.querySelectorAll(".pd-thumb-btn").forEach((btn) => {
      btn.classList.remove("border-black", "dark:border-white", "shadow-md");
      btn.classList.add("border-gray-200", "dark:border-neutral-700", "opacity-60");
    });
    thumbBtn.classList.remove("border-gray-200", "dark:border-neutral-700", "opacity-60");
    thumbBtn.classList.add("border-black", "dark:border-white", "shadow-md");
    return;
  }

  // ── Color selector ──
  const colorBtn = target.closest(".pd-color-btn");
  if (colorBtn) {
    document.querySelectorAll(".pd-color-btn").forEach((btn) => {
      btn.classList.remove(
        "border-black", "dark:border-white",
        "ring-2", "ring-offset-2", "ring-black", "dark:ring-white", "dark:ring-offset-neutral-900"
      );
      btn.classList.add("border-gray-200", "dark:border-neutral-600");
    });
    colorBtn.classList.remove("border-gray-200", "dark:border-neutral-600");
    colorBtn.classList.add(
      "border-black", "dark:border-white",
      "ring-2", "ring-offset-2", "ring-black", "dark:ring-white", "dark:ring-offset-neutral-900"
    );
    const label = document.getElementById("pd-selected-color");
    if (label) label.textContent = colorBtn.dataset.color;
    return;
  }

  // ── Size selector ──
  const sizeBtn = target.closest(".pd-size-btn");
  if (sizeBtn) {
    document.querySelectorAll(".pd-size-btn").forEach((btn) => {
      btn.classList.remove(
        "bg-black", "text-white", "border-black",
        "dark:bg-white", "dark:text-black", "dark:border-white", "shadow"
      );
      btn.classList.add(
        "bg-white", "text-gray-700", "border-gray-200",
        "hover:border-gray-900", "hover:text-gray-900",
        "dark:bg-neutral-900", "dark:text-neutral-300",
        "dark:border-neutral-700", "dark:hover:border-white", "dark:hover:text-white"
      );
    });
    sizeBtn.classList.remove(
      "bg-white", "text-gray-700", "border-gray-200",
      "hover:border-gray-900", "hover:text-gray-900",
      "dark:bg-neutral-900", "dark:text-neutral-300",
      "dark:border-neutral-700", "dark:hover:border-white", "dark:hover:text-white"
    );
    sizeBtn.classList.add(
      "bg-black", "text-white", "border-black",
      "dark:bg-white", "dark:text-black", "dark:border-white", "shadow"
    );
    return;
  }

  // ── Quantity buttons ──
  if (target.closest("#pd-qty-minus") || target.closest("#pd-qty-plus")) {
    const valueEl = document.getElementById("pd-qty-value");
    if (!valueEl) return;
    let qty = parseInt(valueEl.textContent) || 1;
    if (target.closest("#pd-qty-minus")) qty = Math.max(1, qty - 1);
    if (target.closest("#pd-qty-plus")) qty = Math.min(99, qty + 1);
    valueEl.textContent = qty;
    return;
  }
}

export function bindProductDetailEvents() {
  document.body.addEventListener("click", productDetailEventsHandler);
}
