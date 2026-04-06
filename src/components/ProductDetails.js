import { isFavorite } from "../store/favorites";

export const ProductDetails = (product) => {
  if (!product) {
    return `<div class="max-w-7xl mx-auto py-32 px-4 text-center">
      <h2 class="text-3xl font-bold dark:text-white mb-6">Product not found</h2>
      <a href="#" class="inline-block px-8 py-3 bg-black text-white hover:bg-neutral-800 transition-colors duration-300 font-semibold dark:bg-white dark:text-black dark:hover:bg-neutral-200">Return to Shop</a>
    </div>`;
  }

  const categoryName = product.category.replace("-", " ");
  const isFav = isFavorite(product.id);
  const fillState = isFav ? "currentColor" : "none";
  const colorState = isFav ? "text-red-500 border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20" : "text-gray-800 border-gray-200 bg-white hover:bg-gray-50 dark:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800";


  return `
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div class="mb-10">
        <a href="#" class="text-sm font-medium border-b border-gray-800 text-gray-800 hover:text-black dark:text-gray-300 dark:border-gray-300 dark:hover:text-white transition-colors duration-300 pb-1">
          &larr; Back to Shop
        </a>
      </div>
      
      <div class="flex flex-col md:flex-row gap-12 lg:gap-20">
        <!-- Image Section -->
        <div class="md:w-1/2 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-8 dark:bg-neutral-800/50 shadow-sm border border-gray-100 dark:border-neutral-800">
          <img src="${product.image}" alt="${product.title}" class="w-full max-w-md object-contain aspect-square hover:scale-105 transition-transform duration-500">
        </div>
        
        <!-- Details Section -->
        <div class="md:w-1/2 flex flex-col justify-center">
          <p class="text-sm text-gray-500 uppercase tracking-wider mb-3 font-semibold dark:text-neutral-400">
            ${categoryName}
          </p>
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight dark:text-white">
            ${product.title}
          </h1>
          
          <p class="text-3xl font-medium text-black mb-8 dark:text-gray-200">
            $${product.price}
          </p>
          
          <p class="text-gray-600 mb-10 leading-relaxed text-lg dark:text-neutral-300">
            This high-quality piece from our ${categoryName} collection is crafted for maximum comfort and style. Featuring a stunning design, it brings an effortlessly elegant touch to any wardrobe. Suitable for everyday wear and versatile enough for special occasions. Detailed craftsmanship ensures longevity and a premium feel.
          </p>
          
          <div class="pt-6 border-t border-gray-200 dark:border-neutral-800">
              <div class="flex flex-wrap sm:flex-nowrap gap-4 items-center">
                  <button data-id="${product.id}" class="add-to-cart-btn w-full sm:w-auto px-12 py-4 bg-black text-white hover:bg-neutral-800 transition-all duration-300 rounded text-lg font-medium tracking-wide shadow hover:shadow-lg active:scale-95 dark:bg-white dark:text-black dark:hover:bg-neutral-200 flex items-center justify-center gap-3">
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                     </svg>
                     Add to Cart
                  </button>
                  <button data-id="${product.id}" class="favorite-btn w-full sm:w-16 h-16 flex items-center justify-center border shadow-sm rounded active:scale-95 transition-all duration-300 ${colorState}">
                      <svg class="w-6 h-6 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fillState}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
