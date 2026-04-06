export let dummyProducts = [];

export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=100");

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    const clothingCategories = [
      "mens-shirts",
      "mens-shoes",
      "womens-dresses",
      "womens-shoes",
      "tops",
    ];
    const formattedProducts = data.products
      .filter((item) => clothingCategories.includes(item.category))
      .map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.thumbnail,
        category: item.category,
      }));

    dummyProducts = formattedProducts;
    return formattedProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
