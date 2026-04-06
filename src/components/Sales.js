import { Product } from "./ProductCard";

export const Sales = (products = []) => {
  return `
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in min-h-[60vh]">
        <div class="mb-10 text-center">
            <h1 class="text-4xl font-bold md:text-5xl text-red-600 dark:text-red-500 mb-4 tracking-tight">
                Seasonal Sale
            </h1>
            <p class="text-lg text-gray-800 dark:text-neutral-300 max-w-2xl mx-auto font-medium">
                Up to 40% OFF carefully selected premium items. Final sale items. <br class="hidden sm:block"/> Shop the drop before it's gone forever.
            </p>
        </div>

        <div class="flex flex-wrap gap-4 sm:gap-6 justify-center">
            ${products.length > 0 ? products.map((product) => Product(product)).join("") : '<p class="text-center w-full text-gray-500">No sale items available at the moment.</p>'}
        </div>
    </div>
  `;
};
