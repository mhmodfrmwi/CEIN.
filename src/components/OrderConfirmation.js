export const OrderConfirmation = (orderNumber) => {
  return `
    <div class="max-w-2xl mx-auto py-24 px-4 text-center animate-fade-in min-h-[70vh] flex flex-col items-center justify-center">

      <!-- Success animation -->
      <div class="relative mb-8">
        <div class="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
          <svg class="w-12 h-12 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
        </div>
        <div class="absolute inset-0 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/20 rounded-full animate-ping opacity-30"></div>
      </div>

      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Order Confirmed!
      </h1>

      <p class="text-gray-500 dark:text-neutral-400 max-w-md mx-auto mb-3 text-lg">
        Thank you for your purchase. Your order has been placed successfully.
      </p>

      <div class="bg-gray-50 dark:bg-neutral-800/50 border border-gray-200 dark:border-neutral-700 rounded-xl px-6 py-4 inline-block mb-8">
        <p class="text-sm text-gray-500 dark:text-neutral-400">Order Number</p>
        <p class="text-lg font-bold text-gray-900 dark:text-white tracking-wider">#${orderNumber}</p>
      </div>

      <p class="text-sm text-gray-400 dark:text-neutral-500 mb-8 max-w-sm mx-auto">
        A confirmation email has been sent to your inbox. You can track your order status from your account.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="#" class="px-8 py-3.5 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-semibold rounded-lg transition-all duration-300 shadow-md active:scale-95">
          Continue Shopping
        </a>
      </div>
    </div>
  `;
};
