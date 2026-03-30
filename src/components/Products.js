// components/Products.js
import { Product } from "./ProductCard";

export const Products = (products = []) => {
  return `
    <div class="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p class="text-lg text-gray-800 sm:text-xl dark:text-white text-start max-w-3xl px-2 py-12">
            What to Wear Now
        </p>            
        <div class="flex flex-wrap gap-6 justify-center">
            ${products.map((product) => Product(product)).join("")}
        </div>   
    </div>
    
  `;
};
