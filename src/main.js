import { BrandThought } from "./components/BrandThought";
import { Hero } from "./components/Hero";
import { InstagramSection } from "./components/InstagramSection";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Range } from "./components/Range";
import { RoleModels } from "./components/RoleModels";
import "./style.css";
import "preline";
import { Footer } from "./components/Footer";
import { cartEventsHandler } from "./events/cartEvents";
import { dummyProducts, fetchProducts } from "./data/dummyData";
import { instagramPosts } from "./data/instagramPosts";
import { CartOffcanvas } from "./components/CartOffcanvas";
import { UpdateCartUI } from "./components/cartUI";
import { initCarousel } from "./events/carouselEvents";
import { ProductDetails } from "./components/ProductDetails";
import { NewArrivals } from "./components/NewArrivals";
import { Sales } from "./components/Sales";
import { Journal } from "./components/Journal";
import { Story } from "./components/Story";
import { JournalStory } from "./components/JournalStory";
import { journalArticles } from "./data/journalData";
import { Favorites } from "./components/Favorites";
import { Search } from "./components/Search";
import { favoriteEventsHandler, UpdateFavoriteUI } from "./events/favoriteEvents";
import { bindSearchEvents } from "./events/searchEvents";
import { getFavorites } from "./store/favorites";
import { bindFilterEvents, initFilters } from "./events/filterEvents";
import { bindProductDetailEvents } from "./events/productDetailEvents";
import { Checkout } from "./components/Checkout";
import { OrderConfirmation } from "./components/OrderConfirmation";
import { bindCheckoutEvents } from "./events/checkoutEvents";






const app = document.querySelector("#app");

async function initializeApp() {
  app.innerHTML = `
    <div class="flex items-center justify-center h-screen">
      <div class="animate-spin rounded-full h-32 w-32 border-t-4 border-gray-200">
        <svg class="w-8 h-8 text-gray-600 mx-auto mt-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <p class="text-gray-600 mt-4">Loading...</p>
      </div>
    </div>
  `;
  const products = await fetchProducts();
  renderApp(products);
}

function renderApp(products) {
  app.innerHTML = `
    ${Navbar()}
    <main id="main-content" class="min-h-screen"></main>
    ${Footer()}
    ${CartOffcanvas()}
  `;

  setupRouter(products);

  setTimeout(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
    UpdateCartUI();
    UpdateFavoriteUI();
  }, 100);
}

function setupRouter(products) {
  const mainContent = document.getElementById("main-content");

  const renderRoute = () => {
    const hash = window.location.hash;
    
    if (hash.startsWith("#/product/")) {
      const productId = parseInt(hash.split("/")[2]);
      const product = products.find(p => p.id === productId);
      mainContent.innerHTML = ProductDetails(product);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash === "#/new-arrivals") {
      const newProducts = products.slice(0, 16); 
      mainContent.innerHTML = NewArrivals(newProducts);
      initFilters(newProducts);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash === "#/sale") {
      const saleProducts = products.slice(16, 32); 
      mainContent.innerHTML = Sales(saleProducts);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash.startsWith("#/journal/")) {
      const articleId = parseInt(hash.split("/")[2]);
      const article = journalArticles.find(a => a.id === articleId);
      mainContent.innerHTML = JournalStory(article);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash === "#/journal") {
      mainContent.innerHTML = Journal();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash === "#/favorites") {
      mainContent.innerHTML = Favorites(getFavorites());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash === "#/story") {
      mainContent.innerHTML = Story();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash === "#/search") {
      mainContent.innerHTML = Search(products);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
          const searchInput = document.getElementById("global-search-input");
          if (searchInput) searchInput.focus();
      }, 50);
    } else if (hash === "#/checkout") {
      mainContent.innerHTML = Checkout();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash.startsWith("#/order-confirmation/")) {
      const orderNumber = hash.split("/")[2] || "000000";
      mainContent.innerHTML = OrderConfirmation(orderNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      mainContent.innerHTML = `
        ${Hero()}
        ${Range()}
        ${Products(products)} 
        ${RoleModels()}
        ${BrandThought()}
        ${InstagramSection(instagramPosts)}
      `;
      setTimeout(() => initCarousel(), 0);
    }
    
    setTimeout(() => UpdateFavoriteUI(), 0);
  };

  window.addEventListener("hashchange", renderRoute);
  
  renderRoute();
}

app.addEventListener("click", cartEventsHandler);
app.addEventListener("click", favoriteEventsHandler);
bindSearchEvents();
bindFilterEvents();
bindProductDetailEvents();
bindCheckoutEvents();
initializeApp();
