import { Product } from "./ProductCard";

const categoryLabels = {
  all: "All",
  "mens-shirts": "Men's Shirts",
  "mens-shoes": "Men's Shoes",
  "womens-dresses": "Women's Dresses",
  "womens-shoes": "Women's Shoes",
  tops: "Tops",
};

export const NewArrivals = (products = []) => {
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const maxPrice = products.length
    ? Math.ceil(Math.max(...products.map((p) => p.price)))
    : 500;

  return `
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in min-h-[60vh]">
        <!-- Header -->
        <div class="mb-10 text-center">
            <h1 class="text-4xl font-bold md:text-5xl text-gray-900 dark:text-white mb-4">
                New Arrivals
            </h1>
            <p class="text-lg text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Discover the latest additions to our collection. Hand-picked styles freshly curated for the new season.
            </p>
        </div>

        <!-- Filters Bar -->
        <div class="mb-10 space-y-6">

            <!-- Category Pills -->
            <div class="flex flex-wrap justify-center gap-2" id="category-filters">
                ${categories
                  .map(
                    (cat) => `
                    <button
                        type="button"
                        data-category="${cat}"
                        class="filter-category-btn px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                          cat === "all"
                            ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white shadow-md"
                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-900 hover:text-gray-900 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 dark:hover:border-white dark:hover:text-white"
                        }"
                    >
                        ${categoryLabels[cat] || cat}
                    </button>
                `
                  )
                  .join("")}
            </div>

            <!-- Sort & Price Row -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">

                <!-- Sort Dropdown -->
                <div class="relative w-full sm:w-auto">
                    <select
                        id="sort-select"
                        class="appearance-none w-full sm:w-52 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg py-2.5 pl-4 pr-10 text-sm text-gray-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white cursor-pointer transition-all duration-300"
                    >
                        <option value="default">Sort: Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A – Z</option>
                        <option value="name-desc">Name: Z – A</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg class="w-4 h-4 text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m6 9 6 6 6-6"/>
                        </svg>
                    </div>
                </div>

                <!-- Price Range -->
                <div class="flex items-center gap-3 w-full sm:w-auto">
                    <span class="text-sm font-medium text-gray-600 dark:text-neutral-400 whitespace-nowrap">Max Price:</span>
                    <input
                        type="range"
                        id="price-range"
                        min="0"
                        max="${maxPrice}"
                        value="${maxPrice}"
                        class="w-40 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900 dark:accent-white dark:bg-neutral-700"
                    >
                    <span id="price-range-value" class="text-sm font-semibold text-gray-900 dark:text-white min-w-[3.5rem] text-right">$${maxPrice}</span>
                </div>
            </div>

            <!-- Active filter count -->
            <p id="filter-status" class="text-center text-sm text-gray-500 dark:text-neutral-400 font-medium">
                Showing ${products.length} product${products.length !== 1 ? "s" : ""}
            </p>
        </div>

        <!-- Product Grid -->
        <div id="new-arrivals-grid" class="flex flex-wrap gap-4 sm:gap-6 justify-center transition-opacity duration-300">
            ${
              products.length > 0
                ? products.map((product) => Product(product)).join("")
                : '<p class="text-center w-full text-gray-500">No new arrivals available.</p>'
            }
        </div>
    </div>
  `;
};
