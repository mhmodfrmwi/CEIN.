import { getCartItems, getCartTotal } from "../store/cart";

export const UpdateCartUI = () => {
  const cartItemsContainer = document.getElementById("cart-items-container");
  const cartTotalElement = document.getElementById("cart-total");
  const cartBadge = document.getElementById("cart-badge");
  const cart = getCartItems();
  const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
  if (cartBadge) cartBadge.innerText = totalItems;
  if (cartTotalElement)
    cartTotalElement.innerText = `$${getCartTotal().toFixed(2)}`;
  if (!cartItemsContainer) return;
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-center space-y-4 pt-12"><div class="w-16 h-16 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center"><svg class="w-8 h-8 text-gray-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></div><p class="text-gray-500 dark:text-neutral-400 font-medium">Your cart is empty</p></div>`;
    return;
  }
  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
    <div class="group flex items-center gap-4 py-4 border-b border-gray-100 dark:border-neutral-800 transition-all duration-300">
      <div class="relative bg-gray-50 dark:bg-neutral-800 rounded-md p-0.5 overflow-hidden">
        <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover mix-blend-multiply dark:mix-blend-normal transform transition-transform group-hover:scale-105">
      </div>
      
      <div class="flex-1">
        <h4 class="text-sm font-semibold text-gray-800 dark:text-neutral-200 line-clamp-1">${item.title}</h4>
        <p class="text-sm font-medium text-gray-500 dark:text-neutral-400 mt-0.5">$${item.price.toFixed(2)}</p>
        
        <div class="flex items-center gap-1 mt-2.5">
          <button class="decrease-qty w-7 h-7 rounded-sm bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white transition-colors" data-id="${item.id}">
            <svg class="w-3.5 h-3.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
          </button>
          <span class="w-8 text-center text-sm font-semibold text-black dark:text-white">${item.quantity}</span>
          <button class="increase-qty w-7 h-7 rounded-sm bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:text-black dark:hover:text-white transition-colors" data-id="${item.id}">
            <svg class="w-3.5 h-3.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </button>
        </div>
      </div>

      <button class="remove-item text-gray-400 hover:text-red-500 dark:text-neutral-600 dark:hover:text-red-500 p-2 transition-colors active:scale-95" data-id="${item.id}">
        <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
      </button>
    </div>
  `,
    )
    .join("");
};
