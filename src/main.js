import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Range } from "./components/Range";
import "./style.css";
import "preline";

const app = document.querySelector("#app");

app.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${Range()}
    
`;
