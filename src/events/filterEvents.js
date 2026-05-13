import { Product } from "../components/ProductCard";
import { UpdateFavoriteUI } from "./favoriteEvents";

let _allProducts = [];
let _activeCategory = "all";
let _activeSort = "default";
let _maxPrice = Infinity;

/**
 * Initialise the filter system with the full product list.
 * Call this once right after rendering the NewArrivals page.
 */
export function initFilters(products) {
  _allProducts = products;
  _activeCategory = "all";
  _activeSort = "default";
  _maxPrice = products.length
    ? Math.ceil(Math.max(...products.map((p) => p.price)))
    : 500;
}

/* ── helpers ───────────────────────────────────────── */

function applyFilters() {
  let filtered = [..._allProducts];

  // Category
  if (_activeCategory !== "all") {
    filtered = filtered.filter((p) => p.category === _activeCategory);
  }

  // Price
  filtered = filtered.filter((p) => p.price <= _maxPrice);

  // Sort
  switch (_activeSort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-desc":
      filtered.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }

  renderGrid(filtered);
}

function renderGrid(products) {
  const grid = document.getElementById("new-arrivals-grid");
  const status = document.getElementById("filter-status");
  if (!grid) return;

  // Fade-out
  grid.style.opacity = "0.4";

  setTimeout(() => {
    if (products.length > 0) {
      grid.innerHTML = products.map((p) => Product(p)).join("");
    } else {
      grid.innerHTML = `
        <div class="col-span-full py-20 text-center w-full">
            <svg class="mx-auto mb-4 w-16 h-16 text-gray-300 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
            </svg>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">No products found</h3>
            <p class="text-gray-500 dark:text-neutral-400">Try adjusting your filters to find what you're looking for.</p>
        </div>
      `;
    }

    if (status) {
      status.innerText = `Showing ${products.length} product${products.length !== 1 ? "s" : ""}`;
    }

    // Fade-in
    grid.style.opacity = "1";

    // Re-apply favorite hearts
    setTimeout(() => UpdateFavoriteUI(), 0);
  }, 150);
}

/* ── event handler (delegated) ─────────────────────── */

export function filterEventsHandler(event) {
  const target = event.target;

  // ── Category pill click ──
  const categoryBtn = target.closest(".filter-category-btn");
  if (categoryBtn) {
    _activeCategory = categoryBtn.dataset.category;

    // Update pill styles
    document.querySelectorAll(".filter-category-btn").forEach((btn) => {
      if (btn.dataset.category === _activeCategory) {
        btn.className =
          "filter-category-btn px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white shadow-md";
      } else {
        btn.className =
          "filter-category-btn px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 bg-white text-gray-700 border-gray-200 hover:border-gray-900 hover:text-gray-900 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 dark:hover:border-white dark:hover:text-white";
      }
    });

    applyFilters();
    return;
  }

  // ── Sort select change ──
  if (target.id === "sort-select") {
    _activeSort = target.value;
    applyFilters();
    return;
  }

  // ── Price range input ──
  if (target.id === "price-range") {
    _maxPrice = Number(target.value);
    const label = document.getElementById("price-range-value");
    if (label) label.innerText = `$${_maxPrice}`;
    applyFilters();
    return;
  }
}

/**
 * Bind filter events. Call once during app initialization.
 */
export function bindFilterEvents() {
  document.body.addEventListener("click", filterEventsHandler);
  document.body.addEventListener("change", filterEventsHandler);
  document.body.addEventListener("input", filterEventsHandler);
}
