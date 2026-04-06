let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const getFavorites = () => favorites;

export const isFavorite = (productId) => favorites.some(item => item.id === productId);

export const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
        favorites = favorites.filter(item => item.id !== product.id);
    } else {
        favorites.push(product);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return isFavorite(product.id);
};
