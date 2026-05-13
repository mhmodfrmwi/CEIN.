import { isFavorite } from "../store/favorites";

/* ── Clothing option maps (generated per category) ── */

const colorsByCategory = {
  "mens-shirts": [
    { name: "Black", hex: "#1a1a1a" },
    { name: "White", hex: "#f5f5f5" },
    { name: "Navy", hex: "#1e3a5f" },
    { name: "Olive", hex: "#556b2f" },
    { name: "Burgundy", hex: "#800020" },
  ],
  "mens-shoes": [
    { name: "Black", hex: "#1a1a1a" },
    { name: "Brown", hex: "#8b5e3c" },
    { name: "White", hex: "#f5f5f5" },
    { name: "Grey", hex: "#808080" },
  ],
  "womens-dresses": [
    { name: "Black", hex: "#1a1a1a" },
    { name: "Blush", hex: "#de9b9b" },
    { name: "Ivory", hex: "#fffff0" },
    { name: "Emerald", hex: "#2e8b57" },
    { name: "Midnight Blue", hex: "#191970" },
  ],
  "womens-shoes": [
    { name: "Black", hex: "#1a1a1a" },
    { name: "Nude", hex: "#e3bc9a" },
    { name: "Red", hex: "#c62828" },
    { name: "White", hex: "#f5f5f5" },
  ],
  tops: [
    { name: "Black", hex: "#1a1a1a" },
    { name: "White", hex: "#f5f5f5" },
    { name: "Sage", hex: "#9caf88" },
    { name: "Dusty Rose", hex: "#dcae96" },
    { name: "Lavender", hex: "#b4a7d6" },
  ],
};

const sizesByCategory = {
  "mens-shirts": ["XS", "S", "M", "L", "XL", "XXL"],
  "mens-shoes": ["7", "8", "9", "10", "11", "12", "13"],
  "womens-dresses": ["XS", "S", "M", "L", "XL"],
  "womens-shoes": ["5", "6", "7", "8", "9", "10"],
  tops: ["XS", "S", "M", "L", "XL"],
};

/* ── Helpers ── */

