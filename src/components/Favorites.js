import { Product } from "./ProductCard";

export const Favorites = (products = []) => {
  return `
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in min-h-[60vh]">
        <div class="mb-10 text-center border-b border-gray-200 dark:border-neutral-800 pb-10">
            <h1 class="text-4xl font-bold md:text-5xl text-gray-900 dark:text-white mb-4">
                Saved Favorites
            </h1>
            <p class="text-lg text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Items you've liked. Hand-picked by you, for you.
            </p>
        </div>

        <div class="flex flex-wrap gap-4 sm:gap-6 justify-center">
            ${products.length > 0 
                ? products.map((product) => Product(product)).join("") 
                : '<div class="text-center w-full py-20"><p class="text-2xl font-light text-gray-500 mb-6">Your wishlist is currently empty.</p><a href="#/" class="inline-block px-8 py-3 bg-black text-white hover:bg-neutral-800 transition-colors duration-300 rounded font-medium dark:bg-white dark:text-black hover:dark:bg-gray-200">Start Shopping</a></div>'}
        </div>
    </div>
  `;
};
