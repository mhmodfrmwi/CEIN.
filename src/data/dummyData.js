export let dummyProducts = [];

const clothingCategories = [
  "mens-shirts",
  "mens-shoes",
  "womens-dresses",
  "womens-shoes",
  "tops",
];

export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    console.log(data);

    const formattedProducts = data.products
      .filter((item) => clothingCategories.includes(item.category))
      .map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.thumbnail,
        category: item.category,
        // Extended fields for ProductDetails
        images: item.images || [item.thumbnail],
        description: item.description || "",
        brand: item.brand || "Lumina",
        rating: item.rating || 0,
        stock: item.stock || 0,
        availabilityStatus: item.availabilityStatus || "In Stock",
        shippingInformation:
          item.shippingInformation || "Ships in 3-5 business days",
        returnPolicy: item.returnPolicy || "30 days return policy",
        reviews: item.reviews || [],
        tags: item.tags || [],
        discountPercentage: item.discountPercentage || 0,
        sku: item.sku || "",
      }));

    dummyProducts = formattedProducts;
    return formattedProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
