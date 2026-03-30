// main.js
import { BrandThought } from "./components/BrandThought";
import { Hero } from "./components/Hero";
import { InstagramSection } from "./components/InstagramSection";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Range } from "./components/Range";
import { RoleModels } from "./components/RoleModels";
import InstagramImageOne from "./assets/instagram1.jpg";
import InstagramImageTwo from "./assets/instagram2.jpg";
import InstagramImageThree from "./assets/instagram3.jpg";
import InstagramImageFour from "./assets/instagram4.jpg";
import InstagramImageFive from "./assets/instagram5.jpg";
import "./style.css";
import "preline";
import { Footer } from "./components/Footer";

const dummyProducts = [
  {
    id: 1,
    title: "Classic White Tee",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Denim Jacket",
    price: 89.5,
    image:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Black Sneakers",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Vintage Sunglasses",
    price: 45.0,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Leather Backpack",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
  },
];

const app = document.querySelector("#app");

app.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${Range()}
    ${Products(dummyProducts)} 
    ${RoleModels()}
    ${BrandThought()}
    ${InstagramSection([
      {
        image: InstagramImageOne,
        link: "#",
      },
      {
        image: InstagramImageTwo,
        link: "#",
      },
      {
        image: InstagramImageThree,
        link: "#",
      },
      {
        image: InstagramImageFour,
        link: "#",
      },
      {
        image: InstagramImageFive,
        link: "#",
      },
    ])}
    ${Footer()}
`;
