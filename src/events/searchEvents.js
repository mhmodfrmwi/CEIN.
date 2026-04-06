import { dummyProducts } from "../data/dummyData";
import { Product } from "../components/ProductCard";
import { UpdateFavoriteUI } from "./favoriteEvents";

export const searchEventsHandler = (event) => {
    if (event.target.id === "global-search-input") {
        const query = event.target.value.toLowerCase().trim();
        const grid = document.getElementById("search-results-grid");
        const status = document.getElementById("search-status-text");

        if (!grid || !status) return;

        grid.style.opacity = '0.5';

        setTimeout(() => {
            if (query.length === 0) {
                const initial = dummyProducts.slice(0, 12);
                grid.innerHTML = initial.map(p => Product(p)).join("");
                status.innerText = "Showing suggested picks";
            } else {
                const filtered = dummyProducts.filter(p => 
                    p.title.toLowerCase().includes(query) || 
                    p.category.toLowerCase().includes(query) ||
                    (p.description && p.description.toLowerCase().includes(query))
                );

                if (filtered.length > 0) {
                    grid.innerHTML = filtered.map(p => Product(p)).join("");
                    status.innerText = `Found ${filtered.length} result${filtered.length === 1 ? '' : 's'} for "${query}"`;
                } else {
                    grid.innerHTML = `
                        <div class="col-span-full py-20 text-center w-full">
                            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No results found</h3>
                            <p class="text-gray-500 dark:text-neutral-400">We couldn't find anything matching "${query}". Try adjusting your search.</p>
                        </div>
                    `;
                    status.innerText = "0 results";
                }
            }

            UpdateFavoriteUI();

            grid.style.opacity = '1';
        }, 150); 
    }
};

export const bindSearchEvents = () => {
    
    document.body.addEventListener("input", searchEventsHandler);
};
