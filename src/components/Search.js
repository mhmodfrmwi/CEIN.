import { Product } from "./ProductCard";

export const Search = (allProducts) => {
  
  const initialProducts = allProducts.slice(0, 12);
  const renderedProducts = initialProducts.map(p => Product(p)).join("");

  return `
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in min-h-[70vh]">
        
        <!-- Search Header & Input -->
        <div class="max-w-3xl mx-auto mb-16 relative">
            <label for="global-search-input" class="sr-only">Search products</label>
            <div class="relative">
                <input 
                    type="text" 
                    id="global-search-input" 
                    class="py-4 px-5 pl-14 block w-full border-gray-200 rounded-lg text-lg focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 shadow-sm transition-all duration-300" 
                    placeholder="Search for shirts, dresses, or collections..."
                    autocomplete="off"
                    autofocus
                >
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-5">
                    <svg class="h-6 w-6 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            </div>
            
            <p id="search-status-text" class="mt-4 text-sm text-gray-500 text-center font-medium">
                Showing suggested picks
            </p>
        </div>

        <!-- Search Results Grid -->
        <div id="search-results-grid" class="flex flex-wrap gap-4 sm:gap-6 justify-center transition-opacity duration-300">
            ${renderedProducts}
        </div>

    </div>
  `;
};
