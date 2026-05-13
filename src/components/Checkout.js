import { getCartItems, getCartTotal } from "../store/cart";

export const Checkout = () => {
  const cart = getCartItems();
  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  if (cart.length === 0) {
    return `
      <div class="max-w-7xl mx-auto py-32 px-4 text-center animate-fade-in">
        <div class="w-20 h-20 mx-auto mb-6 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center">
          <svg class="w-10 h-10 text-gray-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">Your cart is empty</h2>
        <p class="text-gray-500 dark:text-neutral-400 mb-8 max-w-md mx-auto">Looks like you haven't added any items yet. Explore our collection and find something you love.</p>
        <a href="#/new-arrivals" class="inline-block px-8 py-3.5 bg-black text-white hover:bg-neutral-800 transition-all duration-300 font-semibold rounded-lg dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-md active:scale-95">
          Browse Collection
        </a>
      </div>
    `;
  }

  return `
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-fade-in min-h-[70vh]">

      <!-- Header -->
      <div class="mb-10">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Checkout</h1>
        <p class="text-gray-500 dark:text-neutral-400 mt-2">Complete your order by filling in the details below.</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-10 lg:gap-14">

        <!-- ═══════ LEFT: FORM ═══════ -->
        <div class="lg:w-[58%] space-y-8">

          <!-- Contact Info -->
          <div class="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold flex items-center justify-center">1</span>
              Contact Information
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="checkout-email" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">Email Address</label>
                <input type="email" id="checkout-email" placeholder="you@example.com" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none" required>
              </div>
              <div>
                <label for="checkout-phone" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">Phone Number</label>
                <input type="tel" id="checkout-phone" placeholder="+1 (555) 000-0000" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none">
              </div>
            </div>
          </div>

          <!-- Shipping Address -->
          <div class="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold flex items-center justify-center">2</span>
              Shipping Address
            </h2>
            <div class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="checkout-fname" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">First Name</label>
                  <input type="text" id="checkout-fname" placeholder="John" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none" required>
                </div>
                <div>
                  <label for="checkout-lname" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">Last Name</label>
                  <input type="text" id="checkout-lname" placeholder="Doe" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none" required>
                </div>
              </div>
              <div>
                <label for="checkout-address" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">Street Address</label>
                <input type="text" id="checkout-address" placeholder="123 Main St, Apt 4B" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none" required>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <label for="checkout-city" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">City</label>
                  <input type="text" id="checkout-city" placeholder="New York" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none" required>
                </div>
                <div>
                  <label for="checkout-state" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">State</label>
                  <input type="text" id="checkout-state" placeholder="NY" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none" required>
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <label for="checkout-zip" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">ZIP Code</label>
                  <input type="text" id="checkout-zip" placeholder="10001" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none" required>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment -->
          <div class="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold flex items-center justify-center">3</span>
              Payment Method
            </h2>

            <!-- Payment method tabs -->
            <div class="flex gap-2 mb-6 p-1 bg-gray-100 dark:bg-neutral-800 rounded-lg" id="payment-method-tabs">
              <button type="button" data-method="card" class="payment-tab flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-300 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white shadow-sm">
                Credit Card
              </button>
              <button type="button" data-method="paypal" class="payment-tab flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-300 text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white">
                PayPal
              </button>
              <button type="button" data-method="cod" class="payment-tab flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-300 text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white">
                Cash on Delivery
              </button>
            </div>

            <!-- Card form -->
            <div id="payment-card-form" class="space-y-4">
              <div>
                <label for="checkout-card-name" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">Name on Card</label>
                <input type="text" id="checkout-card-name" placeholder="John Doe" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none">
              </div>
              <div>
                <label for="checkout-card-number" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">Card Number</label>
                <div class="relative">
                  <input type="text" id="checkout-card-number" placeholder="4242 4242 4242 4242" maxlength="19" class="w-full px-4 py-3 pr-14 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none tracking-wider">
                  <div class="absolute right-3 inset-y-0 flex items-center gap-1.5">
                    <svg class="h-6 w-auto text-gray-400" viewBox="0 0 36 24" fill="currentColor"><rect width="36" height="24" rx="4" fill="#1A1F71" opacity="0.15"/><text x="18" y="15" text-anchor="middle" font-size="8" font-weight="bold" fill="#1A1F71">VISA</text></svg>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="checkout-card-expiry" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">Expiry Date</label>
                  <input type="text" id="checkout-card-expiry" placeholder="MM / YY" maxlength="7" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none tracking-wider">
                </div>
                <div>
                  <label for="checkout-card-cvc" class="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1.5">CVC</label>
                  <input type="text" id="checkout-card-cvc" placeholder="123" maxlength="4" class="w-full px-4 py-3 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none tracking-wider">
                </div>
              </div>
            </div>

            <!-- PayPal form -->
            <div id="payment-paypal-form" class="hidden">
              <div class="text-center py-8">
                <div class="w-16 h-16 mx-auto mb-4 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/></svg>
                </div>
                <p class="text-gray-600 dark:text-neutral-300 font-medium">You will be redirected to PayPal to complete your payment securely.</p>
              </div>
            </div>

            <!-- COD form -->
            <div id="payment-cod-form" class="hidden">
              <div class="text-center py-8">
                <div class="w-16 h-16 mx-auto mb-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/></svg>
                </div>
                <p class="text-gray-600 dark:text-neutral-300 font-medium">Pay with cash when your order is delivered to your doorstep.</p>
                <p class="text-sm text-gray-400 dark:text-neutral-500 mt-2">An additional handling fee of $2.00 may apply.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ═══════ RIGHT: ORDER SUMMARY ═══════ -->
        <div class="lg:w-[42%]">
          <div class="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm lg:sticky lg:top-8">
            <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>

            <!-- Cart Items -->
            <div class="space-y-4 max-h-[340px] overflow-y-auto pr-1 mb-6" style="scrollbar-width: thin;">
              ${cart.map(item => `
                <div class="flex items-center gap-4">
                  <div class="relative flex-none w-16 h-16 bg-gray-50 dark:bg-neutral-800 rounded-lg overflow-hidden border border-gray-100 dark:border-neutral-700 p-1">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-contain">
                    <span class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-bold rounded-full flex items-center justify-center">${item.quantity}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">${item.title}</p>
                    <p class="text-xs text-gray-400 dark:text-neutral-500 mt-0.5">Qty: ${item.quantity}</p>
                  </div>
                  <p class="text-sm font-semibold text-gray-900 dark:text-white flex-none">$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              `).join("")}
            </div>

            <!-- Promo Code -->
            <div class="mb-6">
              <div class="flex gap-2">
                <input type="text" id="checkout-promo" placeholder="Promo code" class="flex-1 px-4 py-2.5 border border-gray-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all outline-none">
                <button type="button" id="apply-promo-btn" class="px-5 py-2.5 border border-gray-200 dark:border-neutral-700 rounded-lg text-sm font-medium text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all active:scale-95">
                  Apply
                </button>
              </div>
            </div>

            <!-- Totals -->
            <div class="space-y-3 border-t border-gray-200 dark:border-neutral-800 pt-5">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500 dark:text-neutral-400">Subtotal</span>
                <span class="font-medium text-gray-900 dark:text-white">$${subtotal.toFixed(2)}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500 dark:text-neutral-400">Shipping</span>
                <span class="font-medium ${shipping === 0 ? "text-emerald-600 dark:text-emerald-400" : "text-gray-900 dark:text-white"}">${shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500 dark:text-neutral-400">Estimated Tax</span>
                <span class="font-medium text-gray-900 dark:text-white">$${tax.toFixed(2)}</span>
              </div>
              ${shipping === 0 ? "" : `
              <p class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">🎉 Add $${(100 - subtotal).toFixed(2)} more for free shipping!</p>
              `}
              <div class="flex justify-between pt-3 border-t border-gray-200 dark:border-neutral-800">
                <span class="text-base font-bold text-gray-900 dark:text-white">Total</span>
                <span class="text-xl font-bold text-gray-900 dark:text-white">$${total.toFixed(2)}</span>
              </div>
            </div>

            <!-- Place Order Button -->
            <button type="button" id="place-order-btn" class="w-full mt-6 py-4 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-semibold rounded-lg transition-all duration-300 active:scale-[0.97] shadow-lg hover:shadow-xl text-base tracking-wide flex items-center justify-center gap-2.5">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>
              Place Order — $${total.toFixed(2)}
            </button>

            <!-- Security badges -->
            <div class="flex items-center justify-center gap-4 mt-5 text-gray-400 dark:text-neutral-500">
              <div class="flex items-center gap-1.5 text-xs">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>
                SSL Secured
              </div>
              <div class="flex items-center gap-1.5 text-xs">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>
                Encrypted Payment
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
};