function starSVG(filled) {
  return `<svg class="w-4 h-4 ${filled ? "text-amber-400" : "text-gray-300 dark:text-neutral-600"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
}

function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) => starSVG(i < Math.round(rating))).join("");
}

function renderReviewStars(rating) {
  return Array.from({ length: 5 }, (_, i) => starSVG(i < rating)).join("");
}

function timeSince(dateStr) {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
  ];
  for (const { label, seconds: s } of intervals) {
    const count = Math.floor(seconds / s);
    if (count >= 1) return `${count} ${label}${count > 1 ? "s" : ""} ago`;
  }
  return "Just now";
}

/* ── Component ── */

export const ProductDetails = (product) => {
  if (!product) {
    return `<div class="max-w-7xl mx-auto py-32 px-4 text-center">
      <h2 class="text-3xl font-bold dark:text-white mb-6">Product not found</h2>
      <a href="#" class="inline-block px-8 py-3 bg-black text-white hover:bg-neutral-800 transition-colors duration-300 font-semibold dark:bg-white dark:text-black dark:hover:bg-neutral-200">Return to Shop</a>
    </div>`;
  }

  const categoryName = product.category.replace(/-/g, " ");
  const isFav = isFavorite(product.id);
  const fillState = isFav ? "currentColor" : "none";
  const colorState = isFav
    ? "text-red-500 border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20"
    : "text-gray-800 border-gray-200 bg-white hover:bg-gray-50 dark:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800";

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const colors = colorsByCategory[product.category] || colorsByCategory["tops"];
  const sizes = sizesByCategory[product.category] || sizesByCategory["tops"];
  const isShoe = product.category.includes("shoes");

  const originalPrice = product.discountPercentage
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

  const reviews = product.reviews || [];
  const avgRating = product.rating || (reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) : 0);

  return `
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">

      <!-- Breadcrumb -->
      <nav class="mb-8 flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-400">
        <a href="#" class="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        <a href="#/new-arrivals" class="hover:text-gray-900 dark:hover:text-white transition-colors capitalize">${categoryName}</a>
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        <span class="text-gray-900 dark:text-white font-medium truncate max-w-[200px]">${product.title}</span>
      </nav>

      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">

        <!-- ═══════ IMAGE GALLERY ═══════ -->
        <div class="lg:w-[55%] space-y-4">
          <!-- Main Image -->
          <div class="relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800 aspect-square flex items-center justify-center p-6">
            <img
              id="pd-main-image"
              src="${images[0]}"
              alt="${product.title}"
              class="w-full h-full object-contain transition-transform duration-500 hover:scale-105 cursor-zoom-in"
            >
            ${product.discountPercentage && product.discountPercentage > 5 ? `
              <span class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                -${Math.round(product.discountPercentage)}%
              </span>` : ""}
          </div>

          <!-- Thumbnail Strip -->
          ${images.length > 1 ? `
            <div class="flex gap-3 overflow-x-auto pb-2" id="pd-thumbnails">
              ${images.map((img, idx) => `
                <button
                  type="button"
                  data-image="${img}"
                  class="pd-thumb-btn flex-none w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${idx === 0 ? "border-black dark:border-white shadow-md" : "border-gray-200 dark:border-neutral-700 opacity-60 hover:opacity-100 hover:border-gray-400 dark:hover:border-neutral-500"} bg-gray-50 dark:bg-neutral-800 p-1"
                >
                  <img src="${img}" alt="${product.title} view ${idx + 1}" class="w-full h-full object-contain">
                </button>
              `).join("")}
            </div>
          ` : ""}
        </div>

        <!-- ═══════ DETAILS PANEL ═══════ -->
        <div class="lg:w-[45%] flex flex-col">

          <!-- Brand & Title -->
          ${product.brand ? `<p class="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-neutral-500 mb-2">${product.brand}</p>` : ""}
          <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-3">${product.title}</h1>

          <!-- Rating -->
          <div class="flex items-center gap-3 mb-6">
            <div class="flex items-center gap-0.5">
              ${renderStars(avgRating)}
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-neutral-300">${avgRating.toFixed(1)}</span>
            <span class="text-sm text-gray-400 dark:text-neutral-500">(${reviews.length} review${reviews.length !== 1 ? "s" : ""})</span>
          </div>

          <!-- Price -->
          <div class="flex items-baseline gap-3 mb-8">
            <span class="text-3xl font-bold text-black dark:text-white">$${product.price}</span>
            ${originalPrice ? `<span class="text-lg text-gray-400 line-through">$${originalPrice}</span>` : ""}
          </div>

          <!-- Description -->
          <p class="text-gray-600 dark:text-neutral-300 leading-relaxed mb-8">
            ${product.description || `This high-quality piece from our ${categoryName} collection is crafted for maximum comfort and style.`}
          </p>

          <!-- ── Color Selector ── -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-semibold text-gray-900 dark:text-white">Color</span>
              <span id="pd-selected-color" class="text-sm text-gray-500 dark:text-neutral-400">${colors[0].name}</span>
            </div>
            <div class="flex flex-wrap gap-2.5" id="pd-color-options">
              ${colors.map((c, idx) => `
                <button
                  type="button"
                  data-color="${c.name}"
                  class="pd-color-btn w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 ${idx === 0 ? "border-black dark:border-white ring-2 ring-offset-2 ring-black dark:ring-white dark:ring-offset-neutral-900" : "border-gray-200 dark:border-neutral-600"}"
                  style="background-color: ${c.hex};"
                  title="${c.name}"
                ></button>
              `).join("")}
            </div>
          </div>

          <!-- ── Size Selector ── -->
          <div class="mb-8">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-semibold text-gray-900 dark:text-white">${isShoe ? "Size (US)" : "Size"}</span>
              <button type="button" class="text-xs text-gray-500 underline hover:text-gray-900 dark:hover:text-white transition-colors">Size Guide</button>
            </div>
            <div class="flex flex-wrap gap-2" id="pd-size-options">
              ${sizes.map((s, idx) => `
                <button
                  type="button"
                  data-size="${s}"
                  class="pd-size-btn min-w-[3rem] h-11 px-4 rounded-lg border text-sm font-medium transition-all duration-300 active:scale-95 ${idx === 0 ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow" : "bg-white text-gray-700 border-gray-200 hover:border-gray-900 hover:text-gray-900 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 dark:hover:border-white dark:hover:text-white"}"
                >${s}</button>
              `).join("")}
            </div>
          </div>

          <!-- ── Quantity ── -->
          <div class="mb-8">
            <span class="text-sm font-semibold text-gray-900 dark:text-white mb-3 block">Quantity</span>
            <div class="inline-flex items-center border border-gray-200 dark:border-neutral-700 rounded-lg overflow-hidden">
              <button type="button" id="pd-qty-minus" class="w-11 h-11 flex items-center justify-center text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors active:scale-90">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/></svg>
              </button>
              <span id="pd-qty-value" class="w-12 h-11 flex items-center justify-center text-sm font-semibold text-gray-900 dark:text-white border-x border-gray-200 dark:border-neutral-700">1</span>
              <button type="button" id="pd-qty-plus" class="w-11 h-11 flex items-center justify-center text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors active:scale-90">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
            ${product.stock && product.stock < 20 ? `<p class="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">Only ${product.stock} left in stock</p>` : ""}
          </div>

          <!-- ── Action Buttons ── -->
          <div class="flex flex-wrap sm:flex-nowrap gap-3 mb-8">
            <button data-id="${product.id}" class="add-to-cart-btn flex-1 min-w-0 px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-all duration-300 rounded-lg text-base font-semibold tracking-wide shadow hover:shadow-lg active:scale-[0.97] dark:bg-white dark:text-black dark:hover:bg-neutral-200 flex items-center justify-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              Add to Cart
            </button>
            <button data-id="${product.id}" class="favorite-btn w-14 h-14 flex-none flex items-center justify-center border shadow-sm rounded-lg active:scale-95 transition-all duration-300 ${colorState}">
              <svg class="w-6 h-6 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fillState}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <!-- ── Info Badges ── -->
          <div class="grid grid-cols-2 gap-3 mb-8">
            <div class="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800">
              <svg class="w-5 h-5 text-gray-500 dark:text-neutral-400 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-2.25 0h-2.735a2.068 2.068 0 0 0-1.588.863 17.917 17.917 0 0 0-3.214 9.19c-.04.621.468 1.124 1.09 1.124H3.75m14.25 0V5.625c0-.621-.504-1.125-1.125-1.125H5.625c-.621 0-1.125.504-1.125 1.125v12.5"/></svg>
              <div>
                <p class="text-xs font-semibold text-gray-900 dark:text-white">Shipping</p>
                <p class="text-xs text-gray-500 dark:text-neutral-400">${product.shippingInformation || "Standard delivery"}</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800">
              <svg class="w-5 h-5 text-gray-500 dark:text-neutral-400 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182"/></svg>
              <div>
                <p class="text-xs font-semibold text-gray-900 dark:text-white">Returns</p>
                <p class="text-xs text-gray-500 dark:text-neutral-400">${product.returnPolicy || "30 days return"}</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800">
              <svg class="w-5 h-5 text-gray-500 dark:text-neutral-400 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>
              <div>
                <p class="text-xs font-semibold text-gray-900 dark:text-white">Availability</p>
                <p class="text-xs ${product.availabilityStatus === "In Stock" ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}">${product.availabilityStatus || "In Stock"}</p>
              </div>
            </div>
            ${product.sku ? `
            <div class="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800">
              <svg class="w-5 h-5 text-gray-500 dark:text-neutral-400 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5Zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"/></svg>
              <div>
                <p class="text-xs font-semibold text-gray-900 dark:text-white">SKU</p>
                <p class="text-xs text-gray-500 dark:text-neutral-400">${product.sku}</p>
              </div>
            </div>` : ""}
          </div>

          <!-- ── Tags ── -->
          ${product.tags && product.tags.length ? `
          <div class="flex flex-wrap gap-2 mb-6">
            ${product.tags.map(tag => `
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-neutral-400 capitalize">${tag}</span>
            `).join("")}
          </div>` : ""}

        </div>
      </div>

      <!-- ═══════ REVIEWS SECTION ═══════ -->
      ${reviews.length > 0 ? `
      <div class="mt-16 border-t border-gray-200 dark:border-neutral-800 pt-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Customer Reviews</h2>

        <!-- Reviews Summary -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 p-6 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800">
          <div class="text-center sm:text-left">
            <p class="text-5xl font-bold text-gray-900 dark:text-white">${avgRating.toFixed(1)}</p>
            <div class="flex items-center gap-1 mt-2 justify-center sm:justify-start">
              ${renderStars(avgRating)}
            </div>
            <p class="text-sm text-gray-500 dark:text-neutral-400 mt-1">${reviews.length} review${reviews.length !== 1 ? "s" : ""}</p>
          </div>
          <div class="flex-1 w-full space-y-2">
            ${[5, 4, 3, 2, 1].map(star => {
              const count = reviews.filter(r => r.rating === star).length;
              const pct = reviews.length ? Math.round((count / reviews.length) * 100) : 0;
              return `
                <div class="flex items-center gap-3">
                  <span class="text-xs font-medium text-gray-600 dark:text-neutral-400 w-3">${star}</span>
                  <svg class="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <div class="flex-1 h-2 bg-gray-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <div class="h-full bg-amber-400 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                  </div>
                  <span class="text-xs text-gray-500 dark:text-neutral-400 w-8 text-right">${pct}%</span>
                </div>`;
            }).join("")}
          </div>
        </div>

        <!-- Individual Reviews -->
        <div class="space-y-6" id="pd-reviews-list">
          ${reviews.map(r => `
            <div class="p-5 rounded-xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full bg-gray-200 dark:bg-neutral-700 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-neutral-300">
                    ${r.reviewerName ? r.reviewerName.charAt(0).toUpperCase() : "?"}
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-gray-900 dark:text-white">${r.reviewerName || "Anonymous"}</p>
                    <p class="text-xs text-gray-400 dark:text-neutral-500">${r.date ? timeSince(r.date) : ""}</p>
                  </div>
                </div>
                <div class="flex items-center gap-0.5">${renderReviewStars(r.rating)}</div>
              </div>
              <p class="text-sm text-gray-600 dark:text-neutral-300">${r.comment || ""}</p>
            </div>
          `).join("")}
        </div>
      </div>` : ""}
    </div>
  `;
};
