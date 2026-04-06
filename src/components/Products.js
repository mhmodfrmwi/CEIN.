// components/Products.js
import { Product } from "./ProductCard";

export const Products = (products = []) => {
  return `
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold md:text-3xl text-gray-800 dark:text-white">
                What to Wear Now
            </h2>
            <div class="flex gap-2">
                <button type="button" id="prev-product-btn" aria-label="Previous products" class="size-10 flex justify-center items-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:ring-white transition-all duration-300 active:scale-95">
                    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                </button>
                <button type="button" id="next-product-btn" aria-label="Next products" class="size-10 flex justify-center items-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:ring-white transition-all duration-300 active:scale-95">
                    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div class="relative -mx-4 sm:mx-0">
            <div id="product-carousel" class="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-0 pb-6 hide-scrollbar" style="scrollbar-width: none; -ms-overflow-style: none;">
                <style>
                    #product-carousel::-webkit-scrollbar { display: none; }
                </style>
                ${products.map((product) => Product(product)).join("")}
            </div>
        </div>
    </div>
  `;
};
