import { toggleFavorite, getFavorites } from "../store/favorites";
import { dummyProducts } from "../data/dummyData";
import { showToast } from "./cartEvents";

export const UpdateFavoriteUI = () => {
    const favoriteBadge = document.getElementById("favorite-badge");
    if (favoriteBadge) {
        favoriteBadge.innerText = getFavorites().length;
    }
    
    // Attempt to sync all visible favorite buttons on screen
    const favButtons = document.querySelectorAll(".favorite-btn");
    const favorites = getFavorites();
    const favIds = favorites.map(f => f.id);
    
    favButtons.forEach(btn => {
        const id = parseInt(btn.dataset.id);
        const svg = btn.querySelector("svg");
        if (svg) {
            if (favIds.includes(id)) {
                svg.setAttribute("fill", "currentColor");
                svg.classList.add("text-red-500");
                svg.classList.remove("text-gray-800", "dark:text-white");
            } else {
                svg.setAttribute("fill", "none");
                svg.classList.remove("text-red-500");
                svg.classList.add("text-gray-800", "dark:text-white");
            }
        }
    });
};

export const favoriteEventsHandler = (event) => {
    const favBtn = event.target.closest(".favorite-btn");
    
    if (favBtn) {
        // Prevent clicking the favorite btn from jumping to product details if wrapped in an anchor
        event.preventDefault(); 
        event.stopPropagation();
        
        const productId = parseInt(favBtn.dataset.id);
        // Look up in dummyProducts or the existing favorites array (if viewing favorites page)
        const product = dummyProducts.find(p => p.id === productId) || getFavorites().find(p => p.id === productId);
        
        if (product) {
            const isFavNow = toggleFavorite(product);
            
            if (isFavNow) {
                showToast(`Added ${product.title} to favorites.`);
            } else {
                showToast(`Removed from favorites.`);
                
                // If we are currently ON the favorites page, we should trigger a re-render 
                // so the removed item disappears from the grid automatically.
                if (window.location.hash === "#/favorites") {
                   window.dispatchEvent(new Event("hashchange"));
                }
            }
            
            UpdateFavoriteUI();
        }
    }
};
