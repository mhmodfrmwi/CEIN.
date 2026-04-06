import { Product } from "./ProductCard";

export const NewArrivals = (products = []) => {
  return `
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in min-h-[60vh]">
        <div class="mb-10 text-center">
            <h1 class="text-4xl font-bold md:text-5xl text-gray-900 dark:text-white mb-4">
                New Arrivals
            </h1>
            <p class="text-lg text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Discover the latest additions to our collection. Hand-picked styles freshly curated for the new season.
            </p>
        </div>

        <div class="flex flex-wrap gap-4 sm:gap-6 justify-center">
            ${products.length > 0 ? products.map((product) => Product(product)).join("") : '<p class="text-center w-full text-gray-500">No new arrivals available.</p>'}
        </div>
    </div>
  `;
};
