// components/ProductCard.js

export const Product = ({ id, image, title, price }) => {
  return `
    <div class="w-[85vw] sm:w-[calc(50%_-_12px)] md:w-[calc(33.333%_-_16px)] lg:w-[calc(25%_-_18px)] flex-none snap-start flex flex-col bg-white transition-shadow duration-300 group overflow-hidden dark:bg-neutral-900 dark:border-neutral-800">
        
        <div class="relative aspect-square w-full overflow-hidden bg-gray-50 dark:bg-neutral-800">
            <img 
              src="${image}" 
              alt="${title}" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
            
            <button data-id="${id}" class="add-to-cart-btn absolute bottom-3 right-3 bg-white/90 p-2.5 rounded-full text-gray-800 shadow-md hover:bg-black hover:text-white transition-all duration-300 active:scale-95 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-white dark:hover:text-black">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </button>
        </div>

        <div class="p-4 md:p-4 flex flex-col grow">
            <h3 class="text-lg text-gray-800 line-clamp-2 min-h-9 dark:text-neutral-200">
                ${title}
            </h3>
            
            <div class="flex items-center justify-between">
                <span class="text-lg text-black dark:text-white">
                    $${price}
                </span>
            </div>
        </div>
    </div>
  `;
};
