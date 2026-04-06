export const CartOffcanvas = () => {
  return `
    <div id="cart-offcanvas" class="hs-overlay hs-overlay-backdrop-open:bg-black/50 hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-transform duration-300 transform h-full max-w-sm w-full z-[80] bg-white border-l border-gray-200 dark:bg-neutral-900 dark:border-neutral-800 shadow-2xl" tabindex="-1">
      
      <div class="flex justify-between items-center py-4 px-6 border-b border-gray-100 dark:border-neutral-800">
        <h3 class="font-bold text-gray-900 dark:text-white tracking-wide text-lg">Shopping Cart</h3>
        <button type="button" id="close-cart-btn" class="inline-flex justify-center items-center w-8 h-8 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-600 transition-all text-sm" data-hs-overlay="#cart-offcanvas">
          <span class="sr-only">Close cart</span>
          <svg class="w-4 h-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="p-6 overflow-y-auto h-[calc(100vh-170px)]" id="cart-items-container">
        <div class="flex items-center justify-center h-full">
          <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full dark:text-neutral-500" role="status" aria-label="loading"></div>
        </div>
      </div>

      <div class="p-6 border-t border-gray-100 dark:border-neutral-800 absolute bottom-0 w-full bg-white dark:bg-neutral-900">
        <div class="flex justify-between items-center font-bold mb-4 text-gray-900 dark:text-white">
          <span class="text-lg">Total:</span>
          <span id="cart-total" class="text-xl tracking-tight">$0.00</span>
        </div>
        <button id="checkout-btn" class="w-full py-3.5 bg-black text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:focus:ring-neutral-700 font-semibold rounded-md transition-all active:scale-[0.98] tracking-wide shadow-md">
          Complete Purchase
        </button>
      </div>
    </div>
  `;
};
