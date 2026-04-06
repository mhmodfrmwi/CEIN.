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
import { dummyProducts } from "./data/dummyData";
import { instagramPosts } from "./data/instagramPosts";
import { CartOffcanvas } from "./components/CartOffcanvas";
import { UpdateCartUI } from "./components/cartUI";
import { initCarousel } from "./events/carouselEvents";

const app = document.querySelector("#app");

function renderApp() {
  app.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${Range()}
    ${Products(dummyProducts)} 
    ${RoleModels()}
    ${BrandThought()}
    ${InstagramSection(instagramPosts)}
    ${Footer()}
    ${CartOffcanvas()}
  `;

  setTimeout(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
    UpdateCartUI();
    initCarousel();
  }, 100);
}

renderApp();

app.removeEventListener("click", window._cartEventsHandler);
window._cartEventsHandler = cartEventsHandler;
app.addEventListener("click", window._cartEventsHandler);
